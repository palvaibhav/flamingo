import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
  </BrowserRouter>
);

export default App;