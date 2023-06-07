import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {SubmitBid} from "./pages/SubmitBid";
import {Home} from "./pages/Home";

export const App = () => (
    <Router>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/home" element={<Home/> } />
                <Route path="/submitBid" element={<SubmitBid/> } />
            </Routes>
    </Router>
);
export default App;
