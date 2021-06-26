import React,{useState} from 'react';
import {Card} from './card.js';
import {Win,Looser} from './result.js';

const cardsObject=[
  {
    id:1,
    clicked:false,
    award:false
  },
  {
    id:2,
    clicked:false,
    award:false
  },
  {
    id:3,
    clicked:false,
    award:false
  }
];
function Cat() {
    const [isShown, setIsShown] = useState(false);
    const [cards,setCards]=useState([]);
    const [oportunity, setOportunity]=useState(2);
    const [end,setEnd]=useState(false);
    const [award, setAward]=useState(false);

    React.useEffect(()=>{
      if(oportunity === 0){
        setTimeout(()=>{
          setEnd(prevState=>!prevState);
        },1000);
      }
    },[oportunity]);
    


    React.useEffect(()=>{
      setGame();
    },[]);


    const getRandomArbitrary=(min, max) =>{
      return Math.trunc(Math.random() * (max - min) + min);
    }

    const setGame=()=>{
        let random=getRandomArbitrary(1,4);
        const cardsCopy=cardsObject;

        for(let i in cardsCopy){
          if(cardsCopy[i].id === random){
            cardsCopy[i].award=true
          }
        }
        setCards(cardsCopy);
    }

  
    return (
      <div className="cat__app">
        <div className="container__cat">
          {
            cards.map(thisCard=>{
              return <Card 
                        thisCard={thisCard} 
                        cards={cards} 
                        setCards={setCards} 
                        oportunity={oportunity}
                        setOportunity={setOportunity}
                        end={end}
                        award={award}
                        setAward={setAward}
                        key={thisCard.id}/>
            })
          }
        </div>
        <div className="oportunity">
          <h1>Oportunidades:</h1>
          <h2 className="text">{oportunity}</h2>
        </div>
        {(award) && <Win/>}
        {(end && !award) && <Looser />}
      </div>
    );
  }
  
  export default Cat;