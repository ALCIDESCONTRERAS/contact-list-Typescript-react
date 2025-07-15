import { useLoaderData } from "react-router";
import { FormContact } from "../components/FormContact";
import type { Contact } from "../interfaces/Contact";

export const EditContact = () => {
  const contact = useLoaderData() as Contact;

  return <FormContact contact={contact}/>;
};
