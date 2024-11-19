"use client";

import { GraphCreator } from "@/components/common/graph-creator";

export default function PublicAppPage() {
  return (
    <main className="max-w-screen-xl w-full mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Try Cali Graphs</h2>
        <p className="mb-4">
          Create and copy your graph without signing in. To save your work,
          please sign up for an account.
        </p>
      </div>
      <GraphCreator onChange={() => { }} />
    </main>
  );
}
