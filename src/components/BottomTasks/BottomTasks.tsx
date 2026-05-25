import Button from '../ui/Button'
import { Check, CirclePlus } from 'lucide-react'
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
                        <Button color='bg-[#cf7a7a] hover:bg-[#b86a6a]'>
                            <div className = "flex justify-center">
                                <Check color = "white"></Check>
                            </div>
                        </Button>
                    </div>
                    <div className = "text-container">
                        hi ki
                    </div>
                </div>


                <div className ="task">
                    <div className = "button-container">
                        <Button color='bg-[#cf7a7a] hover:bg-[#b86a6a]'>
                            <div className = "flex justify-center">
                                <Check color = "white"></Check>
                            </div>
                        </Button>
                    </div>
                    <div className = "text-container">
                        hi ki
                    </div>
                </div>

            </div>
                
            <div className = "add-task-btn" onClick={()=>{}}>
                <CirclePlus color = "black" strokeWidth={1}></CirclePlus>
                Add Task
            </div>
        </div>
      
    )
}

export default BottomTasks