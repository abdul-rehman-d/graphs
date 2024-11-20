import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Cali Graphs",
  description: "Create and edit your saved graphs.",
};
export default async function PageLevelDashboardLayout(props: {
  children: React.ReactNode;
}) {
  return props.children;
};

