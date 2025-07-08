import { Suspense } from "react";
import BtnReturn from "../../../../components/client/BtnReturn.jsx";
import BtnUpdate from "../../../../components/client/BtnUpdate.jsx";
import BtnDelete from "../../../../components/client/BtnDelete.jsx";
import { GetUser } from "../../../../components/server/GetUser.jsx";

// client component
export default async function GetUsers({ params }) {
  const user = await GetUser(params.id);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-neutral-300 mb-6">
          Usuario no encontrado
        </h1>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="text-neutral-400">⌛️ Loading...</div>}>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-neutral-300 mb-6">
          Detalles de Usuario
        </h1>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:bg-neutral-800 transition duration-300">
          <p className="text-lg font-medium text-neutral-200 mb-2">
            {user.id}. {user.name}
          </p>
          <p className="text-sm text-neutral-400 mb-1">📧 {user.email}</p>
          <p className="text-sm text-neutral-400 mb-1">🏠 {user.address}</p>
          <p className="text-sm text-neutral-400 mb-1">📞 {user.phone}</p>
          <p className="text-sm text-neutral-400 mb-1">
            {user.is_active ? "Activo ✅" : "Inactivo ❌"}
          </p>
          <p className="text-sm text-neutral-400 mb-4">👦 {user.age}</p>

          <div className="flex justify-end gap-2">
            <BtnReturn />
            <BtnUpdate id={user.id} />
            <BtnDelete id={user.id} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
