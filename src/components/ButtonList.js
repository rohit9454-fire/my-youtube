import React from 'react'

const ButtonList = () => {
    const buttonName = [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'Music'
        },
        {
            id: 3,
            name: 'Kapil Sharma'
        }, {
            id: 4,
            name: 'Live'
        }, {
            id: 5,
            name: 'Game Shows'
        }, {
            id: 6,
            name: 'Cricket'
        }, {
            id: 7,
            name: 'Gaming'
        }, {
            id: 8,
            name: 'Movie musicals'
        }, {
            id: 9,
            name: 'Bollywood Music'
        }, {
            id: 10,
            name: 'Mantras'
        },
        {
            id: 11,
            name: 'News'
        },
        {
            id: 12,
            name: 'Love Songs'
        }
    ]
    return (
        <div className='flex'>
            {buttonName.map((item) => <button key={item.id} className='py-2 px-4 m-1 text-sm rounded-2xl bg-gray-200'>{item.name}</button>)}
        </div>
    )
}

export default ButtonList