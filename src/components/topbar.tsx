import Link from "next/link";
import { Button } from "./ui/button";

export function Topbar() {
  return (
    <header className="bg-white shadow mb-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">GraphMaster</h1>
        <div>
          <Button asChild variant="outline" className="mr-4">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
