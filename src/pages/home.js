import './home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './image.png';
import Loader from './loader';
import Social from './social';
import { RWebShare } from 'react-web-share';
import { Link,useParams } from 'react-router-dom'
function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)

    console.log(search)
    const records = 5;
    const { id } = useParams();
    const npage = Math.ceil(data.length / records);
    const [currentpage, setCurrentpage] = useState(1);

    const calldata = async () => {
        const { data } = await axios.get("https://backendd-drog.onrender.com/");
        setData(data);
        setLoading(true)
    }
    useEffect(() => {
        calldata();
    }, [])

    const lastindex = (currentpage * records);
    const firstindex = lastindex - records;
    const nextpage = () => {
        if (currentpage < npage) {
            setCurrentpage(currentpage + 1)
        } else {
            setCurrentpage(currentpage)
        }
    }

    const prepage = () => {
        if (currentpage > 1) {
            setCurrentpage(currentpage - 1)
        } else {
            setCurrentpage(currentpage)
        }
    }
    return (
        <div className='mainb'>
            <div className='srct'>
                <form  >
                    <input type="search" className='formaa ' onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="SEARCH BLOG"></input>
                </form>
            </div>
            <div className='body'>
                {loading ? data.filter((data) => {
                    return search === '' ? data : data.Title.toLowerCase().includes(search)
                }).toReversed().slice(firstindex, lastindex).map((d) => (
                    <div className='box1'>
                        <div className='right'>
                            <img className='img' src={d.Imgurl} ></img>

                        </div>
                        <div className='left'>
                            <h2 className='h22'>{d.Title}</h2>
                            <h5 className='h55'>{d.Date}</h5>
                            <p className='p'>  {d.Content.slice(0, 200)}</p>
                            <RWebShare data={{
                                url: "http://localhost:3000"
                            }}>
                                <h6>SHARE POST</h6>
                            </RWebShare>
                            

                            <h6 className='lefth6'><Link className='readm' to={`blog/${d._id}`}>READ MORE</Link> </h6>
                        </div>


                    </div>

                )) : <Loader></Loader>}
                  
                <h6 className='hl6 lefth6'><a href='#' onClick={nextpage}>NEXT <b>&rarr;</b> </a></h6>
                <h6 className=' hl6'><a href='#' onClick={prepage}> <b>&larr;</b>PREVIOUS</a></h6>
                <h6 className=' cent'>{currentpage}</h6>
                <h3> <img src={Image}></img> Anuj Kumar</h3>
            </div>
            <Social></Social>
        </div>
    )
}
export default Home;
