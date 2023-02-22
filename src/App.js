import React from "react";
import { BrowserRouter,Routes,  Route} from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" component={<WatchList/>} />
          <Route  path="/watched" component={<Watched/>} />
          <Route  path="/add" component={<Add/>} />
          <Route  path="/signin" component={<Signin/>}/>
          <Route path="/signup" component={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
