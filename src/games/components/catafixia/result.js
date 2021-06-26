import React from 'react';
import premio from '../../img/premio.jpg';
import Suerte from '../../img/suerte.jpg';

export const Win=()=>(
    <div className="modal__result__cat">
        <h1>FELICIDADES</h1>
        <img src={premio} alt="premio"/>
        <button onClick={()=>{window.location.reload()}}>Volver A Jugar</button>
    </div>
)


export const Looser=()=>(
    <div className="modal__result__cat">
        <img src={Suerte} alt="sigue intentando"/>
        <button onClick={()=>{window.location.reload()}}>Volver A Jugar</button>
    </div>
)
    