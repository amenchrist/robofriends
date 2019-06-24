import React from "react";
import Card from "./Card";


function Cardlist({robots}) {    
    return (
        <div>
            {
            robots.map((robot, i) => {
                return (
                    <Card 
                    key={Math.random() * i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email = {robots[i].email} />
                    );
                })
            }
        </div>
        
    );
}

export default Cardlist;