import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import UserProject from './Project/UserProject';
import WorkExperience from './Experience/WorkExperience';
import UserEducation from './Education/UserEducation';
import UserCertificate from './UserCertificate';
import UserSkillAcquire from './UserSkillAcquire';
import UserProfileLink from './Profile/UserProfileLink';
import UserResume from './Resume/UserResume';
import Cookies from 'js-cookie';
import axios from 'axios';
import {urlFunction} from '../../App';

const UserAbout = () => {

    const [user, setUser] = useState();
    const [role, setRole] = useState();
    const [location, setLocation] = useState('');
    const [visible, setVisible] = useState(true);
    const [name, setName] = useState();
    const [about, setAbout] = useState();

    useEffect(() => {
        loadUser();
    }, [])

    console.log("url = "+urlFunction());

    const loadUser = async () => {
        const { userEmail } = JSON.parse(Cookies.get('yourData'));
        try {
            const userData = await axios.get(urlFunction()+`user/fetchUser/${userEmail}`);
            setName(userData.data.userName)
            setLocation(userData.data?.userAddress || "Your LOcation");
            setRole(userData.data?.userRole || "What is Your Role");
            setAbout(userData.data?.userBio || 'Write Something About Your Self')
            setUser(userData.data);
        } catch (err) {
            return console.log("THere is Error ", err);
        }
    }


    const cancel = () => {
        document.getElementById('b-1').classList.add('d-none')
        document.getElementById('i1').style.border ='2px solid white';
        document.getElementById('i2').style.border ='2px solid white'
        document.getElementById('i3').style.border ='2px solid white'
        setVisible(true)
    }

    const editNow = () => {
        document.getElementById('b-1').classList.remove('d-none');
        document.getElementById('i1').style.border ='2px solid black';
        document.getElementById('i2').style.border ='2px solid black'
        document.getElementById('i3').style.border ='2px solid black'
        setVisible(false)
    }

    // for the about
    const editAbout = () => {
        document.getElementById('a-1').classList.remove('d-none');
        document.getElementById('about').style.border ='2px solid black';
        document.getElementById('about').style.height= '40vh'
        setVisible(false)
    }

    const cancelAbout = () => {
        document.getElementById('a-1').classList.add('d-none');
        document.getElementById('about').style.border ='2px solid white';
        document.getElementById('about').style.height= '11vh';
        document.getElementById('about').style.padding= '2';
        setVisible(true);
    }

    // for name ,role and location
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            userName: name,
            userRole: role,
            userAddress: location
        }
        try {
            const updatedUser = await axios.post(urlFunction()+`user/update/${user.userEmail}`, body)
            console.log(updatedUser);
            setUser(updatedUser.data);
            document.getElementById('b-1').classList.add('d-none')
            setVisible(true);

        } catch (err) {
            return console.log("There is error", err);
        }
        console.log(body);
    }

     // for name ,role and location
     const handleAboutSubmit = async (e) => {
        e.preventDefault();
        const body = {
            userBio: about,
           
        }
        try {
            const updatedUser = await axios.post(urlFunction()+`user/update/${user.userEmail}`, body)
            console.log(updatedUser);
            setUser(updatedUser.data);
            document.getElementById('a-1').classList.add('d-none')
            setVisible(true);

        } catch (err) {
            return console.log("There is error", err);
        }
        console.log(body);
    }
    return (
        <div>
            <div class="row">
                {/* for the user profile and role */}
                <div class="col-md-3">
                    <div class="card border border-dark border-2 rounded rounded-lg py-md-5 py-3 d-flex flex-column justify-content-center align-items-center">
                        <div class="card-body my-0 py-0">
                            <div class="row py-0 my-0">
                                <div class="col-5 col-md-12">
                                    <div class="card h-100 border border-0 mb-md-3">
                                        <img src={user?.profile} class="w-100 rounded rounded-circle px-lg-5" alt="Profile Image" />
                                        <span><FontAwesomeIcon onClick={editNow} icon={faPenToSquare} /></span>
                                    </div>
                                </div>
                                <div class="col-7 col-md-12 edit" >
                                    <div class="card h-100 border border-0">
                                        <div class="border-0 text-center d-flex flex-column align-items-start align-items-md-center justify-content-center h-100">

                                            <form onSubmit={handleSubmit}>
                                                {/* for the name */}
                                                <span class="h4">
                                                    <input style={{border:'1px solid white',fontWeight: 'bold',fontSize:'1.3rem'}} type="text" id='i1' className='text-center bg-white form-control mb-1' value={name} disabled={visible} onChange={(e) => setName(e.target.value)} />
                                                </span>

                                                {/* for the role */}
                                                <span class="h6 text-center">
                                                    <input style={{border:'1px solid white'}} type="text" id='i2' className='p-1  text-center bg-white form-control mb-1' value={role} disabled={visible} onChange={(e) => setRole(e.target.value)} />
                                                </span>

                                                {/* for the location */}
                                                <span class="h6 text-center">
                                                    <input style={{border:'1px solid white'}}  id='i3' type="text" className='p-1  text-center bg-white form-control mb-1' value={location} disabled={visible} onChange={(e) => setLocation(e.target.value)} />
                                                </span>
                                                <div className='row col-md-12 col-sm-12 mt-2 d-none' id='b-1'>
                                                    <div className='col-md-6 col-sm-12'>
                                                        <button onClick={cancel} type='button' className='btn btn-outline-primary '>Cancel</button>
                                                    </div>
                                                    <div className='col-md-6 col-sm-12'>
                                                        <button className='btn btn-danger'>Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for the about page */}
                <div class="col-md-9">
                    <div class="card border border-dark border-2 rounded rounded-lg mt-3 mt-md-0">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h4>About me</h4>
                                <FontAwesomeIcon onClick={editAbout} icon={faPenToSquare} />
                            </div>
                            <form onSubmit={handleAboutSubmit}>
                                <textarea name="" value={about} disabled={visible} id='about' onChange={(e) => setAbout(e.target.value)} className=' form-control p-2 mb-4 shadow-none overflow-hidden' style={{backgroundColor:'white',border:'1px solid white', height:'10vh'}} />
                                <div className='row col-md-12 col-sm-12 mt-2 d-none' id='a-1'>
                                    <div className='col-md-2 col-sm-12'>
                                        <button onClick={cancelAbout} type='button' className='btn btn-outline-primary '>Cancel</button>
                                    </div>
                                    <div className='col-md-2 col-sm-12'>
                                        <button className='btn btn-danger'>Save</button>
                                    </div>
                                </div>
                            </form>
                            {/* <p>Hello, I am a fullstack developer and my biggest dream is to get a good position in an IT company and earn well on the basis of my knowledge and develop the company a lot. And I always want to learn new technology and always try to do something different. And want to take myself far ahead and fulfill all my dreams. Keep Coding.... Never give up on yourself.</p> */}
                        </div>
                    </div>

                    <WorkExperience user={user}/>
                    <UserEducation user={user}/>
                    <UserProject />
                    <UserCertificate />
                    <UserSkillAcquire />
                    <UserProfileLink />
                    <UserResume />
                </div>
            </div>
        </div>
    )
}

export default UserAbout