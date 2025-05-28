export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Order Detail Page</h1>
      <p className="text-lg">Order ID: {id}</p>
    </div>
  );
}