import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// Pages
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import WordBank from "./pages/WordBank";
import PhrasalVerb from "./pages/PhrasalVerb";
import ViewPost from "./pages/ViewPost";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/addpost' component={AddPost} />
          <Route path='/viewpost' component={ViewPost} />
          <Route path='/wordbank' component={WordBank} />
          <Route path='/phrasalverb' component={PhrasalVerb} />
          <Route path='/profile' component={Profile} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
