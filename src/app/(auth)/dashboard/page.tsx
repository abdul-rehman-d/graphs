import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { graphs as graphsTable } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CopyToClipboardButton } from "@/components/common/copy-button";

dayjs.extend(relativeTime);

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) return;

  const graphs = await db
    .select()
    .from(graphsTable)
    .where(eq(graphsTable.userId, userId));

  return (
    <main className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex flex-row items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">My Graphs</h2>
            <p className="">View and edit your saved graphs</p>
          </div>
          <Button asChild>
            <Link href="/graph/create">Create Graph</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {graphs.map((graph) => (
            <Link href={`/graph/${graph.id}`} key={graph.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{graph.name}</CardTitle>
                  <CardDescription>
                    Edited {dayjs(graph.updatedAt).fromNow()}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex flex-row items-center justify-between">
                  <CopyToClipboardButton
                    variant="outline"
                    graphData={graph.graphData}
                    className="flex flex-row gap-2"
                    toastTitle={`Copied ${graph.name}!`}
                  />
                  <Button variant="default" asChild>
                    <span>Open</span>
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
