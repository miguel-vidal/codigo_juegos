import React,{useEffect,useState} from 'react';

export const Paint=()=>{
    let ctx='';
    let coord={};
    let canvas='';
    

    useEffect(()=>{
        
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        coord = { x: 0, y: 0 };
        window.addEventListener("resize",resize);
        resize();
    },[]);

    const clean=()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    const resize=()=> {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }
    function reposition(event) {
        coord.x = event.clientX - canvas.offsetLeft;
        coord.y = event.clientY - canvas.offsetTop;
      }
    const handleMouseDown=(e)=>{
        document.addEventListener("mousemove", draw);
        reposition(e);
    }
    function draw(event) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#1A1A1D";
        ctx.moveTo(coord.x, coord.y);
        reposition(event);
        ctx.lineTo(coord.x, coord.y);
        ctx.stroke();
      }
    const handleMouseUp=()=>{
        document.removeEventListener("mousemove", draw);
    }


    return (
        <>  
            <div className="menu__pain">
            <button onClick={()=>{clean()}}>Limpiar pizarron</button>
            </div>
            <canvas id="canvas" className="draw"
            onMouseDown={e=>handleMouseDown(e)}
            onMouseUp={e=>handleMouseUp(e)}
            >
            </canvas>
        </> 
    );
}