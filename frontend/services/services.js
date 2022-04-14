/*  export used services calling external data */

import axios from "axios";

/* Call external data calling Coin Gecko API 
*/
export const getCoinGeckoApiCall = () => {
    // useEffect(() => {
     return  axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
            )
            .then(res => {
                // console.log('coinGecko API CALL', res.data)
                return res.data;
            });
        //   .then(res => setCoinData(res.data))
        //   .catch(err => console.log(err));
    // }, []);
};