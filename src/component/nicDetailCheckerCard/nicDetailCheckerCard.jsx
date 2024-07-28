import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {TextField} from "@mui/material";
import {SubmitButton} from "../button/SubmitButton/SubmitButton.jsx";
import {useEffect, useState} from "react";
import lankaNIC from "lanka-nic";
import {Link} from "react-router-dom";

export function NicDetailCheckerCard() {
    let [idNum, setIdNum] = useState('');
    let [birthday, setBirthday] = useState('');
    let [userGender, setUserGender] = useState('');

    useEffect(() => {
        if (birthday && userGender) {
            document.getElementById("txtBirthday").innerText = birthday;
            document.getElementById("txtGender").innerText = userGender;
        }
    }, [idNum, birthday, userGender]);
    return (
        <Link to="/nicDetailChecker">
            <Card sx={{width: {xs: 300, sm: 400, md: 500, lg: 500}}} elevation={10}>
                <CardMedia sx={{height: 210}}
                           image="https://images.examples.com/wp-content/uploads/2019/08/association-id-card-feature.jpg"/>
                <CardContent>
                    <div id="inputDiv"
                         style={{display: "flex", flexDirection: "column", gap: "20px", margin: "20px 10px"}}>
                        <TextField id="txtIdNumber" label="NIC number" variant="outlined" value={idNum}
                                   onChange={(e) => setIdNum(e.target.value)}/>
                        <SubmitButton idNumber={idNum} onClick={(idNumber) => {
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
                        <div>
                            <p style={{color: "green", fontWeight: "bold", fontSize: "20px"}}>Birthday : </p>
                            <h4 id="txtBirthday">{birthday}</h4>
                        </div>
                        <div>
                            <p style={{color: "green", fontWeight: "bold", fontSize: "20px"}}>Gender : </p>
                            <h4 id="txtGender">{userGender}</h4>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
