// Init
import React from "react";

// Importing Components
import Header from "../components/Header";
import Body from "../components/Body";

import ScrollTopButton from "../utils/ScrollTopButton";

// Home Component
export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Body />
      <ScrollTopButton />
    </div>
  );
}
