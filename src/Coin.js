import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

function App(){
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] =useState([])
    const [dollar,setDollar]=useState(1);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((responce)=>responce.json())
        .then((json)=>{
        setCoins(json);
        setLoading(false);
    });
    },[]);
    const onChange =(event)=>{
        setDollar(event.target.value)
    }
    return(
        <div>
           <h1>The Coins! {loading ? "" : `(${coins.length})` }</h1>
           <input value={dollar} placeholder="Please Write your USD" type="number" onChange={onChange}></input>
           {loading ? <strong>Loading...</strong> : 
           <select>
               {coins.map((coin)=>
               <option>
                   {coin.name}({coin.symbol}) :{coin.quotes.USD.price} USD
               </option>
               )}
               {coins.map((coin)=>
               <option>
                   {coin.name}({coin.symbol}) : {dollar*coin.quotes.USD.price}{coin.symbol}
               </option>
               )}
           </select>
           }
        </div>
    );
};

export default App;