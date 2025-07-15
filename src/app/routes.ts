import { createBrowserRouter } from "react-router";
import App from "../App";
import { ContactList } from "../pages/ContactList";
import { getContacts, updateContact } from "../api/contactList";
import { createContactAction, editContactAction } from "./contactActions";
import { AddContact } from "../pages/AddContact";
import { EditContact } from "../pages/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: ContactList, loader: getContacts },
      {
        path: "/add-contact/",
        Component: AddContact,
        action: createContactAction,
      },
      {
        path: "/edit-contact/:id",
        Component: EditContact,
        action: editContactAction,
        loader: updateContact,
      },
    ],
  },
]);

export default router;
