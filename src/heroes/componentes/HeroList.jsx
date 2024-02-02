import React from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //   console.log("publisher:", publisher);
  //   console.log("heroes: ", heroes);
  return (
    <div className="row rows-cols-1 row-cols-md-3">
      {/* <li>Teste</li> */}
      {heroes.map((heroe) => (
        // <li key={index}>{heroe.superhero}</li>
        <HeroCard key={heroe.id} {...heroe} />
        /**Atenção para a passagem dos parâmetros por desestruturação */
      ))}
    </div>
  );
};
