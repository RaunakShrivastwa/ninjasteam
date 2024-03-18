import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import UserProject from './Project/UserProject';
import WorkExperience from './Experience/WorkExperience';
import UserEducation from './Education/UserEducation';
import UserCertificate from './UserCertificate';
import UserSkillAcquire from './UserSkillAcquire';
import UserProfileLink from './Profile/UserProfileLink';
import UserResume from './Resume/UserResume';

const UserAbout = () => {
    return (
        <div>
            <div class="row">
                <div class="col-md-3">
                    <div class="card border border-dark border-2 rounded rounded-lg py-md-5 py-3 d-flex flex-column justify-content-center align-items-center">
                        <div class="card-body my-0 py-0">
                            <div class="row py-0 my-0">
                                <div class="col-5 col-md-12">
                                    <div class="card h-100 border border-0 mb-md-3">
                                        <img src="/Image/AbhijeetImage.jpg" class="w-100 rounded rounded-circle px-lg-5" alt="Profile Image" />
                                    </div>
                                </div>
                                <div class="col-7 col-md-12">
                                    <div class="card h-100 border border-0">
                                        <div class="border-0 text-center d-flex flex-column align-items-start align-items-md-center justify-content-center h-100">
                                            <span class="h4">Abhijeet Kumar</span>
                                            <span class="h6">Full Stack Developer</span>
                                            <span>Patna, Bihar</span>
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
                    <UserResume  />
                </div>
            </div>
        </div>
    )
}

export default UserAbout