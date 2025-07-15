// import { createContext, useEffect, useState } from "react";

// export const CoinContext = createContext();

// const CoinContextProvider = (props) =>{
//            const [allCoin, setAllCoin] = useState([]);
//            const [currency, setCurrency] = useState({
//                 name:"usd",
//                 symbol:"$"
//            })

//     const fetchAllCoin = async () =>{
//         const options = {
//             method: 'GET',
//             headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-XTu4RbrKxeQTyo3WLPRg6TUD'}
//           };
          
//           fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
//             .then(res => res.json())
//             .then(res => setAllCoin(res))
//             .catch(err => console.error(err));
//     }     
    
//     useEffect(()=>{
//         fetchAllCoin();
//     },[currency])
    
//     const contextValue ={
//         allCoin, currency, setCurrency

//     }
//     return(
//         <CoinContext.Provider value={contextValue}>
//              {props.children}
//         </CoinContext.Provider>
//     )
// }

// export default CoinContextProvider;



import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  const fetchAllCoin = async () => {
    try {
      // 👇 ab backend se data aayega
      const res = await fetch(`http://localhost:5000/api/coins`);
      const data = await res.json();
      setAllCoin(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
