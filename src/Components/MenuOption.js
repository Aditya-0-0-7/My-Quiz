import React from "react";
import './MenuOption.css';
function MenuOption(prop)
{
    return(
    <div className="menuOption" style={{backgroundColor:prop.colors}}>
        {prop.data}
    </div>);
}
export default MenuOption;