import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Fallback from "./pages/Fallback";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />  
                        <Route path="*" element={<Fallback />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
