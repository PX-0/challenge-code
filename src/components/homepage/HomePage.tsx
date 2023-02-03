
import { useState,useContext } from "react";
import { CompaniesContext } from "../../store/companies-context";
import WrapperVh from "../ui/WrapperVh";
import Header from "./header/Header";
import Main from "./main/Main";
import Offcanvas from "../ui/Offcanvas";
import MessageNotFound from "./notfound/MessageNotFound";

export default function HomePage(){

  const ccx = useContext(CompaniesContext);
  const [showOffCanvas, setShowOffCanvas] = useState<boolean>(false);

  function changeShowOffCanvas() {
    setShowOffCanvas(!showOffCanvas);
  }
    return(
        <WrapperVh className=''>
           <Header/>
           {ccx.companies.length===0&&<MessageNotFound onClick={changeShowOffCanvas}/>}
          {ccx.companies.length>0&&<Main onClick={changeShowOffCanvas}/>}
          {showOffCanvas && <Offcanvas onClick={changeShowOffCanvas} />}
        </WrapperVh>)
}
