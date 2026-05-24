import Button from "../ui/Button"
import "./PomodoroTimer.css"

function PomodoroTimer(){
    return(
        <div className = "pomodoro-timer">
            <div className = "stage-bg">
                <Button width="w-full" height="h-full" roundness="rounded-[2px]" color="bg-(--color-dark-red)">
                    <div>
                        Pomodoro
                    </div>
                </Button>
                <Button width="w-full" height="h-full" roundness="rounded-[10px]" >
                    <div>
                        Short-Break
                    </div>
                </Button>
                <Button width="w-full" height="h-full" roundness="rounded-[10px]">
                    <div>
                        Long-Break
                    </div>
                </Button>
            </div>
            <div className = "play-button">
                <Button width="w-full" height="h-full" color="bg-(--color-green-light)" hoverC="hover:bg-(--color-green)">
                    <div>Start</div>
                </Button>
            </div>
            <div className = "pomodoro-stopwatch">
                <p className = "text-[70px] box-border text-white">00:00</p>
            </div>
        </div>
    )    
}

export default PomodoroTimer