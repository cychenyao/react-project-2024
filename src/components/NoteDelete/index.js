import { redirect } from "react-router-dom";

export async function action({ params }) {
  await fetch(`/api/notes/${params.noteId}`, {
    method: "DELETE",
  });
  return redirect("/");
}
