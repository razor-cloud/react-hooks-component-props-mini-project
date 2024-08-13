import React from "react";
import blogData from "../data/blog";

const name = blogData.name
const Header = ({ name }) => {
    return (
        <div>
            <header>
            <h1>{ name }</h1>
            </header>
           
        </div>
    )
}

export default Header;