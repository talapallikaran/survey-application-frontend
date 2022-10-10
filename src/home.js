import React, { useState } from 'react';

function Home (){  

const [color, setColor] = useState(true);

const changeColor = () => {
setColor(false);
}

    return (
    <div>
        <div style={{background: color ? 'red' : 'green', height:100, width:100}}></div>
        <br/>
        <button type="button"  onClick = {changeColor} >Change Color</button>
    </div>  
    );

}
export default Home;