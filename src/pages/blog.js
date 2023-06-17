import { useEffect, useState } from 'react';
import './blog.css';
import { RWebShare } from 'react-web-share';
import Image from './image.png';
import Social from './social';
import axios from 'axios';
import Loading from './loader';
import { useParams } from 'react-router-dom';
function Veiw() {
    const { id } = useParams();
    const [veiw, setVeiw] = useState([]);
    const [load, setLoad] = useState(false);
    const callsingledata = async () => {
        const { data } = await axios.get(`https://backendd-drog.onrender.com/${id}`)
        setVeiw(data)
        setLoad(true)
    }
    useEffect(() => {
        callsingledata()
    }, [])
    return (
        <>
            <div className='containerveiw'>
                {load ? <><h1 className='h222'>{veiw.Title}</h1><img className='immg' src={veiw.Imgurl}></img>

                    <h5 className='h55'>{veiw.Date}</h5>
                    <p className='p'>{veiw.Content}</p>
                    <RWebShare data={{
                    url: `http://localhost:3000/blog/${id}`
                }}>
                    <h6 className='lefth6'>SHARE POST</h6>
                </RWebShare>
                    <h3> <img src={Image}></img> Anuj Kumar</h3></> : <Loading></Loading>}

             
            </div>
            <Social></Social>
        </>
    )
}
export default Veiw;