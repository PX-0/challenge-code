import { useContext } from "react";
import { UserContext } from "./store/user-context";
import FormLogin from "./components/login/FormLogin";
import HomePage from "./components/homepage/HomePage";
import CompaniesContextProvider from "./store/companies-context";

function App() {
  const ucx = useContext(UserContext);
  return (
    <> 
      {!ucx.authorized&&<FormLogin/>}
      {ucx.authorized&& <CompaniesContextProvider><HomePage/></CompaniesContextProvider>}
    </>
    
 
  );
}

export default App;
