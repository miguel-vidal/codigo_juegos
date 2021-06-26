import React,{useState,useEffect} from 'react';

const money=[10,0,5,2,100,0,0,500];
function Vegas(){
    const [isStarted, setIsStarted]=useState(false);

    const getRandomArbitrary=(min, max) =>{
        return Math.trunc(Math.random() * (max - min) + min);
    }

    const stopInterval=interval=>{
        clearInterval(interval);
    }
    
    const draw=()=>{
        let num=document.getElementById("num");

        let interval=setInterval(()=>{
            let aleatorio=getRandomArbitrary(0, money.length);
            num.innerText=`$ ${money[aleatorio]}`;
        },1500);

        setTimeout(()=>{
            setIsStarted(prevState=>!prevState);
            stopInterval(interval);
        },1000*21);
    }

    const handleStartGame=()=>{
        setIsStarted(prevState=>!prevState);
        draw();
    }

    return(
        <div className="app__money">
            <div className="div-card-money" id="div-card" style={{background:`${(isStarted) ? '#FF652F':'#14A76C'}`}}>
                <span id="num" className={(isStarted) && "text"}></span>
            </div>
            <div className="btn-section-money">
                <button disabled={(isStarted) ? true:false} onClick={()=>handleStartGame()}>Jugar</button>
            </div>
        </div>
    )
}

export default Vegas;