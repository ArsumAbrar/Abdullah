import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

import Developer from './Developer'
import General from './General'
import Social from './Social'
import Widgets from './Widgets'

import './coin.css'


const CoinData = () => {

    const {id} = useParams();
    const [ coins, setCoins ] = useState([])
    const [supply, setSupply] = useState('')
    const [circulating, setCirculating] = useState('')
    const [link, setLink] = useState([])

    const [show, setShow] = useState("overview")

useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://cors.bridged.cc/https://api.coinranking.com/v2/coin/${id}`,
      {
          header:{
              'Content-Type': 'application/json',
              'x-access-token':'coinrankingc0b595008db85657a50d4082f20ff1ab68d03f2b78445fb8',
              'Access-Control-Allow-Origin': "*"
      }})
    console.log(res.data.data.coin)
    setCoins(res.data.data.coin)
    
    setSupply(res.data.data.coin.supply.total)
    setCirculating(res.data.data.coin.supply.circulating)
    //console.log(res.data.data.coin.links)
    setLink(res.data.data.coin.links)
}
  getData()
  
},[])
    return (
    <>
         <div className="container-fluid">
         <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 mx-auto">
                    <div className="rank px-1 m-1" >Rank # {coins.rank}</div>
                    <div className="m-1">{coins.name}</div>
                    <div className="m-1"><span style={{fontSize:"xx-large"}}>${Number(coins.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> {Number(coins.change).toFixed(2)}%</div>
                    <div className="">{coins.btcPrice} BTC <span> {}</span></div>
                    <div>Buttons</div>
                    <div className="progress" style={{height:"10px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
                    <table className="table">
                        <tbody>
                            <tr>
                            <td style={{textAlign:"left"}}>MarketCap</td>
                            <td style={{textAlign:"center"}}>24H Range</td>
                            <td style={{textAlign:"right"}}>@mdo</td>
                            </tr>
                        </tbody>
                        </table>
                        <table className="table">
                        <tbody>
                            <tr>
                            <td style={{textAlign:"left", fontWeight:"lighter"}}>Market Cap</td>
                            <td style={{textAlign:"right"}}>${Number(coins.marketCap).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>
                            <tr>
                            <td style={{textAlign:"left", fontWeight:"lighter"}}>24H Trading Volume</td>
                            <td style={{textAlign:"right"}}>${Number(coins["24hVolume"]).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>
                            <tr>
                            <td style={{textAlign:"left", fontWeight:"lighter"}}>Fully Diluted Value</td>
                            <td style={{textAlign:"right"}}>${(Number(supply)*Number(coins.price)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>
                        </tbody>
                        </table>
                    
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="btm">
                <table className="table">
                    <tbody>
                        <tr>
                        <td style={{textAlign:"left", fontWeight:"lighter"}}>Circulating Supply</td>
                        <td style={{textAlign:"right"}}>{Number(circulating).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                        <tr>
                        <td style={{textAlign:"left", fontWeight:"lighter"}}>Total Supply</td>
                        <td style={{textAlign:"right"}}>{Number(supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                        <tr>
                        <td style={{textAlign:"left", fontWeight:"lighter"}}>Max Supply</td>
                        <td style={{textAlign:"right"}}>{Number(supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                <div className="col-md-4 col-sm-12">

                <table className="table table-borderless">
                    <tbody>
                        <tr>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        </tr>
                    </tbody>
                </table>


                <div className="mx-3" style={{fontSize:"22px", fontWeight:"700"}}>Info</div>
                    
                    
                    <table className="table links">
                    <tbody style={{margin:"20px"}}>
                    {
                        link.map((item)=>{return(
                            <tr key={item.url}>
                                <td style={{textAlign:"left", fontWeight:"lighter"}}>{item.type}</td>
                                <td style={{textAlign:"left"}}>
                                    <a 
                                    style={{
                                    textDecoration:"none",
                                    color:"black",
                                    backgroundColor:"silver",
                                    borderRadius:"5px",
                                    paddingRight:"5px",
                                    paddingLeft:"5px"}}
                                    href={item.url}>{item.name}</a>
                                </td>
                            </tr> 
                    )})
                    }
                        
                    </tbody>
                </table>
                </div>
            </div>


            <div className="converter py-4 my-2"></div>
            <div id="outer">
                <button className="inner btn bg-success navitems mx-1 my-2" onClick={()=>{setShow('overview')}} >General</button>
                <button className="inner btn bg-success navitems mx-1 my-2" onClick={()=>{setShow('social')}} >Social</button>
                <button className="inner btn bg-success navitems mx-1 my-2" onClick={()=>{setShow('developer')}} >Developer</button>
                <button className="inner btn bg-success navitems mx-1 my-2" onClick={()=>{setShow('widgets')}} >Widgets</button>
            </div>

            <div>
                {show === "overview" && <General/>}
                {show === "social" && <Social/>}
                {show === "developer" && <Developer/>}
                {show === "widgets" && <Widgets/>}
            </div>



        </div>  
    </>
    )
}

export default CoinData

