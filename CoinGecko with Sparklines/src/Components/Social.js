import React from 'react'
import { AiFillRedditCircle,AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Social = () => {
    return (
        <>
         <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-12 circle text-center align-items-center">
            <AiFillRedditCircle className="icon" />
            <p className="amount">23,238</p>
            <p className="users">REDDIT USERS</p>
            </div>
            <div className="col-lg-2 col-sm-12 circle">
            <AiFillRedditCircle className="icon" />
            <p className="amount">23,238</p>
            <p className="users">AVERAGE ACCOUNTS ACTIVE</p>
            </div>
            <div className="col-lg-2 col-sm-12 circle">
            <AiFillRedditCircle className="icon" />
            <p className="amount">23,238</p>
            <p className="users">AVERAGE NEW HOT POSTS <br/> PER HOUR</p>
            </div>
            <div className="col-lg-2 col-sm-12 circle">
            <AiFillRedditCircle className="icon" />
            <p className="amount">23,238</p>
            <p className="users">AVERAGE NEW COMMENTS <br/>PER HOUR</p>
            </div>
         </div>
        
         <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-12 circle">
            <AiFillTwitterCircle className="icon" />
            <p className="amount">23,238</p>
            <p className="users">TWITTER FOLLOWERS</p>
            </div>
            <div className="col-lg-2 col-sm-12 circle">
            <FaTelegram className="icon" />
            <p className="amount">23,238</p>
            <p className="users">TELEGRAM USERS</p>
            </div>
            
         </div>

         <div className="row justify-content-center">
            
         </div>

        </>
    )
}

export default Social
