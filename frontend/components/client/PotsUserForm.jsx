"use client";

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
    const res = await fetch(process.env.NEXT_PUBLIC_APIUSER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error:", errorData);
      alert("Error al crear el usuario");
    } else {
      const data = await res.json();
      console.log("Usuario creado:", data);
      alert("✅ Usuario creado exitosamente");
      e.target.reset();
    }
  } catch (error) {
    console.error("Error de red:", error);
    alert("❌ Error de conexión con el servidor");
  }
};

export default function PotsUserForm() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-neutral-200 mb-6">
        Crear Usuario
      </h1>

      <form
        onSubmit={onSubmit}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-md space-y-4 shadow-md"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-300"
          >
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Nombre"
            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-300"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-neutral-300"
          >
            Edad:
          </label>
          <input
            type="number"
            name="age"
            required
            placeholder="Edad"
            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-neutral-300"
          >
            Dirección:
          </label>
          <input
            type="text"
            name="address"
            required
            placeholder="Dirección"
            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="is_active"
            className="h-4 w-4 text-indigo-500 bg-neutral-800 border border-neutral-700 rounded focus:ring-indigo-500"
          />
          <label htmlFor="is_active" className="text-sm text-neutral-300">
            ¿Está activo?
          </label>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-300"
          >
            Teléfono:
          </label>
          <input
            type="text"
            name="phone"
            required
            placeholder="Teléfono"
            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-neutral-100 font-semibold py-2 px-4 rounded-md transition"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
}
