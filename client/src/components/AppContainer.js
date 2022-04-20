import React, { useState } from "react";
// import NavTabs from "./NavTabs"; - create this still

import Home from "./pages/Home/Home";
import MngSub from "./pages/MngSub/MngSub";
import NewSub from "./pages/NewSub/NewSub";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SingleSub from "./pages/SingleSub/SingleSub";
import Welcome from "./pages/Welcome/Welcome";
// import Footer from "./Container/pages/Footer";


export default function AppContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Welcome") {
      return <Welcome />;
    }
    if (currentPage === "MngSub") {
      return <MngSub />;
    }
    if (currentPage === "NewSub") {
      return <NewSub />;
    }
    if (currentPage === "Settings") {
      return <Settings />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "SingleSub") {
      return <SingleSub />;
    }
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* {renderPage()} */}
    </div>
  );
}
