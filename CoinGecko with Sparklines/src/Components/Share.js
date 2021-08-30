import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './coin.css'

const Share = () => {

    const {id} = useParams();
    const [ coins, setCoins ] = useState([])

useEffect(() => {
    async function getData(){
      const res = await axios.get('https://cors.bridged.cc/https://api.coinranking.com/v2/exchanges',
      { header:{
              'Content-Type': 'application/json',
              'x-access-token':'coinrankingc0b595008db85657a50d4082f20ff1ab68d03f2b78445fb8',
              'Access-Control-Allow-Origin': "*"
      }})
    console.log(res.data.data)
   // setCoins(res.data.data.coins)
  }
  getData()
},[])
    return (
    <>
        {/* {
            coins.map((coin)=>{
                if(id===coin.uuid){
                return(
                    
                )
            }
        })
    }     */}
    </>
    )
}

export default Share