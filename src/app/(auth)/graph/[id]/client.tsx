"use client";

import { GraphCreator } from "@/components/common/graph-creator";
import { graphs } from "@/lib/db/schema";

type Graph = typeof graphs.$inferSelect;

export function AuthGraphCreator({ graph }: { graph: Graph }) {
  return <GraphCreator initialGraph={graph.graphData} onChange={() => {}} />;
}
