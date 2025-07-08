"use client";

import { useRouter } from "next/navigation";

export default function BtnDelete({ id }) {
  const router = useRouter();

  const handleClick = async () => {
    const confirmDelete = confirm(
      "¿Estás seguro de que deseas eliminar este usuario?"
    );

    if (!confirmDelete) {
      alert("❌ Usuario no eliminado");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIUSER}${id}/`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("✅ Usuario eliminado correctamente");
        router.push("/getusers");
      } else {
        alert("❌ Error al eliminar el usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error de conexión al eliminar el usuario");
    }
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
  hover:bg-red-500 
  transition
  cursor-pointer
      "
      onClick={handleClick}
    >
      Eliminar
    </button>
  );
}
