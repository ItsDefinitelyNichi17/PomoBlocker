import { type ButtonType } from "../../types";

function Button(props : ButtonType ){
    
    const {children, type = 'button',  onClick, width = "w-7", height = "h-7"} = props;
    return(
        <button type = {type} onClick = {onClick} className = {`${width} ${height} rounded-full bg-blue-500 hover:bg-blue-700`}>
            {children}
        </button>
    )
}

export default Button