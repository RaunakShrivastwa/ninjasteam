import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { urlFunction } from '../../../../App';

const AddTopics = () => {
  const navigate = useNavigate();

  // Extracting parameters from the URL
  const { chapterName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseName = searchParams.get('course');
  const moduleName = searchParams.get('moduleName');

  // State variables to hold topic details
  const [topicDesc, setTopicDesc] = useState('');
  const [topicName, setTopicName] = useState('');
  const [topicVideoUrl, setTopicVideoUrl] = useState('');

  // Function to reset topic input fields
  const resetFunction = () => {
    setTopicDesc('');
    setTopicName('');
    setTopicVideoUrl('');
  }

  // Function to handle form submission
  const handleAboutSubmit = async (e) => {
    e.preventDefault();

    // Prepare body data for creating a new topic
    const body = {
      TopicName: topicName,
      video_URL: topicVideoUrl,
      desc: topicDesc,
      Chapter: chapterName
    }

    console.log("body data ",body);

    try {
      // Send POST request to create a new topic
      await axios.post(urlFunction() + `subtopic/create`, body);
      resetFunction();
      navigate(-1); // Navigate back to previous page
    } catch (error) {
      console.log(`Error during topic creation: ${error}`);
    }
  }

  return (
    <div className="mt-4 mx-0 mx-md-5">
      <div className="d-flex align-items-end">
        <span className="fs-5 fw-bold">
          Course / 
          <span className="text-info"> Module / </span>
          <span className="text-warning"> Chapter / </span>
          <span className="text-danger"> Add Topics</span>
        </span>
      </div>

      {/* Form for adding new topics */}
      <form onSubmit={handleAboutSubmit}>
        <div className="card mt-3 border border-2 border-dark">
          <div className="card-body my-0 py-2">
            <div className="row">
              <div className="col-lg my-2">
                {/* Display Course Name */}
                <label htmlFor="courseName" className="ms-2 my-0 py-0 fw-bold text-muted">Course Name</label>
                <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Enter Course Name" value={courseName} readOnly />
              </div>

              <div className="col-lg my-2">
                {/* Display Module Name */}
                <label htmlFor="moduleName" className="ms-2 my-0 py-0 fw-bold text-muted">Module Name</label>
                <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="moduleName" placeholder="Enter Module Name" value={moduleName} readOnly />
              </div>
            </div>

            <div className="row">
              <div className="col-lg my-2">
                {/* Display Chapter Name */}
                <label htmlFor="chapterName" className="ms-2 my-0 py-0 fw-bold text-muted">Chapter Name</label>
                <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="chapterName" placeholder="Enter Chapter Name" value={chapterName} readOnly />
              </div>

              <div className="col-lg my-2">
                {/* Input field for entering Topic Name */}
                <label htmlFor="TopicName" className="ms-2 my-0 py-0 fw-bold text-muted">Topic Name</label>
                <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="TopicName" placeholder="Enter Topic Name" value={topicName} onChange={(e) => { setTopicName(e.target.value) }} required />
              </div>
            </div>

            <div className="row">
              <div className="col-lg my-2">
                {/* Input field for entering Topic Video URL */}
                <label htmlFor="TopicVideoUrl" className="ms-2 my-0 py-0 fw-bold text-muted">Topic Video URL</label>
                <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="TopicVideoUrl" placeholder="Enter Topic Video URL" value={topicVideoUrl} onChange={(e) => { setTopicVideoUrl(e.target.value) }}  />
              </div>

              <div className="col-lg my-2">
                {/* Textarea for entering Topic Description */}
                <label htmlFor="topicDescription" className="ms-2 fw-bold text-muted">Topic Description</label>
                <textarea className="form-control border border-2 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 shadow shadow-none" id="topicDescription" aria-label="Topic Description" style={{ height: '40px' }} placeholder='Enter Topic Description' value={topicDesc} onChange={(e) => { setTopicDesc(e.target.value) }} required />
              </div>
            </div>

            {/* Form control buttons */}
            <div className="d-flex justify-content-end my-1">
              <button className="btn btn-danger m-1 fw-bold d-flex align-items-center" type="reset" onClick={resetFunction}>
                <i className="lni lni-cross-circle me-1"></i> Reset
              </button>
              <button className="btn btn-success m-1 fw-bold d-flex align-items-center" type="submit">
                <i className="lni lni-save me-1"></i> Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTopics;