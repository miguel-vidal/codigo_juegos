import React from "react"

function Facts(){

    const [fact, setFact]=React.useState("");
    const [input, setInput]=React.useState();

    
    const fetchAPI=number=>{
        fetch(`http://numbersapi.com/${number}?json`)
        .then(data=>data.json())
        .then(data=>{
            setFact(data.text);
        });
    }
    
    
    return(
        <div className="app_facts">
            <div className="container_facts">
                <h1>Escribe un numero</h1>
                <input type="text" value={input} onChange={e=>fetchAPI(e.target.value)} />
            </div>
            <div className="div_text_facts">
                <p><strong>{fact}</strong></p>
            </div>
        </div>
    );
}

export default Facts;