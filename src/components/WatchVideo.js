import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/redux/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [params] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (<div className='flex flex-col'>
        <div className='px-5 flex'>
            <div>
                <iframe
                    width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + params.get('v') + "?autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
            <div>
                <LiveChat />
            </div>
        </div >
        <div>
            <CommentContainer />
        </div>
    </div>
    )
}

export default WatchVideo