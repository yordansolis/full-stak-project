import PutUserForm from "../../../../components/client/PutUserForm";
export default function PutUserPage({ params }) {
  return <PutUserForm userId={params.id} />;
}
