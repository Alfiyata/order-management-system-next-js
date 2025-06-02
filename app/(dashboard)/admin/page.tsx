import Image from 'next/image';
import Link from 'next/link';
import ImagePhone from '@/public/phone.jpg';

export default function AdminPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1 className="text-2xl">Admin Page</h1>
            <Image 
            alt="Wine Glass and Bottle"
            src={ImagePhone}
            width={500}
            height={300}
            />
            
            <Link href="/admin/order" className="p-4">
              Order
            </Link>
        </main>
        </div>
    );
}