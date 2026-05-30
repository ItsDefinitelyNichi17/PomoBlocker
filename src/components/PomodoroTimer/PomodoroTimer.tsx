import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button"
import "./PomodoroTimer.css"

import { getBrowserAPI } from "../../utils/extension-api";


const timeCateg = {
        pomodoro : (1000 * 60) * 25,
        shortBreak :  (1000 * 60) * 5,
        longBreak :  (1000 * 60) * 15
}

const Buttons :Array< Array<string | number >>= [
    ["Pomodoro", timeCateg.pomodoro], 
    ["Short-Break", timeCateg.shortBreak], 
    ["Long-Break", timeCateg.longBreak]]

function PomodoroTimer(){
    const [status, setStatus] = useState(false); //if false = pause
    const [watch ,  setWatch] = useState(timeCateg.pomodoro)
    const milisec = useRef((new Date().getTime() +  watch) - (new Date().getTime()));


    const tsec = milisec.current/1000

    const [seconds, setSeconds] = useState (tsec%60);
    const [minutes, setMinutes] = useState(Math.floor(tsec / 60));

    useEffect(() => {
    
        (async()=> {
            const data = await getBrowserAPI()
            if(data) console.log(data.storage, "hjad")
            console.log(setMinutes)})()

    }, []);

    useEffect(()=>{
   
        if(status){
            const id = setTimeout(()=>{ 
                setSeconds((prev) => prev - 1)
            }, 1000)

            
            return () => clearTimeout(id)
        }
    }, [seconds, status])
    

    return(
        <div className = "pomodoro-timer">
            <div className = "stage-bg">
                {
                    Buttons.map((val, index)=>{
                    return( 
                        <Button key={index} width="w-full" height="h-full" roundness="rounded-[2px]" 
                            color= {watch === val[1] ? "bg-(--color-dark-red)" : ""} 
                            onClick={()=>{ setWatch(val[1] as number)}}>
                                <div key={index}>
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
                <p className = "text-[70px] box-border text-white">{minutes < 10 ? "0" + minutes : minutes } : {seconds < 10 ? "0" + seconds : seconds}</p>
            </div>
        </div>
    )    
}


export default PomodoroTimer