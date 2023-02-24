import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
