import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

var orderedCourse = [{
  courseName: "CC Fresher - Hack",
  courseLanguage: "English",
  batchStart: "1 Mar, 2023",
  paymentPaid: "28 Feb, 2023",
  amount: 999,
  status: "Confirmed"
}, {
  courseName: "CC Fresher - Hack",
  courseLanguage: "English",
  batchStart: "1 Mar, 2023",
  paymentPaid: "28 Feb, 2023",
  amount: 999,
  status: "Confirmed"
}]

const CourseAccountOrder = () => {
  return (
    <>
      {
        orderedCourse.map((course) => {
          return <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="d-flex bd-highlight">
              <div class="p-2">
                <div class="d-flex bd-highlight m-0">
                  <div class="pt-4">
                    <img src="/Image/OrderCourseIcon.png" alt="" />
                  </div>

                  <div class="p-2">
                    <p className="p-0 mb-2">
                      <span className="border border-0 py-1 px-2 rounded rounded-lg bg-success text-light mb-2">{course.courseName}</span><br />
                    </p>
                    <p className="p-0 m-0">
                      <span className="h5 fw-bolder">{course.courseName}</span><br />
                      <span className="h5 fw-light">English</span>
                    </p>
                    <div className=" d-none d-sm-flex mt-2 ">
                      <div className="d-block me-sm-4">
                        <p className="d-flex flex-column justify-content-end p-0 m-0">
                          <span class="fs-6">Batch Starts at</span>
                          <span className="h5 text-success fw-bold">{course.batchStart}</span>
                        </p>
                      </div>
                      <div className="d-block">
                        <p className="d-flex flex-column justify-content-end p-0 m-0">
                          <span class="fs-6">Payment Date</span>
                          <span className="h5 text-success fw-bold">{course.paymentPaid}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ms-auto p-2 bd-highlight">
                <p className="d-flex flex-column justify-content-end p-0 m-0">
                  <span>Order Status:</span>
                  <span className="h5 text-success fw-bold">{course.status}</span>
                </p>
              </div>
            </div>

            <div className=" d-flex d-sm-none ">
              <div className="d-block me-4">
                <p className="d-flex flex-column justify-content-end p-0 m-0">
                  <span class="fs-6">Batch Starts at</span>
                  <span className="h5 text-success fw-bold">{course.batchStart}</span>
                </p>
              </div>
              <div className="d-block">
                <p className="d-flex flex-column justify-content-end p-0 m-0">
                  <span class="fs-6">Payment Date</span>
                  <span className="h5 text-success fw-bold">{course.amount}</span>
                </p>
              </div>
            </div>

            <hr class="p-0 m-0" />

            <div class="row row-cols-1 row-cols-sm-2 g-1">
              <div class="col">
                <div class="card h-100 border border-0">
                  <div class="d-flex justify-content-center justify-content-md-start">
                    <button type="button" class="btn bg-transparent fw-bold">
                      <FontAwesomeIcon icon={faReceipt} style={{ color: 'orange' }} /> Download Invoice
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border border-0">
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <span class="py-md-2 pe-md-2 fw-bold">Order Amount : ₹ <span>999</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default CourseAccountOrder