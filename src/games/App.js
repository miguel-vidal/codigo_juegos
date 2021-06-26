import React from 'react';
import {Paint} from './components/paint/paint.js';
import Vegas from './components/vegas/vegas.js';
import Memorize from './components/memorize/memorize.js';
import Cat from './components/catafixia/catafixia.js';
import Facts from './components/facts/facts.js';
import './App.css';
import vegasimg from "./img/vegas.png";
import paintimg from "./img/paint.png";
import factsimg from "./img/facts.png";
import catimg from "./img/cat.png";
import MemorizeG from './img/memogame.png';

function App(){
    const [game,setGame]=React.useState(0);
    const handleClick=idGame=>{
        setGame(idGame);
    }

    return(
        <div className="main_app_js">
            <div className={`games ${(game<1) && "games-height"}`}>
                <div className="card-game" onClick={()=>handleClick(1)}>
                <img src={vegasimg} alt="vegas"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(2)}>
                    <img src={paintimg} alt="paint"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(3)}>
                <img src={factsimg} alt="facts"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(4)}>
                <img src={catimg} alt="catafixia"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(5)}>
                <img src={MemorizeG} alt="catafixia"/>
                </div>
            </div>
            {(game ===1) && <Vegas />}
            {(game===2) && <Paint />}
            {(game===3) && <Facts />}
            {(game===4) && <Cat />}
            {(game===5) && <Memorize />}
        </div>
    );
}

export default App;

/*
<div className="main_app_js">
            <div className={`games ${(game<1) && "games-height"}`}>
                <div className="card-game" onClick={()=>handleClick(1)}>
                <img src={vegasimg} alt="vegas"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(2)}>
                    <img src={paintimg} alt="paint"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(3)}>
                <img src={factsimg} alt="facts"/>
                </div>
                <div className="card-game" onClick={()=>handleClick(4)}>
                <img src={catimg} alt="catafixia"/>
                </div>
            </div>
            {(game ===1) && <Vegas />}
            {(game===2) && <Paint />}
            {(game===3) && <Facts />}
            {(game===4) && <Cat />}
        </div>
 */