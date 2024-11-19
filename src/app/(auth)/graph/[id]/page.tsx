import { db } from "@/lib/db";
import { graphs } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { AuthGraphCreator } from "./client";

export default async function GraphPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const graphId = (await params).id;
  const { userId } = await auth();

  if (!userId) return;

  const graphQueryResult = await db
    .select()
    .from(graphs)
    .where(eq(graphs.id, graphId));

  if (graphQueryResult.length !== 1) {
    return notFound();
  }

  const graph = graphQueryResult[0];

  if (graph.userId !== userId) {
    return notFound();
  }

  return (
    <main className="max-w-screen-xl w-full mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold">{graph.name}</h2>
      </div>
      <AuthGraphCreator graph={graph} />
    </main>
  );
}
