import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export function GetStartButton({onClick}) {

    return(
       /* <Button id="btnGetStart" variant="outlined" color="#000000" onClick={onClick}>
            Lets do it
        </Button>*/
        <button id="btnGetStart" onClick={onClick} style={{backgroundColor:'transparent',borderColor:'green',color:'green',fontSize:'20px',fontWeight:'bold',borderRadius:'15px',padding:'10px'}}>
            Click
        </button>
    )
}