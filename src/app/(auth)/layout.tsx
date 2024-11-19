import { auth } from "@clerk/nextjs/server";
import { LoaderCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return notFound();
  }

  return props.children;
}
