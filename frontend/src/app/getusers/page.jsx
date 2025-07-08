import BtnUser from "../../../components/client/BtnUser.jsx";

// server component
async function getUser() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIUSER);
  const data = await res.json();
  return data;
}

// client component
export default async function GetUsers() {
  const users = await getUser();
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-neutral-200 mb-6">
        Lista de Usuarios
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:bg-neutral-800 transition duration-300"
          >
            <p className="text-base font-medium text-neutral-200">
              {user.id}. {user.name}
            </p>
            <p className="text-sm text-neutral-400">📧 {user.email}</p>
            <p className="text-sm text-neutral-400">🏠 {user.address}</p>
            <p className="text-sm text-neutral-400">📞 {user.phone}</p>
            <p className="text-sm text-neutral-400">
              {user.is_active ? "Activo ✅" : "Inactivo ❌"}
            </p>
            <p className="text-sm text-neutral-400">👦 {user.age}</p>

            <BtnUser id={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
