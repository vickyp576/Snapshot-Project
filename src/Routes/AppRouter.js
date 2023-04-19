import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchImage from "../components/SearchImage";
import Mountain from "../components/Mountain";
import Beach from "../components/Beach";
import Food from "../components/Food";
import Birds from "../components/Birds";
import OutletComponent from "../components/OutletComponent";


export default function AppRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element = {<SearchImage/>}>
                <Route path="/mountain" element = {<Mountain/>}/>
                <Route path="/beach" element = {<Beach/>}/>
                <Route path="/food" element = {<Food/>}/>
                <Route path="/birds" element = {<Birds/>}/>
                <Route path="/search" element = {<OutletComponent />} />
            </Route>
        </Routes>
    </BrowserRouter>
}