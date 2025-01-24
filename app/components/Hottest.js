import React from 'react'
import ClientOwlCarousel from './ClientOwlCarousel';

const Hottest = () => {

    const carouselData = [
        {
            imgSrc: "images/img2.png",
            title: "VIRTUAL",
            change: "▲ 0.59%",
            price: "$2.74",
            marketCap: "$1.7B",
            changeClass: "text-green" // Use CSS class for color
        },
        {
            imgSrc: "images/img3.png",
            title: "AI16Z",
            iconSrc: "images/check.png",
            change: "▼ 11.59%",
            price: "$0.0873",
            marketCap: "$962K",
            changeClass: "text-red"
        },
        {
            imgSrc: "images/img4.png",
            title: "TICKER3",
            iconSrc: "images/check.png",
            price: "$0.1232",
            marketCap: "$701M",
        },
        {
            imgSrc: "images/img5.png",
            title: "TICKER4",
            // iconSrc: "images/check.png",
            price: "$25.51",
            marketCap: "$988",
        }
    ];
    return (
        <>
            <h2>Hottest</h2>
            <ClientOwlCarousel>
                {carouselData.map((item, index) => (
                    <div className="items" key={index}>
                        <div className="virtual-card">
                            <img src={item.imgSrc} alt="VIRTUAL" />
                            <div>
                                <h4 className="d-flex justify-content-between">
                                    <em>
                                        {item.title} {item.iconSrc && <img src={item.iconSrc} alt="icon" />}
                                    </em>
                                    {item.change && <span className={item.changeClass}>{item.change}</span>}
                                </h4>
                                <div className="d-flex justify-content-between mt-3">
                                    <span className="p-text">Price <b>{item.price}</b></span>
                                    <span className="p-text">Market Cap <b>{item.marketCap}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </ClientOwlCarousel>
        </>
    )
}

export default Hottest