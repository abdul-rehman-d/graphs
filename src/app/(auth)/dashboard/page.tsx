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
  return (
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
                <Link href="/graph/create">Create Graph</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>My Graphs</CardTitle>
              <CardDescription>View and edit your saved graphs</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Access your previously created graphs.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/graphs">View Graphs</Link>
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
                Choose from a variety of graph templates to get started quickly.
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
  );
}
