import React, { useState } from "react";

interface Context  {
    authorized:boolean;
   setAuthorized:()=>void;
};

interface Children {
    children: React.ReactNode;
};

export const UserContext = React.createContext<Context>({authorized:false,setAuthorized:()=>{}});

function UserContextProvider(props:Children){

    const [logged,setLogged]=useState(false);

    function setAllowed(){
        setLogged(!logged);
    }

    const contextValue: Context = {
        authorized: logged,
        setAuthorized: setAllowed
    };

    return(
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;