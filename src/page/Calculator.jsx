import React from "react";
import Calc from "../component/Calc";
import Nav from "../component/Nav";

export default function Calculator(){
    return(
        <>
        <Nav/>
        <div className="grid grid-col-1 bg-slate-200  w-screen h-screen">
            <Calc/>
        </div>
        </>
    )
}