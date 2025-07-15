import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="flex justify-between align-middle py-4 px-50 bg-cyan-900">
      <Link to={"/"}>
      <img  alt="" />
        <h1 className="text-2xl font-bold text-amber-50">Contact List</h1>
      </Link>
      <Link to={"/add-contact/"}>
        <button className="bg-green-800 text-amber-50 p-2 hover:bg-green-600 rounded-md cursor-pointer">
          Add new contact
        </button>
      </Link>
    </header>
  );
};
