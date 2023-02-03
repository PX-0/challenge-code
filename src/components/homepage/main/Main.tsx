import { CompaniesContext } from "../../../store/companies-context";
import { useContext } from "react";
import CompanyList from "../../company/CompanyList";
import MyButton from "../../ui/MyButton";

interface props {onClick:()=>void};

export default function Main(props:props) {
  const ccx = useContext(CompaniesContext);

  function onClickHandler() {
    props.onClick();
  }

  return (
    <>
      <div className="bg-line bg-no-repeat bg-cover bg-center h-[calc(100vh-74px)] w-full text-center p-10 md:p-20 md:flex md:flex-col md:items-center">
        <CompanyList items={ccx.companies}/>
        <MyButton
        disabled={false}
          onClick={onClickHandler}
          classname="bg-cyan-500 px-2 py-1 w-28 text-xs font-semibold rounded-lg mt-20 font-jp hover:ease-in duration-300 hover:text-white hover:bg-cyan-900"
        >
          NEW COMPANY
        </MyButton>
      </div>
    </>
  );
}
