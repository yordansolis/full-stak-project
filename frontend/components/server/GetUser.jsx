// server component
export async function GetUser(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIUSER}${id}/`);
  const data = await res.json();
  return data;
}
