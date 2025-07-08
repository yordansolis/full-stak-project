"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Función para traer datos de un usuario
async function GetUser(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIUSER}${id}/`);
  return await res.json();
}

export default function PutUserForm({ userId }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    GetUser(userId).then(setUser);
  }, [userId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = parseInt(e.target.age.value);
    const address = e.target.address.value;
    const is_active = e.target.is_active.checked;
    const phone = e.target.phone.value;

    const payload = { name, email, age, address, is_active, phone };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIUSER}${userId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error:", errorData);
        alert("Error al actualizar el usuario");
      } else {
        alert("✅ Usuario actualizado exitosamente");
        router.push("/getusers");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error de conexión al actualizar el usuario");
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl text-neutral-300">Cargando usuario...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <form
        onSubmit={onSubmit}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-md mx-auto space-y-4"
      >
        <h1 className="text-2xl font-semibold text-neutral-200 text-center">
          Actualizar Usuario
        </h1>

        <div>
          <label className="block text-sm text-neutral-400">Nombre</label>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            required
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 border border-neutral-700"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            required
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 border border-neutral-700"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400">Dirección</label>
          <input
            type="text"
            name="address"
            defaultValue={user.address}
            required
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 border border-neutral-700"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400">Teléfono</label>
          <input
            type="text"
            name="phone"
            defaultValue={user.phone}
            required
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 border border-neutral-700"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400">Edad</label>
          <input
            type="number"
            name="age"
            defaultValue={user.age}
            required
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 border border-neutral-700"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_active"
            defaultChecked={user.is_active}
            className="h-4 w-4 text-blue-600 rounded"
          />
          <label className="text-sm text-neutral-400">¿Está activo?</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}
