import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import './style.css';
import {CardActionArea, Typography} from "@mui/material";
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
            <Card id="getStartCard" sx={{width : {xs: 300, sm: 400, md: 500, lg: 500},['#btnGetStartDiv']:{visibility:'hidden'},":hover":{backgroundColor:'rgba(0, 128, 0, 0.5)',position:'relative',zIndex:'2',cursor:'pointer',['#btnGetStartDiv']:{visibility:'visible'}}}} elevation={10} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.examples.com/wp-content/uploads/2019/08/association-id-card-feature.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div id="btnGetStartDiv" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <GetStartButton onClick={() => setIsClicked(true)}/>
                </div>
            </Card>
        </Link>
    );
}