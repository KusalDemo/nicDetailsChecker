import Card from "@mui/material/Card";
import {GetStartButton} from "../button/GetStartButton/GetStartButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function GetStartCard(){
    let [isClicked,setIsClicked] = useState(false);
    let navigateToNICCheckerPage = useNavigate();
    useEffect(() => {
        if(isClicked){
            navigateToNICCheckerPage('/nicDetailChecker');
        }
    },[isClicked]);

    return (
        <Link to="/getStartCard">
            <Card id="getStartCard" sx={{
                width: {xs: 300, sm: 400, md: 500, lg: 500},
                ['#btnGetStartDiv']: {visibility: 'hidden'},
                ":hover": {
                    backgroundColor: 'rgba(0, 128, 0, 0.5)',
                    position: 'relative',
                    cursor: 'pointer',
                    padding:'10px',
                    ['#btnGetStartDiv']: {visibility: 'visible'}
                }
            }} elevation={10}>
                <div id="btnGetStartDiv"
                     style={{position: 'absolute', backgroundColor: '#008000B3', borderRadius: '10px'}}/>
                <img src="https://5.imimg.com/data5/SM/RX/XV/SELLER-25277577/kennebec-potato-1000x1000.jpg"
                     alt="nic_template_image" style={{width: '100%', borderRadius: '10px'}}/>
                <div id="btnGetStartDiv"
                     style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <GetStartButton onClick={() => setIsClicked(true)}/>
                </div>
            </Card>
        </Link>
    );
}