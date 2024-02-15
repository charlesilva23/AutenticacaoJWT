import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Home from "./pages/home/home";


const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Signin />;
}


function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route exact path="/home" element={ <Private Item={Home} />} />
            <Route path="/" element={ <Signin />} />
        </Routes>
    </BrowserRouter> 
}

export default Rotas;