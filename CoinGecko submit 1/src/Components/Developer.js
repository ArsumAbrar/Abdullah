import React from 'react'
import { AiOutlineStar,AiOutlineEye } from "react-icons/ai";
import Bars from './Bars';


const Developer = () => {
    return (
        <>
            <div className="row mx-4 justify-content-center">
                <div className="col-lg-7 col-sm-12">
                    <div class="row my-3">
                        <div className="col-lg-3 col-sm-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineStar/> Watchers </div>
                        </div>
                        <div className="col-lg-1 col-sm-1"><div className="divider mx-3"></div></div>
                        <div className="col-lg-3 col-sm-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineEye/> Watchers </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div className="col-lg-3 col-sm-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineStar/> Watchers </div>
                        </div>
                        <div className="col-lg-1 col-sm-1"><div className="divider mx-3"></div></div>
                        <div className="col-lg-3 col-sm-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineEye/> Watchers </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div className="col-lg-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineStar/> Watchers </div>
                        </div>
                        <div className="col-lg-1"><div className="divider mx-3"></div></div>
                        <div className="col-lg-3 stars">
                            <div className="stars-ctn">Hello</div><div className="stars-icon"><AiOutlineEye/> Watchers </div>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-5">
                    
                        <Bars/>
                    
                </div>
            </div>
        </>
    )
}

export default Developer