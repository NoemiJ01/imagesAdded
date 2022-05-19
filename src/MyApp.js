import React from "react";

import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import Bronx from "./components/Bronx";
import Manhattan from "./components/Manhattan";
import Queens from "./components/Queens";
import Brooklyn from "./components/Brooklyn";
import StatenIsland from "./components/StatenIsland";

const MyApp = () => {
  return (
    <>
      <Nav />
      <FoodViolations />
      <Bronx />
      <Manhattan />
      <Queens />
      <Brooklyn />
      <StatenIsland />
    </>
  );
};

export default MyApp;
