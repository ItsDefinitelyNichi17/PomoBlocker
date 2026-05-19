import Button from "../ui/Button"
import "./PomodoroTimer.css"

function PomodoroTimer(){
    return(
        <div className = "pomodoro-timer">
            <div className = "stage-bg">
                <Button width="w-full" height="h-full">Pomodoro</Button>
                <Button width="w-full" height="h-full">Short-Break</Button>
                <Button width="w-full" height="h-full">Long-Break</Button>
            </div>
            <div className = "play-button">
                <Button width="w-full" height="h-full">Start</Button>
            </div>
            <div className = "pomodoro-stopwatch">
                 
                <p className = "text-[70px] box-border">00:00</p>
            </div>
        </div>
    )    
}

export default PomodoroTimer