import { Link } from "react-router-dom";
import { HeroCardProps } from "../../interfaces/hero";


const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters }: HeroCardProps) => {

  const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="card mb-3 animate__animated animate__fadeIn" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagePath} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters) &&
              <p className="text-muted">{characters}</p>
            }
            <p>
              <small className="text-muted">
                {first_appearance}
              </small>
            </p>

            <Link to={`/hero/${id}`} className="">
              See more...
            </Link>

          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroCard;
