import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            GraphMaster Dashboard
          </h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Create New Graph</CardTitle>
                <CardDescription>
                  Generate a new graph for Excalidraw
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Start with a blank canvas and create your custom graph.</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/app/create">Create Graph</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Graphs</CardTitle>
                <CardDescription>
                  View and edit your saved graphs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access your previously created graphs.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/app/my-graphs">View Graphs</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>
                  Start with a pre-designed template
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Choose from a variety of graph templates to get started
                  quickly.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/app/templates">Browse Templates</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
