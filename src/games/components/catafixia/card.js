import React from 'react';
import cabra from '../../img/cabra.png';

export const Card=({
        thisCard,
        cards, 
        setCards,
        oportunity,
        setOportunity,
        end,
        setAward,
        award
    })=>{

    const handleClick=thisCard=>{
        setOportunity(oportunity-1);
        if(thisCard.award){
          setTimeout(()=>{
            setAward(prevState=>!prevState);
          },700);
          return 0;
        }

        const cardsCopy=cards;
        for(let i in cardsCopy){
            if(cardsCopy[i].id === thisCard.id){
              cardsCopy[i].clicked=true;
            }
          }
        setCards(cardsCopy);
      }
    
    return(
        <div className="card" onClick={e=>handleClick(thisCard)}>
          <section className={`front__cat ${(thisCard.clicked || end || award) && 'front_hide__cat'}`} >
            <h2 className="number__gate__cat">{thisCard.id}</h2>
          </section>
          <section className={`back__cat ${(thisCard.clicked || end || award) && 'back_show__cat'}`} >
            {
                (thisCard.award)
                ? <h2>Premiooo !!!!</h2>
                : <img className="img__backcard__cat" src={cabra} alt="cabra" />
            }
          </section>
        </div>
    )
}