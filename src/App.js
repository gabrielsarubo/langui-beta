import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import WordBank from "./pages/WordBank";
import PhrasalVerb from "./pages/PhrasalVerb";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/wordbank' component={WordBank} />
        <Route path='/phrasalverb' component={PhrasalVerb} />
        <Route path='/profile' component={Profile} />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
