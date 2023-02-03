import NotFoundIcon from "../../ui/icons/NotFoundIcon";

interface props {
  onClick: () => void;
}
export default function MessageNotFound(props: props) {
  
    function onClickHandler() {
    props.onClick();
  }

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-start items-center bg-line bg-cover bg-center bg-no-repeat gap-3">
      <p className="text-slate-50 text-center uppercase font-semibold text-2xl mt-28 flex gap-2 border border-transparent p-3 rounded-md shadow-md shadow-cyan-500">
        Nessuna azienda presente
        <NotFoundIcon className="stroke-cyan-600 w-8 h-8"/>
      </p>
      <button
        onClick={onClickHandler}
        className="bg-cyan-500 w-40 py-4 text-md mt-3 rounded-2xl font-jp hover:text-white hover:bg-cyan-900 hover:ease-in duration-200"
      >
        ADD COMPANY
      </button>
    </div>
  );
}
