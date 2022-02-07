import React from 'react';
import './profile.css'
import profilePic from '../../assets/profilePic.png'

const Profile = () => {
    return (
        <div className='container'>
            <div className='text'>
                <p3>Hello, my name is</p3>
                <p>Tran Tri Thuc</p>
                <p2>And my major is </p2>
                <p2 className='major'>Software Engineering</p2>
                <p2><br />At University of Information Technology</p2>

                <div className='get_resume'>
                    <button >Get Resume</button>
                </div>

            </div>

            <img className='profileImg' src={profilePic} alt='profilePic' />
        </div>
    )
}

export default Profile;