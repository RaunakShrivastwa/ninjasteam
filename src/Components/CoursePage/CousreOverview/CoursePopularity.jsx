import 'bootstrap-icons/font/bootstrap-icons.css';
import CourseCard from '../CourseCommon/CourseCard';

const CoursePopularity = ({heading,pop}) => {
    return (
        <div className='mb-5'>
             <h4 className='fw-bold mt-4 mb-3'>{heading}</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    pop.map((data,index) => (
                       index < 3 ? ( <CourseCard courseData={data} />) : null
                    ))
                }

            </div>
        </div>
    )
}

export default CoursePopularity