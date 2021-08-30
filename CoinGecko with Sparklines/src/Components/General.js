import React,{useState, useEffect} from "react";
import axios from 'axios'
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router'
import './general.css'


const General = () => {

  const {id} = useParams();
  const [ coins, setCoins ] = useState([])
  const [coin, setCoin] = useState([])
  const [lines, setLines ] = useState('24h')
  const [allHigh, setAllHigh] = useState('')
 // console.log(lines)
  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://cors.bridged.cc/https://api.coinranking.com/v2/coin/${id}`,
      {
          params:{
              'timePeriod':`${lines}`
        },
          header:{
              'Content-Type': 'application/json',
              'x-access-token':'coinrankingc0b595008db85657a50d4082f20ff1ab68d03f2b78445fb8',
              'Access-Control-Allow-Origin': "*"
      }})
    setCoins(res.data.data.coin.sparkline)
    setCoin(res.data.data.coin)
    setAllHigh(res.data.data.coin.allTimeHigh.price)
  }
  
  getData()
  
},[lines])

const line = {
  labels: ['','','','','','','','','','','','','','','','','','','','','','','','',''],
  datasets: [
    {
      label:'Hide',
      data: coins,
      fill: false,
      backgroundColor: 'green',
      borderColor: 'silver',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  return (<>
  <div className="row">
    <div className="col-lg-8 col-sm-12">
    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group" role="group" aria-label="First group">
  </div>
  <div className="input-group">
    <div className="input-group-prepend"><div className="btn-group" role="group" aria-label="First group">
    <button type="button" onClick={()=>{setLines('24h')}} className="btn variations btn-secondary">24h</button>
    <button type="button" onClick={()=>{setLines('7d')}} className="btn px-3 variations btn-secondary"> 7d </button>
    <button type="button" onClick={()=>{setLines('30d')}} className="btn variations btn-secondary">30d</button>
    <button type="button" onClick={()=>{setLines('1y')}} className="btn px-3 variations btn-secondary">1y</button>
    <button type="button" onClick={()=>{setLines('5y')}} className="btn px-3 variations btn-secondary">5y</button>
  </div>
    </div>
    </div>
</div>

  <Line data={line} options={options} />

<table className="table table-bordered " style={{textAlign:"center"}}>
<thead>
  <tr className="table-active rounded">
    <th scope="col">1h</th>
    <th scope="col">24h</th>
    <th scope="col">7d</th>
    <th scope="col">14d</th>
    <th scope="col">30d</th>
    <th scope="col">1y</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>0.1%</td>
    <td>0.1%</td>
    <td>0.1%</td>
    <td>0.1%</td>
    <td>0.1%</td>
  </tr>
  </tbody>
</table>

<div className="my-5 bg-light" style={{height:"80px"}}>

</div>

    </div>
   <div className="col-lg-4 col-sm-12">
    <div className="bg p-3">
    <table className="table">
    <h3 style={{fontWeight:"bolder"}}>{coin.symbol} Stats and Info</h3>
    <tbody>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>{coin.symbol} Price</td>
        <td style={{textAlign:"right"}}>${Number(coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Market Cap</td>
        <td style={{textAlign:"right"}}>${Number(coin.marketCap).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Market Cap Dominance</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Trading Volume</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Volume/Market Cap</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>24h Low/24h High</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>7d Low/ 7d High</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Market Cap Rank</td>
        <td style={{textAlign:"right"}}>{coin.rank}</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>All-Time High</td>
        <td style={{textAlign:"right"}}>${Number(allHigh).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>All-Time Low</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
    </tbody>
    </table>
    </div>
   </div>
    </div>
      <hr/>
  <div className="row justify-content-center my-3">
    <div className="table-responsive-sm table-bordered " style={{textAlign:"center"}}>
    <table class="table">
    <thead>
    <tr className="table-active rounded">
      <th scope="col">#</th>
      <th scope="col">Exchange</th>
      <th scope="col">Pair</th>
      <th scope="col">Price</th>
      <th scope="col">Spread</th>
      <th scope="col">+2% Depth</th>
      <th scope="col">-2% Depth</th>
      <th scope="col">24h Volume</th>
      <th scope="col">Volume %</th>
      <th scope="col">Last Traded</th>
      <th scope="col">Trust Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
      <td>0.1%</td>
    </tr>
    </tbody>
    </table>
  </div>
    </div>
    </>
  );
}

export default General


