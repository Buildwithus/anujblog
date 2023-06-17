import './about.css'
import { RWebShare } from 'react-web-share';
import Social from './social';
import Image from './image.png';
function Privacy() {
    return (
        <>
        <div className='containeraboutt'>
            <div className='containerabout'>
                <h1 className='h1about'>Privacy Policy</h1>
            </div>
            <h5 className='h11about'>Privacy Policy</h5>
            <div className='conp'>
                <p className='ppp' >Anuj writes's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
              
                <p className='ppp'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                
                
            </div>
            <h5 className='h11about'>Children's Information</h5>
            <div className='conp'>
                
                <p className='ppp'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                <p className='ppp'>anuj writes does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
                If you think that your child provided this kind of information on our website, we strongly
                     encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records</p>
            </div>
            <h5 className='h11about'>Online Privacy Policy Only</h5>
            <div className='conp'>
                
                <p className='ppp'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in www.luckywrites.com. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                
            </div>
            <h5 className='h11about'>Consent</h5>
            <div className='conp'>
                
                <p className='ppp'>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                
            </div>
            <RWebShare data={{
                url: "https://anujwrites.netlify.app/privacy-policy"
            }}>
                <h6 className='lefth6'>SHARE</h6>
            </RWebShare>
            <h3> <img src={Image}></img> Anuj Kumar</h3>

        </div>
        <Social></Social>
        </>
    )
}
export default Privacy;
