import React from "react"
import smallLeft from "../assets/icons/small-left.png"
import smallRight from "../assets/icons/small-right.png"
import search from "../assets/icons/search.png"
import "./header.css"

const ModuleHeader = () => {
    return (
        <nav className="header-navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda"/>
                </button>

                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita"/>
                </button>
            </div>
            <div className="header-search">
                <img src={search} alt=""/>
                    <input id="searchInput" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header-login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default ModuleHeader