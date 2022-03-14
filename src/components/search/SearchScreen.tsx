import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import useForm from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCardProps } from '../../interfaces/hero';
import HeroCard from "../hero/HeroCard";
import { useMemo } from 'react';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search) || {};

  const { handleChange, formValues: { searchText } } = useForm({ searchText: q });


  const herosFiltered = useMemo(() => getHeroByName(typeof (q) === 'string' ? q : ''), [q]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <hr />
      <div className="row">
        <div className="col-5">
          <h5>Search</h5>
          <hr />
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleChange}
            />

            <button
              className="btn btn-outline-primary mt-2 btn-block"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
              ?
              <div className="alert alert-info"> Search a hero </div>
              : (herosFiltered.length === 0) && <div className="alert alert-danger"> No results </div>
          }

          {
            herosFiltered.map((hero: HeroCardProps) => (
              <HeroCard key={hero.id.toString()} {...hero} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default SearchScreen;
