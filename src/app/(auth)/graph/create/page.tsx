import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function createNewGraph(userId: string) {
  console.log("userId", userId);
  return new Promise<string>((resolve) => {
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
