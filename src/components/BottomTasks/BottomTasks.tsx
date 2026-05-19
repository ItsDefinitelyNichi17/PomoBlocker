import Button from '../ui/Button'
import './BottomTask.css'
function BottomTasks(){

    return(
        <div className = "bottom-tasks">

            <div className = "task-header">
                <p className='text-[20px]'>Task</p>
            </div>

            <hr />

            <div className ="tasks-list">

                <div className ="task">
                    <div className = "button-container">
                        <Button></Button>
                    </div>
                    <div className = "text-container">
                        hi ki
                    </div>
                </div>


                <div className ="task">
                    <div className = "button-container">
                        <Button></Button>
                    </div>
                    <div className = "text-container">
                        hi ki
                    </div>
                </div>

            </div>
                
            <div className = "add-task-btn" onClick={()=>{}}>
                Add Task
            </div>
        </div>
      
    )
}

export default BottomTasks