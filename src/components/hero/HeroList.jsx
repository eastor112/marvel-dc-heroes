import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {

  const heros = useMemo(() => getHeroByPublisher(publisher), [publisher]);


  return (
    <div className="animate__animated animate__fadeIn" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {
        heros.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}

export default HeroList;
