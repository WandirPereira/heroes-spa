import { heroes } from "../data";

import React from "react";

export const getHeroesByPublisher = (publisher) => {
  const validpublishers = ["DC Comics", "Marvel Comics"];
  //   console.log("validpublishers func:", validpublishers);
  //   console.log("publisher1 func:", publisher);

  if (!validpublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher!`);
  }

  //   console.log("publisher2 func:", publisher);
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
