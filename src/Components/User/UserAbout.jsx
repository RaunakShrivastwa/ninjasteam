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

const UserAbout = () => {

    const [user, setUser] = useState();
    const [role, setRole] = useState();
    const [location, setLocation] = useState('');
    const [visible, setVisible] = useState(true);
    const [name,setName] =useState()

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const { userEmail } = JSON.parse(Cookies.get('yourData'));
        try {
            const userData = await axios.get(`http://localhost:4000/user/fetchUser/${userEmail}`);
            setName(userData.data.userName)
            setLocation(userData.data?.userAddress || "Your LOcation")
            setRole(userData.data?.userRole || "What is Your Role")
            setUser(userData.data);
        } catch (err) {
            return console.log("THere is Error ", err);
        }
    }

    const editNow = ()=>{
        document.getElementById('b-1').classList.remove('d-none')
        setVisible(false)
    }

    const cancel = ()=>{
        document.getElementById('b-1').classList.add('d-none')
        document.getElementById('i1').style.backgroundColor ='white'
        document.getElementById('i2').style.backgroundColor ='white'
        setVisible(true)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const body = {
           userName :name,
           userRole:role,
           userAddress: location
        }
        try{
            const updatedUser = await axios.post(`http://localhost:4000/user/update/${user.userEmail}`,body)
            console.log(updatedUser);
            setUser(updatedUser.data);
            document.getElementById('b-1').classList.add('d-none')
            setVisible(true);

        }catch(err){
            return console.log("There is error",err);
        }
        console.log(body);
    }
    return (
        <div>
            <div class="row">
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
                                                    <input  type="text" id='i1' className='text-center border-0' value={name} disabled={visible} onChange={(e) => setName(e.target.value)} />
                                                </span>

                                                {/* for the role */}
                                                <span class="h6 text-center">
                                                    <input  type="text" id='i2' className='p-2 border-0 text-center' value={role} disabled={visible} onChange={(e) => setRole(e.target.value)} />
                                                </span>

                                                {/* for the location */}
                                                <span class="h6 text-center">
                                                    <input  type="text" className='p-2 border-0 text-center' value={location} disabled={visible} onChange={(e) => setLocation(e.target.value)} />
                                                </span>
                                                <div className='row col-md-12 col-sm-12 mt-2 d-none' id='b-1'>
                                                    <div className='col-md-6 col-sm-12'>
                                                        <button onClick={cancel} type='button' className='btn btn-outline-primary'>Cancel</button>
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

                <div class="col-md-9">
                    <div class="card border border-dark border-2 rounded rounded-lg mt-3 mt-md-0">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h4>About me</h4>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <p>Hello, I am a fullstack developer and my biggest dream is to get a good position in an IT company and earn well on the basis of my knowledge and develop the company a lot. And I always want to learn new technology and always try to do something different. And want to take myself far ahead and fulfill all my dreams. Keep Coding.... Never give up on yourself.</p>
                        </div>
                    </div>

                    <WorkExperience />
                    <UserEducation />
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