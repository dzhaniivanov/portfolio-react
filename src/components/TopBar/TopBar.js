import "./TopBar.scss"
import { Person, Mail } from "@material-ui/icons";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person  className="icon"/>
                        <span>+359 895 62 72 47</span>
                    </div>
                    <div className="itemContainer">
                        <Mail  className="icon" />
                        <span>djani.ivanov94@gmail.com</span>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>

        </div>
    )
}

export default TopBar
