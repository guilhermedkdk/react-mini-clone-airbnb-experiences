import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import data from "./data";

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      item={item}
    />
  );
});

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
