import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import './login.css'
import { Link, json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignUp() {
    const [avtar, setAvtar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [userMob, setMob] = useState('');
    const [cPassword, setCpassword] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [otp, setOtp] = useState('');
    const [fieldsDisabled, setFieldsDisabled] = useState(false);
    const [timer, setTimer] = useState(120); // Initial timer value in seconds
    const [timerCompleted, setTimerCompleted] = useState(false);
    const [img,setImg] = useState('');


    const history = useNavigate();

    useEffect(() => {
        if (otp.length == 6) {
            console.log(otp);
            varify();
        }
    }, [otp])

    const varify = async () => {
        const body = {
            OTP: otp
        }
        try {
            const res = await axios.post(`http://localhost:4000/user/varify`, body)
            // this code for invalide 
            if (res.data.flag) {
                document.getElementById('valide').classList.add('d-none');
                document.getElementById('invalide').classList.remove('d-none');
            }
            else if (res.data.expire) {
                document.getElementById('valide').classList.add('d-none');
                document.getElementById('exp').classList.remove('d-none');
            }
            else{
                              
                history('/ninja/auth/login')
            }
           
            
        } catch (err) {
            return console.log("There is error variying ", err);
        }
    }

    useEffect(() => {
        let interval;
        if (fieldsDisabled && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setTimerCompleted(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [fieldsDisabled, timer]);

    const handleResend = async () => {
        document.getElementById('valide').classList.remove('d-none');
        document.getElementById('invalide').classList.add('d-none');
        try {
            const resendOtp = await axios.post(`http://localhost:4000/user/resend`)
        } catch (err) {
            return console.log("there is error ", err);
        }
        setTimer(120);
        setTimerCompleted(false);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setImg(file.Files)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvtar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(img);
        const body = {
            userName: name,
            userEmail: email,
            userPassword: password,
            userMob: userMob,
            userAddress: address,
            userDOB: dob,
            userBio: bio,
            profile:'https://cdn-icons-png.flaticon.com/128/1999/1999625.png'
        }
      

        document.getElementById('otp').classList.remove('d-none');
        document.getElementById('floatingAdress').classList.add('d-none');
        setFieldsDisabled(true)
        try {
            const saveData = await axios.post(`http://localhost:4000/user/add`, body);
            console.log(saveData);
        } catch (error) {
            return console.log("There is errro post data", error);
        }
    };

    return (
        <MDBContainer className="gradient-form overflow-hidden">
            <MDBRow>
                <MDBCol className="mb-5 col-md-6 col-sm-12">
                    <div className="">
                        <div className="text-center">
                            <img src="/image/icon/ninja.png" style={{ width: '100px' }} alt="logo" />
                            <h4 className="mt-1 mb-3 pb-1"><img width='20px' src="https://cdn-icons-png.flaticon.com/128/12503/12503107.png" alt="" /><span>Hello Ninja's Create Your Account and Join Us</span></h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* first row */}
                            <div class="row g-2 mb-3">
                                {/* for username */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="text" required name="userName" value={name} class="form-control" onChange={(e) => setName(e.target.value)} disabled={fieldsDisabled} id="floatingname" placeholder="Full Name" />
                                        <label for="floatingPassword">Full Name</label>
                                    </div>
                                </div>

                                {/* for email */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="email" required name='userEmail' class="form-control" id="floatingemail" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={fieldsDisabled} />
                                        <label for="floatingemail">Email</label>
                                    </div>
                                </div>
                            </div>

                            {/* for the second row */}
                            <div class="row g-2 mb-3">
                                {/* for mobile number */}
                                <div class="col-md">
                                    <div class="input-group form-floating flex-nowrap">
                                        <span class="input-group-text" id="removeon-wrapping"><img width='30px' src="/image/icon/ind.png" alt="" />+91</span>
                                        <div class="form-floating">
                                            <input type="number" required name='userMob' class="form-control" id="floatMob" placeholder="Mobile" value={userMob} onChange={(e) => setMob(e.target.value)} disabled={fieldsDisabled} />
                                            <label for="floatingMob">Mobile</label>
                                        </div>
                                    </div>
                                </div>

                                {/* for dob */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} disabled={fieldsDisabled} name='userDOB' class="form-control" id="date" placeholder="DOB" />
                                        <label for="floatingemail">DOB</label>
                                    </div>
                                </div>
                            </div>

                            {/* for the third row  */}
                            <div class="row g-2 mb-3">
                                {/* for username */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} disabled={fieldsDisabled} class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                </div>

                                {/* for cpassword */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="password" required value={cPassword} onChange={(e) => setCpassword(e.target.value)} disabled={fieldsDisabled} class="form-control" id="floatingConformPassword" placeholder="Password" />
                                        <label for="floatingemail">Conform Password</label>
                                    </div>
                                </div>
                            </div>

                            {/* for the address */}
                            <div class="form-floating mb-4">
                                <textarea value={address} required onChange={(e) => setAddress(e.target.value)} disabled={fieldsDisabled} class="form-control" id="floatingAdress" placeholder="Address" />
                                <label className='' for="floatingAdress">Address</label>
                            </div>

                            {/* for the image */}
                            <div class="row g-2 mb-3">
                                {/* for username */}
                                <div class="col-md">
                                    <div className="avtar-img-container">
                                        {avtar && <img width='80px' className="avtar-img" src={avtar} alt="Selected Avatar" />}
                                    </div>

                                </div>

                                {/* for email */}
                                <div class="col-md">
                                    <div class="form-floating">
                                        <input type="file" class="form-control" id="imgfile" placeholder="Password" onChange={handleAvatarChange} />
                                        <label for="floatingemail">Upload Prifile Photo</label>
                                    </div>
                                </div>
                            </div>

                            {/* for the About Us */}
                            <div class="form-floating mb-4" id='about'>
                                <textarea value={bio} onChange={(e) => setBio(e.target.value)} disabled={fieldsDisabled} class="form-control" id="floatingPassword" placeholder="Password" />
                                <label className='' for="floatingPassword">Summary</label>
                            </div>

                            {/* for the otp */}
                            <div class="form-floating mb-4 d-none" id='otp'>
                                <input type='text' value={otp} onChange={(e) => setOtp(e.target.value)} disabled={!fieldsDisabled} class="form-control" id="otpBox" placeholder="Password" />
                                <label className='' id='valide' for="floatingPassword">OTP</label>
                                <label className='text-danger d-none' id='invalide' for="floatingPassword">Invalide OTP</label>
                                <label className='text-danger d-none' id='exp' for="floatingPassword">OTP Expired</label>

                            </div>

                            {/*otp section   */}
                            {/* <div className="input-group flex-nowrap d-none" id='otp'>
                                <span className="input-group-text" id="addon-wrapping">OTP</span>
                                <input id='otpBox' type="text" className="form-control" placeholder="OTP" aria-label="OTP" aria-describedby="addon-wrapping" value={otp} onChange={(e) => setOtp(e.target.value)} disabled={!fieldsDisabled} />
                               
                            </div> */}
                            {fieldsDisabled && (
                                <div className="text-center pt-1 mb-3 pb-1 mt-4">
                                    <button type="button" className="btn text-white mb-1 w-100 gradient-custom-2" onClick={handleResend} disabled={!timerCompleted && timer === 0}>
                                        {timerCompleted ? 'Resend OTP' : `Resend OTP (${timer}s)`}
                                    </button>
                                </div>
                            )}
                            {!fieldsDisabled && (
                                <div className="text-center pt-1 mb-3 pb-1 mt-4">
                                    <button type="submit" className="btn text-white mb-1 w-100 gradient-custom-2">Sign in</button>
                                </div>
                            )}
                        </form>
                        {/* i have account */}
                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">I have an account?</p>

                            <Link className='' to='/ninja/auth/login'>
                                <MDBBtn outline className='mx-2' color='danger'>
                                    Sign In
                                </MDBBtn>
                            </Link>

                        </div>

                    </div>
                </MDBCol>
                <MDBCol className="mb-5 col-sm-12 col-md-6 d-none d-sm-block">
                    <div className=" p-4 d-flex  justify-content-around align-items-center  h-100 rounded">
                        <div className='p-5 shadow rounded mb-4 '>
                            <img src="/image/icon/register.png" alt="" />
                        </div>


                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SignUp;
