import React, { use, useEffect, useRef, useState } from "react";
import Button from "../ui/Button"
import "./PomodoroTimer.css"

const timeCateg = {
        pomodoro : (1000 * 60) * 25,
        shortBreak :  (1000 * 60) * 5,
        longBreak :  (1000 * 60) * 15
}

const Buttons :Array< Array<string | number >>= [["Pomodoro", timeCateg.pomodoro], ["Short-Break", timeCateg.shortBreak], ["Long-Break", timeCateg.longBreak]]

function PomodoroTimer(){
    const [status, setStatus] = useState(false); //if false = pause
    const [watch ,  setWatch] = useState(timeCateg.shortBreak)

    if (status){
       
    }
    return(
        <div className = "pomodoro-timer">
            <div className = "stage-bg">
                {
                    Buttons.map((val, index)=>{
                    return( 
                        <Button index = {index} width="w-full" height="h-full" roundness="rounded-[2px]" 
                            color= {watch === val[1] ? "bg-(--color-dark-red)" : ""} 
                            onClick={()=>{ setWatch(val[1] as number)}}>
                                <div>
                                    {val[0]}
                                </div>
                        </Button> )}
                    )
                }
            </div>

            <div className = "play-button">
                <Button width="w-full" height="h-full" color="bg-(--color-green-light)" hoverC="hover:bg-(--color-green)" onClick={()=> status ? setStatus(false) : setStatus(true)}>
                    <div>{
                        status ? "Pause" : "Start"}
                    </div>
                </Button>
            </div>

            <div className = "pomodoro-stopwatch">
                <p className = "text-[70px] box-border text-white">00:00</p>
            </div>
        </div>
    )    
}


export default PomodoroTimer