import { useState } from 'react';
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";

const Portfolio = () => {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ]



    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
