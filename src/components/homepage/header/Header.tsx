import WriteIcon from "../../ui/icons/WriteIcon";

export default function Header() {
  const name = sessionStorage.getItem("username");

  const iniziali = name?.slice(0, 2);
  return (
    <header className="flex justify-between items-center md:px-20 px-3 py-4 border-b border-cyan-900">
      
      <div className="flex items-center gap-2">
        <p className="text-2xl font-semibold text-cyan-500">Companies</p>
      </div>

      <button className="bg-cyan-500 p-2 rounded-full font-bold text-black">
        {iniziali?.toUpperCase()}
      </button>
    </header>
  );
}
