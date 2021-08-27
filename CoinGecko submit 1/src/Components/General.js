import React,{useState, useEffect} from "react";
import axios from 'axios'
import { useParams } from 'react-router'
import './general.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",

    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
 
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
 
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",

    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
 
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
  
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
 
    pv: 4300,
    amt: 2100
  }
];

const General = () => {

  const [coin, setCoin] = useState([])
  const {id} = useParams();
  const [ coins, setCoins ] = useState([])

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://cors.bridged.cc/https://api.coinranking.com/v2/coin/${id}`,
      {
          header:{
              'Content-Type': 'application/json',
              'x-access-token':'coinrankingc0b595008db85657a50d4082f20ff1ab68d03f2b78445fb8',
              'Access-Control-Allow-Origin': "*"
      }})
    setCoins(res.data.data.coin)
}
  getData()
  
},[])



  return (<>
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12">
    <div id="chart">
    <ResponsiveContainer >
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
</div>

<div id="outer" className="text-center my-4">
<div className="inner mx-2 form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Main
  </label>
</div>
<div className="inner mx-2 form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    BTC
  </label>
</div>
<div className="inner mx-2 form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    ETH
  </label>
</div>
</div>

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
    <h3>ICP Stats and Info</h3>
    <tbody>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
        <td style={{textAlign:"right"}}>@mdo</td>
        </tr>
        <tr>
        <td style={{textAlign:"left", fontWeight:"lighter"}}>Mark</td>
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