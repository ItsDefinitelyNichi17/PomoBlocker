import Button from '../ui/Button';
import { Settings, Ban} from 'lucide-react';
import './UpperButtons.css'

function UpperButtons(){
    return(
        <div className = "upper-buttons">
            <Button>
                <div className = "flex justify-center">
                    <Settings color = "white" strokeWidth = {1.5}></Settings>
                </div>
               
            </Button>
            <Button>
                 <div className = "flex justify-center">
                    <Ban color = "white" strokeWidth={1.5}> </Ban>
                 </div>
            </Button>
        </div>
    )
}

export default UpperButtons;