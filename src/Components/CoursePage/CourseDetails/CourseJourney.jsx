import React from 'react';

const CourseJourney = () => {
    var data = [
        {
            phaseNo: 1,
            phaseTitle: 'Application Process & Onboarding',
            steps: [
                {
                    icon: '/Image/phaseIcon/step.png',
                    setpNo: 1,
                    stepTitle: 'Application Submission'
                },
                {
                    icon: '/Image/phaseIcon/step12.png',
                    setpNo: 2,
                    stepTitle: 'Selection & Enrollment'
                }
            ]
        },
        {
            phaseNo: 2,
            phaseTitle: 'Learning Journey I',
            steps: [
                {
                    icon: '/Image/phaseIcon/step21.png',
                    setpNo: 1,
                    stepTitle: 'Programming Languages'
                },
                {
                    icon: '/Image/phaseIcon/step22.png',
                    setpNo: 2,
                    stepTitle: 'DSA (Basic to Advanced)'
                },
                {
                    icon: '/Image/phaseIcon/Menu_Alt.png',
                    setpNo: 3,
                    stepTitle: 'Mock Tests'
                }
            ]
        },
        {
            phaseNo: 3,
            phaseTitle: 'Live Mentorship',
            steps: [
                {
                    icon: '/Image/phaseIcon/step12.png',
                    setpNo: 1,
                    stepTitle: 'Soft Skill Sessions'
                },
                {
                    icon: '/Image/phaseIcon/step12.png',
                    setpNo: 2,
                    stepTitle: 'Masterclass by Industry Experts'
                },
                {
                    icon: '/Image/phaseIcon/step12.png',
                    setpNo: 3,
                    stepTitle: 'Guidance Based Industry Trends'
                }
            ]
        },
        {
            phaseNo: 4,
            phaseTitle: 'Learning Journey II',
            steps: [
                {
                    icon: '/Image/phaseIcon/step31.png',
                    setpNo: 1,
                    stepTitle: 'Choose Your Technology'
                },
                {
                    icon: '/Image/phaseIcon/step32.png',
                    setpNo: 2,
                    stepTitle: 'Development & Training'
                },
                {
                    icon: '/Image/phaseIcon/step33.png',
                    setpNo: 3,
                    stepTitle: 'Live Project(s) Building'
                }
            ]
        },
        {
            phaseNo: 5,
            phaseTitle: 'Become Job Ready',
            steps: [
                {
                    icon: '/Image/phaseIcon/41.png',
                    setpNo: 1,
                    stepTitle: 'Resume Assistance'
                },
                {
                    icon: '/Image/phaseIcon/42.png',
                    setpNo: 2,
                    stepTitle: 'Mock Interview'
                }
            ]
        }
    ];

    return (
        <div className="py-5">
            <div>
                <span className="h2 border border-3 border-top-0 border-start-0 border-end-0 border-success">Course Journey</span>
            </div>

            <div className="journey mt-3">
                {data.map(phase => (
                    <div className="row border border-2 border-dark mt-5 rounded rounded-lg" style={{ position: 'relative' }} key={phase.phaseNo}>
                        <label className="d-inline" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="fs-5 px-2" style={{background: '#fff'}}>Phase <span className="text-primary">0{phase.phaseNo}</span></span>
                        </label>
                        <div className="row my-4 mx-2 fs-5 fw-bolder">
                            <div>
                                {phase.phaseTitle}
                            </div>

                            <div className="d-flex flex-row bd-highlight my-2">
                                {phase.steps.map(step => (
                                    <div className="card me-2 p-2 border border-0" key={step.setpNo}>
                                        <div className="card-body d-flex align-items-center p-0 m-0">
                                            <img src={step.icon} alt="step.png" className="bg-success p-1 me-2 rounded rounded-circle" />
                                            <div className="text">
                                                <div className="text-muted fs-6">Step <span>0{step.setpNo}</span></div>
                                                <div className="fs-6">{step.stepTitle}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseJourney;
