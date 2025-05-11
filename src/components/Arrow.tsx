'use client';
import { useRouter } from 'next/navigation';

function Arrow() {
  const router = useRouter();
  return (
    <span
      onClick={() => router.back()}
      className="bg-black/40 cursor-pointer absolute left-5 top-3 rounded-full text-3xl hover:scale-120   p-3 w-12 h-12 flex  justify-center items-center"
    >
      ⇠
    </span>
  );
}

export default Arrow;
