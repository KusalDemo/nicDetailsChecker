import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {TextField} from "@mui/material";
import {SubmitButton} from "../button/SubmitButton/SubmitButton.jsx";
import {useEffect, useState} from "react";
import lankaNIC from "lanka-nic";

/*const CustomCard = styled(CustomCard)(() => ({
    width:{
        xs: 300,
        sm: 400,
        md: 500,
        lg: 500,

    },
    elevation: 100
}));*/

export function NicDetailCheckerCard() {
    let [idNum , setIdNum] = useState('');
    let [birthday,setBirthday] = useState('');
    let [userGender,setUserGender] = useState('');

    useEffect(() => {
        if(birthday && userGender){
            document.getElementById("txtBirthday").innerText = birthday;
            document.getElementById("txtGender").innerText = userGender;
        }
    }, [idNum, birthday, userGender]);
    return (
        <Card sx={{width : {xs: 300, sm: 400, md: 500, lg: 500}}} elevation={10}>
            <CardMedia
                image="https://img.freepik.com/premium-vector/plastic-id-card-personal-identity-card-driver-license-identification-verification_349999-510.jpg"
            />
            <CardContent>
                <TextField id="txtIdNumber" label="NIC number" variant="outlined" value={idNum}
                           onChange={(e) => setIdNum(e.target.value)}/>
                <SubmitButton sx={{marginTop: 2}} idNumber={idNum} onClick={(idNumber) => {
                    try {
                        let {dateOfBirth, gender} = lankaNIC.getInfoFromNIC(idNumber);
                        const formattedDate = dateOfBirth.toISOString().split('T')[0];
                        setBirthday(formattedDate);
                        console.log(formattedDate);
                        setUserGender(gender);
                        console.log(gender);
                    } catch (err) {
                        console.log(err)
                    }
                }
                }/>
                <p>Birthday : </p>
                <h4 id="txtBirthday">{birthday}</h4>
                <p>Gender : </p>
                <h4 id="txtGender">{userGender}</h4>
            </CardContent>
        </Card>
    );
}
