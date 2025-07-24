import Body from "./Body";
import Menu from "./Menu";
import SignUp from "./Signup";
import Layout from "./Layout";
import {  BrowserRouter , Route , Routes} from "react-router-dom";


    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="/login" element={<SignUp />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      );
    }


export default App;
