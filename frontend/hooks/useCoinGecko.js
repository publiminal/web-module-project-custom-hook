import { useEffect, useState } from 'react';
import {getCoinGeckoApiCall} from '../services/services';


const useCoinGecko = initCoinGecko => {

  /* set states geckoApiCall */
  const [coinGecko, setCoinGecko] = useState(initCoinGecko);
  
    /* Call GECKO API */
    useEffect(() => {
      getCoinGecko(); 
    }, []);

    // Call coinGecko from services module (axios call) then set state
    const getCoinGecko = () => {
      getCoinGeckoApiCall()
      .then((data) => {
        setCoinGecko(data);
      })
      .catch(err => {
        console.log(err);
      });
    };
  
  return ([coinGecko, getCoinGecko]);

}

export default useCoinGecko;
