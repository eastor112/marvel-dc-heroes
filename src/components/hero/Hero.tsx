import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const Hero = () => {
  const { id: idHero } = useParams()
  const navigate = useNavigate();

  // const hero = getHeroById(idHero)
  const hero = useMemo(() => getHeroById(idHero), [idHero]);

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero

  const imagePath = `/assets/heroes/${idHero}.jpg`;

  const handleReturn = () => {
    return navigate(-1);
  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Alter ego:</strong>{alter_ego}</li>
          <li className="list-group-item"><strong>Publisher:</strong>{publisher}</li>
          <li className="list-group-item"><strong>First appearance:</strong>{first_appearance}</li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-info" onClick={handleReturn}>
          back
        </button>
      </div>
    </div>
  )
}

export default Hero;
