import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const videoList = await fetch(YOUTUBE_VIDEO_API);
        const JSON = await videoList.json();
        setVideos(JSON?.items)
    }

    return (
        <div className='flex flex-wrap'>
            {videos.map((item) =>
                <Link key={item?.id} to={'watch?v=' + item?.id}>
                    <VideoCards info={item} />
                </Link>
            )}
        </div>
    )
}

export default VideoContainer