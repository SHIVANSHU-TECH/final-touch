import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import "@/app/globals.css";
import css from "@/styles/spritual.module.css";
import Card from "@/components/Card/CardEvent";
// import css from "styled-jsx/css";

const page = () => {
  return (
    <main>
      <div className={css.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default page;
