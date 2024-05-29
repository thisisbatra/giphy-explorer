import React, { createContext, useState } from 'react';

const cusContext=createContext();

const StateContext = (props) => {
    const [searchVal,setSearchVal]=useState("");
    return (
        <cusContext.Provider value={{searchVal,setSearchVal}}>
            {props.children}
        </cusContext.Provider>
    );
}

export {StateContext,cusContext};

