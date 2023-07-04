import { Link } from "react-router-dom";
import style from "./Header.module.scss"

function Header() {
    return ( 
        <header className={style.header}>
            <h1>Somehow <br></br>i manage</h1>
        </header>
     );
}

export default Header;