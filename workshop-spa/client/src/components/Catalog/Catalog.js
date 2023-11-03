import { useContext } from "react";
import CatalogItem from "./CatalogItem/CatalogItem";
import GameContext from "../../contexts/GameContext";

const Catalog = () => {
    const { games } = useContext(GameContext);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(g => <CatalogItem key={g._id} game={g} />)
                : <h3 className="no-articles">No articles yet</h3>
            }

        </section>
    )
}

export default Catalog;