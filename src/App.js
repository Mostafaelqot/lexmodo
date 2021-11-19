import './App.css';
import Routes from "./routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
  
      <Router>{Routes}</Router>
    </>
  );
}

export default App;
