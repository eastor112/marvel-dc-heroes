import { heroes } from "../data/heros"

export const getHeroByName = (name = '') => {

  if (name === '') return [];

  return heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
}
