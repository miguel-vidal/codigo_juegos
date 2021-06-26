import React,{useState} from 'react';
import videl from '../../img/videl.png';
import gohan from '../../img/gohan.jpg';
import goku from '../../img/goku.jpg';
import vegeta from '../../img/vegeta.jpg';
import roshi from '../../img/roshi.jpg';
import piccoro from '../../img/piccoro.jpg';
import freezer from '../../img/freezer.png';
import boo from '../../img/boo.jpg';
import fatboo from '../../img/fatboo.png';

const numbers=[
    {id:1, pair:1 ,value:videl, clicked:false, selected:false},
    {id:2, pair:2,value:gohan, clicked:false, selected:false},
    {id:17, pair:8,value:boo, clicked:false, selected:false},
    {id:4, pair:4,value:vegeta, clicked:false, selected:false},
    {id:18, pair:9,value:fatboo, clicked:false, selected:false},
    {id:5, pair:5,value:roshi, clicked:false, selected:false},
    {id:8, pair:8,value:boo, clicked:false, selected:false},
    {id:14, pair:5,value:roshi, clicked:false, selected:false},
    {id:7, pair:7,value:freezer, clicked:false, selected:false},
    {id:9, pair:9,value:fatboo, clicked:false, selected:false},
    {id:10, pair:1 ,value:videl, clicked:false, selected:false},
    {id:11, pair:2,value:gohan, clicked:false, selected:false},
    {id:13, pair:4,value:vegeta, clicked:false, selected:false},
    {id:15, pair:6 ,value:piccoro, clicked:false, selected:false},
    {id:3, pair:3,value:goku, clicked:false, selected:false},
    {id:16, pair:7,value:freezer, clicked:false, selected:false},
    {id:12, pair:3,value:goku, clicked:false, selected:false},
    {id:6, pair:6 ,value:piccoro, clicked:false, selected:false},
];

function Memorize(){
    const [cards, setCards]=useState(numbers);
    const [compare, setCompare]=useState([]);
    const [disable, setDisable]=useState(false);
    const [clicked,setClicked]=useState(0);

    React.useEffect(()=>{
        if(clicked===3){
            setClicked(0);
            setCompare([]);
            disableAll();
        }

        if(compare && compare.length ===2){
            if(compare[0] === compare[1]){
                setFounded(compare[0]);
            }else{
                console.log("no hay pareja");
            }
        }
    },[clicked,compare]);

    const setFounded=pair=>{
        const copyArr=[...numbers];
        copyArr.map((card)=>{
            if(card.pair === pair){
                card.selected=true;
                return;
            }
        });

        setCards(copyArr);
    }

    const disableAll=()=>{
        const copyArr=[...numbers];

        copyArr.map((card)=>{
            if(card.clicked && !card.selected){
                card.clicked=false;
            }
        });

        setCards(copyArr);
    }

    const changeState=id=>{
        const copyArr=[...numbers];

        copyArr.map((card)=>{
            if(card.id === id){
                card.clicked=true;
                return;
            }
        });

        setCards(copyArr);
    }
    const handleCard=card=>{
        setClicked(clicked+1);
        changeState(card.id);
        setCompare([...compare, card.pair]);
    }
    return(
        <div className="memorize_app">
            {
                cards.map((val,idx)=>{
                    return <div key={idx} 
                            className="card" 
                            onClick={()=>handleCard(val)}
                            >
                            <div className={`front ${(val.clicked) && 'front_hide'}`}>
                            </div>
                            <div className={`back ${(val.clicked) && 'back_show'}`}>
                                <img src={val.value} alt="imagen" />
                            </div>
                        </div>
                })
            }
            <button className="btn btn-primary" onClick={()=>{window.location.reload()}}>Volver A Jugar</button>
        </div>
    )
}

export default Memorize;