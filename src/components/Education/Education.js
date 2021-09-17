import { useState } from 'react';
import "./Education.scss";

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/shu.jpg",
            title: "Bachelor Degree",
            desc:
                "Computer Science",
            about: "In 2019 i finished my bachelor degree with Computer Science in Shumen University \"Episkop Konstantin Preslavski." 
        },
        {
            id: "2",
            icon: "./assets/shu.jpg",
            title: "Master Degree",
            desc:
                "Software Technologies",
            about: "In 2021 i finished my master degree with Software Technologies in Shumen University \"Episkop Konstantin Preslavski." 

        },
        {
            id: "3",
            icon: "./assets/softuni.png",
            title: "JS Developer path",
            desc:
                "JavaScript curriculum",
                about:"From 2020 to May 2021 i took the  courses at the Software University with JavaScript"
        },
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="education" id="education">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <p>{d.about}</p>
                            </div>
                        </div>
                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    )
}

export default Works
