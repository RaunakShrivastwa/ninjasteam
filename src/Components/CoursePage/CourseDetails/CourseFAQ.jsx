import React from 'react'

const CourseFAQ = () => {
    let accordionData = [
        {
            id: 'collapseOne',
            question: 'Is there any number to contact for queries?',
            answer: 'You may call us on +91-7982906637 in case of any query.',
        },
        {
            id: 'collapseTwo',
            question: 'How can I enroll for this program?',
            answer: 'You need to fill out an Application form post initial registration. After that, your application will be reviewed by our team to assess your eligibility for this program.',
        },
        {
            id: 'collapseThree',
            question: 'What if I am not selected?',
            answer: 'You will be able to re-apply to the program based on your eligibility criteria.',
        },
        {
            id: 'collapseFour',
            question: 'Once I am enrolled in the program, for how long will the course content be available for?',
            answer: 'The course content will be available for a period of 1 year from the date of purchase.',
        },
    ];

    return (
        <div className="row my-5">
            <div class="h2 mb-4 px-0 fw-bold"><span class='border border-3 border-success border-top-0 border-start-0 border-end-0'>FAQ</span><span>'s</span></div>
            <div className="accordion p-0" id="accordionExample">
                {accordionData.map((item, index) => (
                    <div className="accordion-item mb-3 border border-dark border-2 rounded rounded-lg" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`accordion-button fw-bold bg-transparent py-2 shadow-none ${index === 0 ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${item.id}`}
                                aria-expanded={index === 0 ? 'true' : 'false'}
                                aria-controls={item.id}
                            >
                                {item.question}
                            </button>
                        </h2>
                        <div
                            id={item.id}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseFAQ