import Navbar from "@/components/Navbar";
import React from "react";
import "@/app/globals.css";
import Card from "@/components/Card";

const page = () => {
  return (
    <main>
      <Navbar />

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default page;
