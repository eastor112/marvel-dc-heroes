import { heroes } from "../data/heros"

export const getHeroByPublisher = (publisher) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Invalid publisher: ${publisher}`);
  }

  return heroes.filter(hero => hero.publisher === publisher)
}
