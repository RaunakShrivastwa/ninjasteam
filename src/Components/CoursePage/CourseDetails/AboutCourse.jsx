import React from 'react'

const AboutCourse = () => {
    return (
        <>
            <div class="row my-5">
                <div class="col-sm-8">
                    <div class="card h-100 border border-0">
                        <div class="card-body border border-0">
                            <div class="card-title mb-4">
                                <span class="border border-3 border-success border-top-0 border-start-0 border-end-0 h2 fw-bold">About the Course</span>
                            </div>

                            <p class="card-text fw-bolder">Embark on an extraordinary coding odyssey with our groundbreaking course, "DSA to Development - Complete Coding Guide"! 🌟 Discover the transformative power of mastering Data Structures and Algorithms (DSA) as you venture towards becoming a Proficient Developer or Data Scientist. 💻</p>

                            <ul class="fw-bold mt-4">
                                <li class="my-2">Comprehensive DSA Mastery: Learn essential data structures, algorithms, and advanced techniques for optimized coding.</li>
                                <li class="my-2">Programming Proficiency: Develop a strong foundation in programming languages to tackle coding challenges with confidence.</li>
                                <li class="my-2">Real-World Application: Engage in hands-on projects and build remarkable applications to apply your skills.</li>
                                <li class="my-2">Versatility in Tech Stacks: Choose full-stack development, data science or specialize in specific technology stacks like MERN, Java, Python or Machine Learning.</li>
                                <li class="my-2">Expert Mentoring: Gain valuable insights and guidance from industry professionals and mentors.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card h-100 border border-0">
                        <div class="card-body d-flex align-items-center border border-0">
                            <img src="/Image/aboutCourse.png" alt="about course" class="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCourse