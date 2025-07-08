"use client";

import { useRouter } from "next/navigation";

export default function BtnReturn() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/getusers"); // Asegurate que la ruta exista
  };

  return (
    <button
      className="
  bg-neutral-500 
  text-neutral-200 
  px-3 
  py-1.5 
  rounded-md 
  text-sm 
  font-normal 
  hover:bg-blue-500 
  transition
  cursor-pointer
            "
      onClick={handleClick}
    >
      👈🏽
    </button>
  );
}
