import './App.css'
import {NicDetailCheckerCard} from "./component/nicDetailCheckerCard/nicDetailCheckerCard.jsx";
import {GetStartCard} from "./component/getStartCard/GetStartCard.jsx";
import {Navigate, Route, Router, Routes} from "react-router-dom";


function App() {
    // const [count, setCount] = useState(0)

    return (

        /*<Routes>
            <Route path={"/nicDetailChecker"} element={<NicDetailCheckerCard/>}/>
            <Route path={"*"} element={<Navigate to={"/GetStartCard"}/>}></Route>
        </Routes>*/

        <section id="mainSection">
            <div id="mainDiv">
                <h1 id="title">NIC Detail Checker</h1>
                <Routes>
                    <Route path={"*"} element={<Navigate to={"/getStartCard"}/>}></Route>
                    <Route path={"/getStartCard"} element={<GetStartCard/>}/>
                    <Route path={"/nicDetailChecker"} element={<NicDetailCheckerCard/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default App
