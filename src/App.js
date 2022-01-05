import { BrowserRouter } from "react-router-dom";
import './assets/css/theme.css'
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
