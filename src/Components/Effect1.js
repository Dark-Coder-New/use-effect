import React,{useState, useEffect} from "react";

let a = 10
const Effect1 = () => {
    
    let   [gold, setGold] = useState(0);  
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);
     
     
    //  let  [x,y]= useState(100)

   

    // step 1 => first , after that this code will only get exexuted when gold changes
    // side activity
     useEffect(()=>{
          document.title = `Gold ${gold} | Silver ${silver} | Bronze ${bronze}` 
          console.log("useEffect is running")
     },[bronze])

     // if no paramter => it will run on every render

     // if empty array => it will run only on first render only , not anytime after that


    return(
        <div>
                <h1>Gold {gold} | Silver {silver} | Bronze {bronze}</h1>
                <button onClick={() => setGold(gold + 1)}>Gold</button>
                <button onClick={() => setSilver(silver + 1)}>Silver</button>
                <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
        </div>
    )
}

export default Effect1;