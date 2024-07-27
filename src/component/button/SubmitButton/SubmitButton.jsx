import Button from "@mui/material/Button";

export function SubmitButton({idNumber,onClick}) {
    /*let idNumber = props;

    function fetchDetails() {
        console.log(idNumber)
    }*/

    return (
        <Button color="success" variant="contained" onClick={()=>onClick(idNumber)}>Submit</Button>
    );
}
