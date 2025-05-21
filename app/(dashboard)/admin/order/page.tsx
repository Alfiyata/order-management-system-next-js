import Link from 'next/link';

export default function OrderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Order Page</h1>
      <p className="text-lg">Welcome to the order page!</p>
      <Link href="/admin/order/123">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Order 123
        </button>
        </Link>
    </div>
  );
}