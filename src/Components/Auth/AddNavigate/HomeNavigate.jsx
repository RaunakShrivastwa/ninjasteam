import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function HomeNavigate() {
    const { email } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await axios.get(`http://localhost:4000/user/fetchUser/${email}`);
                Cookies.set('yourData', JSON.stringify(userData.data), { expires: 3 });
                setUser(userData.data);
            } catch (err) {
                console.log("There is Error ", err);
            }
        }
        loadUser();
        return () => {
        };
    }, [email]);
    console.log(user);
    return (
        <div className='d-flex justify-content-around align-items-center' style={{ backgroundColor: '#13503a', height: '100vh' }}>
            <div class="card" style={{width:'18rem'}}>
                <img src={user?.profile} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title text-center">Welcome, {user?.userName}</h5>
                     <Link to="/" class="btn btn-danger">Continue Learning</Link>
                </div>
            </div>
        </div>
    );
}

export default HomeNavigate;
