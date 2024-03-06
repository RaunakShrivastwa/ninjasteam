// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CourseCard from './CourseCard';

const CoursePopularity = ({ heading }) => {
    var cardData = [{
        imageLink: "https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/DSA-to-Dev_1705410853.webp",
        liked: '195k +',
        rating: '5.0',
        courseNaration: "DSA to Development: A Complete Guide.",
        originalPrice: 40000,
        discountedPrice: 20000
    }, {
        imageLink: "https://media.geeksforgeeks.org/img-practice/prod/courses/570/Web/Content/Cloud%20Practitioner%20aws-64_1704356096.webp",
        liked: '195k +',
        rating: '3.0',
        courseNaration: "DSA to Development: A Complete Guide.",
        originalPrice: 60000,
        discountedPrice: 20000
    }, {
        imageLink: "https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/Java-Programming_1705409391.webp",
        liked: '195k +',
        rating: '2.0',
        courseNaration: "DSA to Development: A Complete Guide.",
        originalPrice: 50000,
        discountedPrice: 20000
    }]

    return (
        <>
            <h3 class='fw-bold mt-4 mb-3'>{heading}</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                {
                    cardData.map((data) => (
                        <CourseCard courseData={data} />
                    ))
                }

            </div>
        </>
    )
}

export default CoursePopularity