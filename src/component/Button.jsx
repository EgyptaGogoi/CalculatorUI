import React from "react";


export default function Button({sx,value, onclick}){
    function f(){
        return onclick(value)
    }
    return(
        <>
        <button className="col-span-1 w-[50px] h-[50px] rounded-full text-xl p-3 cursor-pointer shadow-lg text-slate-600 text-center font-bold" style={sx}
         onClick = {f}>{value}</button>
        </>
    )
}