import "./content.css";
import comics from "./array/comics";
import Card from "./card.jsx";

function Content() {
    return (
        <main>
            <div className="main-img"></div>

            <section>
                <h2 className="series-title">CURRENT SERIES</h2>
                <div className="comics-grid">
                    {comics.map((comic) => (
                        <Card
                            key={comic.id}
                            img={comic.thumb}
                            title={comic.series}
                        />
                    ))}
                </div>

                <button className="btn-style">LOAD MORE</button>
            </section>
        </main>
    );
}

export default Content;