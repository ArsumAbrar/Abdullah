import React,{useState} from 'react'
import Developer from './Developer'
import General from './General'
import Social from './Social'
import Widgets from './Widgets'
import './coin.css'

const CoinGecko = () => {

    const [show, setShow] = useState("overview")
return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 mx-auto">
                    <div className="rank px-1 m-1" >Rank #16</div>
                    <div className="m-1">Internet Computer (ICP)</div>
                    <div className="m-1"><span style={{fontSize:"xx-large"}}>70.6 %</span> -2.9%</div>
                    <div className="">0.0000153 BTS <span> -7.1</span></div>
                    <div>Buttons</div>
                    <div className="progress" style={{height:"10px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
                    <table class="table">
                        <tbody>
                            <tr>
                            <td style={{textAlign:"left"}}>Mark</td>
                            <td style={{textAlign:"center"}}>@mdo</td>
                            <td style={{textAlign:"right"}}>@mdo</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="table">
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
                        </tbody>
                        </table>
                    
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="btm">
                <table class="table">
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
                    </tbody>
                </table>
                </div>
                </div>
                <div className="col-md-4 col-sm-12">

                <table class="table table-borderless">
                    <tbody>
                        <tr>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        <td style={{textAlign:"left"}}><button className="btn bg-success">Earn / Loan</button></td>
                        </tr>
                    </tbody>
                </table>


                <div className="mx-3" style={{fontSize:"22px", fontWeight:"700"}}>Info</div>
                <div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div>
                <div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div><div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div><div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div><div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div><div className="my-2" id="outer">
                    <div className="inner dtl" style={{marginRight:"20px", marginLeft:"16px"}} >website</div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                    <div className="inner mx-1"
                    style={{backgroundColor:"#B0C4DE", borderRadius:"4px", paddingLeft:"4px",paddingRight:"4px"}}
                    > difinity.org </div>
                </div>
                
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
export default CoinGecko