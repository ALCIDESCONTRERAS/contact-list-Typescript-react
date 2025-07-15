import type { LoaderFunctionArgs } from "react-router";
import type { Contact, NewContact } from "../interfaces/Contact";

const URL_API =
  "https://playground.4geeks.com/contact/agendas/alcides/contacts/";

type DataApi = {
  contacts: Contact[];
};

export const createUser = () => {
  try {
    fetch("https://playground.4geeks.com/contact/agendas/alcides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getContacts = async () => {
  try {
    const res = await fetch(URL_API);
    if (!res.ok) createUser();
    const data: DataApi = await res.json();
    return data.contacts;
    
  } catch (error) {
    console.error(error);
  }
};

export const createContact = async (contact:NewContact) => {
  try {
    fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
  } catch (error) {
    console.log(error);
  }
};


export const deleteContact = async (id: number) => {
  try {
      fetch(`${URL_API}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
  } catch (error) {
    console.error(error);    
  }
}

export const updateContact = async ({params}: LoaderFunctionArgs) => {
  const id  = params.id;
  try {
    const res = await fetch(URL_API);
    const data: DataApi  = await res.json();
    const contacts = data.contacts;
    
    const contact = contacts.find(contact => contact.id === parseInt(id!));    
    return contact;

  } catch (error) {
    console.error(error);    
  }
}
