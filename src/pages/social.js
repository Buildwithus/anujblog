
import './social.css';
import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";


function Social() {

    return (
        <div className=' containers'>
            <div className='smallc' >
            
                <div className='navii'>
                    <a className='na' href='/'>Home </a>
                    <a className='na' href='/about'>About </a>
                    <a className='na' href='/add'>Add Blog </a>
                    <a className='na' href='https://anujkumaar.netlify.app/'>Portfolio </a>
                </div>
                <div className='sss'>
                    <div className='instaa'>
                        <a className='cent' href='https://www.instagram.com/anujkumar49314/?igshid=ZDdkNTZiNTM%3D'><BsInstagram className='tt' style={{ width: "70%", height: "70%", margin: "auto" }} /></a>
                    </div>
                    <div className='instaa'>
                    <a className='cent' href='https://www.linkedin.com/in/anuj-kumar-756826225/'><RiLinkedinLine className='tt' style={{ width: "80%", height: "80%", margin: "auto" }} /></a>
                    </div>
                    <div className='instaa'>
                    <a className='cent' href='https://github.com/Buildwithus'><BsGithub className='tt' href='#ty' style={{ width: "72%", height: "70%", margin: "auto" }} /></a>
                    </div>
                    <div className='instaa'>
                    <a className='cent' href='https://twitter.com/AnujKum41252487'><SiTwitter className='tt' style={{ width: "67%", height: "68%", margin: "auto" }} /></a>
                    </div>
                </div>
                <p className='last-d' >Copyright © Anuj Kumar. All rights reserved</p>
            </div>
        </div>
    )
}
export default Social;