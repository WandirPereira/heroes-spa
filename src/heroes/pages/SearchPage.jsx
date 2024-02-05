import React from "react";
import { HeroCard } from "../componentes";
import { useForm } from "../../hooks/useForm";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const query = queryString.parse(location.search);
  const { q = "" } = queryString.parse(location.search);

  // console.log("q1 = ", q1);

  const heroes = getHeroByName(q);

  // console.log("heroes: ", heroes);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  // console.log("location: ", location);
  // console.log("query: ", query);

  const { searchText, onInputChange } = useForm({
    // searchText: "",
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.trim().length <= 1) return;
    // console.log({ searchText });
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
              value={searchText}
            ></input>
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}

          {/* <div
            className="alert alert-primary"
            style={{ display: q !== "" ? "none" : "" }}
          >
            Search a hero
          </div> */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
