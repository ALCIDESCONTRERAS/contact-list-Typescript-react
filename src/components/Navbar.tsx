export const Navbar = () => {
  return (
    <header className="flex justify-between align-middle p-4 bg-cyan-900">
      <h1 className="text-2xl font-bold text-amber-50">Contact List</h1>
      <button className="bg-green-800 text-amber-50 p-2 hover:bg-green-600 rounded-md">
        Add new contact
      </button>
    </header>
  );
};
