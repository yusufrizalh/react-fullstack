import React from "react";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container block">
        <section class="hero is-primary mt-4">
          <div class="hero-body">
            <p class="title">React Inixindo</p>
            <p class="subtitle">Subtitle</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
