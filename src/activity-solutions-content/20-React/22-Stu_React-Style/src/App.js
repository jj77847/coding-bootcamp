import React from "react";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
};
