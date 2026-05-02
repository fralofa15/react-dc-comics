import "./featuresBar.css";
function FeaturesBar() {
    const featuredItems = [
        {
            name: "DIGITAL COMICS",
            img: "/img/buy-comics-digital-comics.png",
        },
        {
            name: "DC MERCHANDISE",
            img: "/img/buy-comics-merchandise.png",
        },
        {
            name: "SUBSRIPTION",
            img: "/img/buy-comics-subscriptions.png",
        },
        {
            name: "COMIC SHOP LOCATOR",
            img: "/img/buy-comics-shop-locator.png",
        },
        {
            name: "DC POWER VISA",
            img: "/img/buy-dc-power-visa.svg",
        },
    ];
    return (
        <div className="bg">
            <ul className="item-display">
                {featuredItems.map((item) => (
                    <li className="item-li" key={item.name}>
                        <img className="img-size" src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeaturesBar