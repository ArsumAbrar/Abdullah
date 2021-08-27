import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Coins = () => {

  const [coins, setCoins] = useState([])

  let stat = false

  const [searchedTerm, setSearchedTerm] = useState("");
  const [search, setSearch] = useState("");

  const inputEvent = (e) => {
    setSearchedTerm(e.target.value)
    setSearch(searchedTerm)
  }
  const onSubmit = () => {
    setSearchedTerm(search)
    setSearch(searchedTerm)
    console.log(search)
  }

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://cors.bridged.cc/https://api.coinranking.com/v2/coins',
        { 
          params: {
            'limit': '100'
          },
           header: {
            'Content-Type': 'application/json',
            'x-access-token': 'coinrankingc0b595008db85657a50d4082f20ff1ab68d03f2b78445fb8',
            'Access-Control-Allow-Origin': "*"
          }
      })
      console.log(res.data.data.coins)
      setCoins(res.data.data.coins)
    }
    getData()
  }, [])

  return (<>
    <div className="container">
      {
        coins && coins.length ? (<div>  <div>
          <input
            type="search"
            placeholder="Search"
            onChange={inputEvent}
            value={searchedTerm}
          />
          <button onClick={onSubmit}>Search Coins</button>
        </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              {coins.filter((coin) => {
                if (search == "") {
                  return coin
                } else if (
                  coin.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return coin
                }
              }).map(coin => {
                return (
                  <tr key={coin.uuid}>
                    <th scope="row"># {coin.rank}</th>
                    <td><img style={{ marginRight: "-25px" }} height={18} src={coin.iconUrl} /></td>
                    <td><Link style={{ textDecoration: "none", color: "black" }} to={"/data/" + coin.uuid}>{coin.name}</Link></td>
                    <td style={{ fontWeight: "lighter", fontSize: "15px" }}>{coin.symbol}</td>
                    <td>${Number(coin.price).toFixed(2)}</td>
                    <td style={{ fontWeight: "light", fontSize: "15px" }}>{Number(coin.change).toFixed(2)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>) : (<div>Loading</div>)
      }
    </div>
  </>
  )
}

export default Coins