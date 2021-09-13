import "./Portfolio.scss";

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Desing</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" style={{ height: "200px", width: "300px" }} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" style={{ height: "450px", width: "300px" }} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" style={{ height: "200px", width: "300px" }} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/d1/30/f9/d130f959-6b4d-5607-891b-bfd038fd0238/2026ab5e-5175-4706-9cd3-8d1a8a88301e_03_ENG_-_mobile_-_1242x2208_-_iOS.png/750x750bb.jpeg" alt="" style={{ height: "200px", width: "300px" }} />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
