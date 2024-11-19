import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return notFound();
  }

  return props.children;
}
