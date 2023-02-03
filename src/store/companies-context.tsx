import Company from "../model/Company";
import React, { useState } from "react";

interface context {
  companies: Company[];
  addComp: (company: Company) => void;
};

interface children {
  children: React.ReactNode;
}


export const CompaniesContext = React.createContext<context>({
  companies: [],
  addComp: (company: Company) => {},
});


function CompaniesContextProvider(props:children){
  const [companies, setCompanies] = useState<Company[]>([]);

  function onAddHandler(company: Company) {
    setCompanies((prevState) => {
      return prevState.concat(company);
    });
  }
  const contextValue: context = {
    companies: companies,
    addComp: onAddHandler,
  };

  return (
    <CompaniesContext.Provider value={contextValue}>
      {props.children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContextProvider;