import { auth } from "@clerk/nextjs/server";

export default async function GraphPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const graphId = (await params).id;
  const { userId } = await auth();

  if (!userId) return;

  return (
    <main className="p-8 flex justify-center items-center">
      <p>
        {userId} : {graphId}
      </p>
    </main>
  );
}
