import React from "react";
import "./App.css";
import BigBoard from "./components/BigBoard";
import LittleBoards from "./components/LittleBoards";
import Cabecalho from "./components/Cabecalho";

const littleBoardsProps = [
  {
    title: "Declarative",
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
    description: "Build encalpsulated components that manage their state",
  },
  {
    title: "Single-way",
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    description: "A set of immutable values are passed to the components",
  },
  {
    title: "JSX",
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
    description: "Statically typed, designed to run on modern browsers",
  },
];

function App() {
  return (
    <div>
      <div className="fundo">
        <Cabecalho />
        <BigBoard />
      </div>
      <div className="littleBoards">
        {littleBoardsProps.map((littleBoards) => (
          <LittleBoards
            key={littleBoards.title}
            title={littleBoards.title}
            image={littleBoards.image}
            description={littleBoards.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
