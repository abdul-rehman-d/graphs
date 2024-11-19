import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function createNewGraph(userId: string) {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 2000);
  });
}

export default async function CreateGraphPage() {
  const { userId } = await auth();

  if (!userId) return;

  const id = await createNewGraph(userId);

  redirect(`/graph/${id}`);
}
