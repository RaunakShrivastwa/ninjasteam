import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { urlFunction } from '../../../../App';

const ViewTopics = () => {
  const { id } = useParams(); // Extracting the id parameter from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extracting query parameters from the URL
  const courseName = searchParams.get('course');
  const moduleName = searchParams.get('moduleName');
  const description = searchParams.get('description');

  // State variables to hold topic details
  const [chapterName, setChapterName] = useState('');
  const [topicDesc, setTopicDesc] = useState('');
  const [topicName, setTopicName] = useState('');
  const [topicVideoUrl, setTopicVideoUrl] = useState('');

  // useEffect to load topic details on component mount
  useEffect(() => {
    loadTopic();
  }, []);

  // Function to fetch topic details using axios
  const loadTopic = async () => {
    try {
      const topicData = await axios.get(urlFunction() + `subtopic/getSingleById/${id}`);
      console.log("topics data : - ", topicData?.data);

      // Setting state with retrieved topic details
      setChapterName(topicData?.data?.Chapter);
      setTopicDesc(topicData?.data?.desc);
      setTopicName(topicData?.data?.TopicName);
      setTopicVideoUrl(topicData?.data?.video_URL);
    } catch (error) {
      console.log("Error loading topic data by id", error);
    }
  }

  return (
    <div className="mt-4 mx-0 mx-md-5">
      <div className="d-flex align-items-end">
        <span className="fs-5 fw-bold">
          Course / 
          <span className="text-info"> Module / </span>
          <span className="text-warning"> Chapter / </span>
          <span className="text-danger"> View Topics</span>
        </span>
      </div>

      <div className="card mt-3 border border-2 border-dark">
        <div className="card-body my-0 py-2">
          <div className="row">
            <div className="col-lg my-2">
              {/* Display Course Name */}
              <label htmlFor="courseName" className="ms-2 my-0 py-0 fw-bold text-muted">Course Name</label>
              <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="courseName" placeholder="Module Name" value={courseName} readOnly />
            </div>

            <div className="col-lg my-2">
              {/* Display Module Name */}
              <label htmlFor="moduleName" className="ms-2 my-0 py-0 fw-bold text-muted">Module Name</label>
              <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="moduleName" placeholder="Module Name" value={moduleName} readOnly />
            </div>
          </div>

          <div className="row">
            <div className="col-lg my-2">
              {/* Display Chapter Name */}
              <label htmlFor="chapterName" className="ms-2 my-0 py-0 fw-bold text-muted">Chapter Name</label>
              <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="chapterName" placeholder="Chapter Name" value={chapterName} readOnly />
            </div>

            <div className="col-lg my-2">
              {/* Display Chapter Description */}
              <label htmlFor="chapterDescription" className="ms-2 my-0 py-0 fw-bold text-muted">Chapter Description</label>
              <textarea className="form-control border border-2 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 shadow shadow-none m-0" id="chapterDescription" aria-label="Chapter Description" style={{ height: '35px' }} value={description} readOnly></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-lg my-2">
              {/* Display Topic Name */}
              <label htmlFor="TopicName" className="ms-2 my-0 py-0 fw-bold text-muted">Topic Name</label>
              <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="TopicName" placeholder="Topic Name" value={topicName} readOnly />
            </div>

            <div className="col-lg my-2">
              {/* Display Topic Video URL */}
              <label htmlFor="TopicVideoUrl" className="ms-2 my-0 py-0 fw-bold text-muted">Topic Video URL</label>
              <input type="text" className="form-control shadow-none border border-2 border-dark border-top-0 border-end-0 border-start-0 rounded rounded-0" id="TopicVideoUrl" placeholder="Video URL" value={topicVideoUrl} readOnly />
            </div>
          </div>

          <div className="row">
            <div className="col-lg my-2">
              {/* Display Topic Description */}
              <label htmlFor="topicDescription" className="ms-2 fw-bold text-muted">Topic Description</label>
              <textarea className="form-control border border-2 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 shadow shadow-none" id="topicDescription" aria-label="Topic Description" style={{ height: '40px' }} value={topicDesc} readOnly></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTopics;