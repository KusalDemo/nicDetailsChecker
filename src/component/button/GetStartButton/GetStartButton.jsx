import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export function GetStartButton({onClick}) {

    return(
       /* <Button id="btnGetStart" variant="outlined" color="error" sx={{margin: "20px"}} onClick={() => navigateToNICCheckerPage('/nicDetailChecker')}>
            Lets do it
        </Button>*/
        <button id="btnGetStart" onClick={onClick}>
            Lrts GO
        </button>
    )
}