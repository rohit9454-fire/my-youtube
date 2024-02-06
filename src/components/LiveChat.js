import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/redux/chatSlice';
import { generateRandomName, generateRandomString } from '../utils/constant';

const LiveChat = () => {
    const dispatch = useDispatch()
    const [liveMessage, setLiveMessage] = useState("")
    const chatMessages = useSelector((store) => store.chat.mesaage)

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomString(10)
            }))
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    return (<div>
        <div className='ml-2 p-2 border border-black h-[600px] w-64 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
            {chatMessages.map((item, index) => <ChatMessage key={index} name={item.name} message={item.message} />)}
        </div>
        <form className='flex border border-black w-64 ml-2 mt-2 justify-between rounded-lg' onSubmit={(e) => {
            e.preventDefault()
            dispatch(addMessage({
                name: 'Rohit',
                message: liveMessage
            }))
            setLiveMessage("")
        }}>
            <input onChange={(e) => setLiveMessage(e.target.value)} className='w-48 border border-black p-2 m-1 rounded-lg text-sm' type='text' placeholder='Comment...' value={liveMessage} />
            <button className='px-2 bg-green-400 m-1 rounded-lg text-sm'>Send</button>
        </form>
    </div >
    )
}

export default LiveChat