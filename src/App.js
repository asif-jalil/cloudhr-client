import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import axios from "axios";

axios.defaults.validateStatus = () => {
  return true;
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
