import BottomTasks from "./components/BottomTasks/BottomTasks";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import UpperButtons from "./components/UpperButtons/UpperButtons";


function App(){
    return(
        <div className = "main">
            <UpperButtons></UpperButtons>
            <PomodoroTimer></PomodoroTimer>
            <BottomTasks></BottomTasks>
        </div>
    );
}

export default App