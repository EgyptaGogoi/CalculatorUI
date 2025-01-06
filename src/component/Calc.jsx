import React, { useState } from "react";
import Disp from "./Disp";
import Button from "./Button";
import { evaluate } from "mathjs";

export default function Calc(){
    const but=[
        {
            value:'%',
            sx: {backgroundColor: '#f5f7ff'}
        },
        {
            value:'^',
            sx: {backgroundColor: '#f5f7ff'}
        },
        {
            value:'CE',
            sx: {backgroundColor: '#f5f7ff'}
        },
        {
            value:'C',
            sx: {backgroundColor: '#1f2b54', color: '#ffffff'}
        },
        {
            value:'7',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'8',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'9',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'-',
            sx: {backgroundColor: '#ff445a', color: '#ffffff'}
        },
        {
            value:'4',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'5',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'6',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'/',
            sx: {backgroundColor: '#2388ff', color: '#ffffff'}
        },
        {
            value:'1',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'2',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'3',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'*',
            sx: {backgroundColor: '#ffc804', color: '#ffffff'}
        },
        {
            value:'.',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'0',
            sx: {backgroundColor: '#d8ddf0'}
        },
        {
            value:'=',
            sx: {backgroundColor: '#f5f7ff'}
        },
        {
            value:'+',
            sx: {backgroundColor: '#63de77', color: '#ffffff'}
        }
    ]
    
    const [v,setv] = useState('')
    

    const displayUpdate=(value)=>{
        if (value == "CE") 
            setv(v.slice(0, -1));
            // console.log(typeof(v));
        else if(value=='='){
            setv(toString(evaluate(v)))
        }
        else if(value=='C')
            setv('')
        else{
            setv(v + value)      
        }   
    }
    return(
        <>
            <div className="grid grid-col-4 gap-2 place-self-center bg-deepWhite w-[25%] h-[70%] rounded-[25px] px-7 py-8 shadow-lg">
                <Disp value = {v} />
                {
                    but.map((item)=>{
                        return (
                            <>
                            <Button value={item.value} sx={item.sx} onclick={displayUpdate}/>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}