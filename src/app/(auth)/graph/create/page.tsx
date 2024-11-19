import { db } from "@/lib/db";
import { graphs } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";

async function createNewGraph(userId: string): Promise<string> {
  const data = await db.insert(graphs).values({
    id: uuid(),
    userId: userId,
    name: 'Untitled Graph',
  }).returning();
  if (data.length === 1) {
    return data[0].id;
  }
  return "";
}

export default async function CreateGraphPage() {
  const { userId } = await auth();

  if (!userId) return;

  const id = await createNewGraph(userId);

  if (!id) throw new Error("something went wrong");

  redirect(`/graph/${id}`);
}
