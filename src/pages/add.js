import './add.css'
import { useState } from 'react';
import axios from 'axios';
import Social from './social';
import Image from './image.png';
function Add() {
    const [inp, setInp] = useState({});
    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInp({ ...inp, [name]: value })
    }
    const submitdata = async (e) => {
        e.preventDefault();
        await axios.post("https://backendd-drog.onrender.com/", inp);
        window.alert("Post Successfully Created")
    }
    return (
        <>
            <div className='containeradd'>
               
                <form onSubmit={submitdata}>
                    <div className='div'>
                    <h1 className='h11'>Create Blog Post</h1>
                        <label>Image Url</label>
                        <input className='input' type='text' name='imgurl' value={inp.imgurl} required onChange={changehandler}></input>
                        <label>Title Post</label>
                        <input className='input' type='text' name='title' value={inp.title} required onChange={changehandler}></input>
                        <label>Post Content</label>
                        <textarea name='content' value={inp.content} required onChange={changehandler}></textarea>
                        <label> Post Date</label>
                        <input className='input' type='date' name='date' value={inp.date} required onChange={changehandler}></input>
                        <div className='btnn'><button className='button' type='submit'>SUBMIT</button></div>
                        <h3> <img src={Image}></img> Anuj Kumar</h3>

                    </div>



                </form>
               
            </div>
            <Social></Social>
        </>
    )

}
export default Add;