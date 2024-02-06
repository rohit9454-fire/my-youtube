import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex m-2 p-2 shadow-sm items-center w-full'>
            <img className='h-6 m-1' alt={'userIcon'} src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} />
            <span className='p-1 m-1 text-sm'>{name}</span>
            <span className='p-1 m-1 text-sm w-32'>{message}</span>
        </div>
    )
}

export default ChatMessage;