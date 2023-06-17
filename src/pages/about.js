import './about.css'
import { RWebShare } from 'react-web-share';
import Social from './social';
import Image from './image.png';
function About() {
    return (
        <>
        <div className='containeraboutt'>
            <div className='containerabout'>
                <h1 className='h1about'>About Us</h1>
            </div>
            <h5 className='h11about'>About Us</h5>
            <div className='conp'>
                <p className='ppp' >Hi, myself Anuj Kumar from Uttar Pradesh ,India. Anuj writes Blog is dedicated to all those who love and admire poem, story, creativity, new thinking etc. </p>
                <p className='ppp' >If we have added some content that belong to you or your organization by mistake, We are sorry for that.
                    We apologize for that and assure you that this wont be repeated in future.
                    If you are rightful owner of the content used in Website, Please mail us with your name,organization name, contact details at <b>anujkumar666768@gmail.com.</b>
                </p>
                <p className='ppp'>I assure you that, I will remove the infringing content Within 48 Hours.</p>
                <p className='ppp'>If you have any query regarding Site, and any other ussue, please feel free to contact at anujkumar666768@gmail.com</p>
                
            </div>
            <h5 className='h11about'>Children's Information</h5>
            <div className='conp'>
                
                <p className='ppp'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                <p className='ppp'>anuj writes does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
                If you think that your child provided this kind of information on our website, we strongly
                     encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records</p>
            </div>
            <RWebShare data={{
                url: "https://anujwrites.netlify.app/about"
            }}>
                <h6 className='lefth6'>SHARE</h6>
            </RWebShare>
            <h3> <img src={Image}></img> Anuj Kumar</h3>

        </div>
        <Social></Social>
        </>
    )
}
export default About;
