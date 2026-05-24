import { type ButtonType } from "../../types";

function Button(props : ButtonType ){
    
    const {children, type = 'button',  onClick, width = "w-7", height = "h-7", color = "", hoverC = "", roundness = "rounded-full"} = props;
    return(
        <button type = {type} onClick = {onClick} className = {`${width} ${height} ${roundness} ${color} ${hoverC}`}>
            {children}
        </button>
    )
}

export default Button