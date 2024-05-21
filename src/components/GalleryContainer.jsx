import Card from "./Card";
import heros from "../heros";

export default function GalleryContainer() {
  const renderCards = () => {
    return heros.map((hero) => (
      <Card
        className="item"
        key={hero.id}
        id={hero.id}
        name={hero.name}
        universe={hero.universe}
        alterego={hero.alterego}
        occupation={hero.occupation}
        friends={hero.friends}
        superpowers={hero.superpowers}
        url={hero.url}
        info={hero.info}
      />
    ));
  };
  return <div className="galleryContainer">{renderCards()}</div>;
}
