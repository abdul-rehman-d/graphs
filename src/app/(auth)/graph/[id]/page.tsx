import { auth } from "@clerk/nextjs/server";

export default async function GraphPage({
  params,
}: {
  params: { id: string };
}) {
  const graphId = params.id;
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
