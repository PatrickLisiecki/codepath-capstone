import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Fallback from "./pages/Fallback";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";  

function App() {
    return (
        <>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <NavBar />
                    <div className="App flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />  
                            <Route path="*" element={<Fallback />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
