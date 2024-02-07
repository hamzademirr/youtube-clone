import React from 'react'
import VideoSearchCard from "../../components/video-search-card";
import "./style.scss"
import { useSearchParams } from "react-router-dom";

function search() {
  let [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)
  document.title = searchParams.get('q');
  return (
    <div className='serach-container'>
      <VideoSearchCard />
    </div>
  )
}

export default search
