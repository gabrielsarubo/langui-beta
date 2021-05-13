import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
