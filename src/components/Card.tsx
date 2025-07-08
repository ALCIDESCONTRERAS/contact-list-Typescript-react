export const Card = () => {
  return (
    <article className="border px-14 py-2 flex justify-between">
      <div className="flex">
        <img
          className="rounded-full w-36 h-36 mask-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTU0trkfCoaEMPwwAIdmPeBDRWtlLtADozw&s"
          alt=""
        />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-2xl mb-4">Locaso Caballin</h3>
          <div className="flex gap-2 align-middle">
            <i className="fa-solid fa-location-dot"></i>
            <span>por ahí</span>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-phone"></i>
            <p>665665665</p>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-envelope"></i>
            <span>email</span>
          </div>
        </div>
      </div>
      <div className="flex gap-14 m-3">
        <i className="fa-solid fa-pencil hover:text-yellow-600 cursor-pointer"></i>
        <i className="fa-solid fa-trash hover:text-red-500 cursor-pointer"></i>
      </div>
    </article>
  );
};
