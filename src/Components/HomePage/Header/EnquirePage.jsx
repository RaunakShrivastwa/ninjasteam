import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function EnquirePage() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();

    const handleData = async (e)=>{
        e.preventDefault();
        const body = {
            name:name,
            email:email,
            phone:phone
        }
        try{
                const enquire = await axios.post('http://localhost:4000/student/enquire/add',body)
                setName('');
                setEmail('');
                setPhone('');
                document.getElementById('en1').style.border = '5px solid green';
                setTimeout(()=>{
                    document.getElementById('en1').style.border = '0';
                },1000)

                
        }catch(err){
            if(err.response.status === 401){
                console.log("here");
               document.getElementById('mssg').classList.remove('d-none')
               setTimeout(()=>{
                setName('');
                setEmail('');
                setPhone('');
                document.getElementById('mssg').classList.add('d-none');
            },1000)
            }
        }
    }
    return (
        <div className='' id='en2'>
            <h4>Register For Enquiry !!</h4>
            <span className='text-primary mb-5'>Already have an Account? Click Here</span>
            <form className='mt-4' onSubmit={(e)=>handleData(e)}>

                {/* for name */}
                <div class="mb-4 mt-3">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Name'  class="py-2 border border-none form-control shadow-none" id="nameExample" aria-describedby="emailHelp" />
                </div>
                <div class="mb-4">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' class="py-2 border border-none form-control shadow-none" id="exampleInputPassword1" />
                </div>
                <div class="mb-5">
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required placeholder='Phone' class="py-2 border border-none form-control shadow-none" id="exampleInputPassword1" />
                    <span id='mssg' className='text-danger d-none'>Your Enquire already Added!!!</span>
                </div>
                <button type="submit" style={{background:'#7fdf98'}} class="btn  mb-5 border border-none form-control shadow-none py-3">Submit</button>
                <div class="">
                    <small className=''>By clicking Register, I have read and agree to Ninjas's <Link to='/'>Terms</Link> and <Link to='/'>Privacy Policy</Link></small>
                </div>
            </form>
        </div>
    )
}

export default EnquirePage