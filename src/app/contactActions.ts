import { redirect, type ActionFunctionArgs } from "react-router";
import { createContact } from "../api/contactList";
import type { NewContact } from "../interfaces/Contact";


export const createContactAction = async ({ request }: {request: Request}) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;

  const newContact: NewContact = { name, address, phone, email};
  await createContact(newContact);
  return redirect("/");
};

export const editContactAction = async ({request, params} : ActionFunctionArgs) => {
  const {id} = params;
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");

  const contact = {name, email, phone, address};

  fetch(`https://playground.4geeks.com/contact/agendas/alcides/contacts/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  })
  return redirect("/");
};