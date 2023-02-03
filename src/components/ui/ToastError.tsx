import Xmark from "./icons/Xmark";

interface props {onClick:()=>void,textError:string}

export default function ToastError(props:props){
   
    const onClickHandler = () =>{
        props.onClick();
    }
    return ( 
    <div className="flex space-x-2 justify-center fixed z-10 top-[5%] left-[38%] shadow-sm shadow-cyan-600 border-transparent rounded-lg">
      <div className="bg-dark  mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block">
        <div className=" bg-dark p-2 bg-clip-padding flex justify-between items-center rounded-t-lg border-b border-cyan-700">
          <p className=" text-red-700 font-semibold font-jp text-lg">Error</p>
          <button onClick={onClickHandler}><Xmark className="w-5 h-5 stroke-slate-500 hover:stroke-white"/></button>
        </div>
        <p className="text-slate-400 font-semibold text-md font-jp text-center py-2">{props.textError}</p>
      </div>
    </div>
    );
}