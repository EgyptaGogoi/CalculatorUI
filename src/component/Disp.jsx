import React from "react";

export default function Disp({value}){
    return(
        <>
        <div className="col-span-4 p-4 grid grid-col-1 bg-blue-light w-[100%] h-[60px] rounded-full text-right">
            <p className="text-slate-200 text-lg font-bold">{value}</p>
        </div>
        </>
    )
}