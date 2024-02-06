import React from 'react'

const commenstData = [
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: [
                            {
                                name: 'Ramesh',
                                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                reply: [
                                    {
                                        name: 'Sugam Singh',
                                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                        reply: [
                                            {
                                                name: 'New User Singh',
                                                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                                reply: [
                                                    {
                                                        name: 'Manmohan Singh',
                                                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                                        reply: [
                                                            {
                                                                name: 'Aurn Kumar',
                                                                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                                                reply: [
                                                                    {
                                                                        name: 'Naveen Singh',
                                                                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                                                        reply: [
                                                                            {
                                                                                name: 'Ram Raja Singh',
                                                                                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                                                                                reply: []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Rohit Singh',
        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
        reply: [
            {
                name: 'Mohit Singh',
                comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                reply: [
                    {
                        name: 'Rohan Singh',
                        comment: 'Qwerty Uiopa Fdsgh Jkclz Xcvbnm',
                        reply: []
                    }
                ]
            }
        ]
    }
]

const Comment = ({ data }) => {
    const { name, comment, reply } = data
    return (<div className='flex shadow-sm bg-gray-50 p-2 rounded-md my-2'>
        <img className='w-10 h-10' alt={'user'} src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} />
        <div className='px-3'>
            <p className='font-bold text-sm'>{name}</p>
            <p className='text-sm'>{comment}</p>
        </div>
    </div>)
}

const CommentList = ({ comments }) => {
    return comments.map((item, index) => <div key={index}>
        <Comment data={item} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList comments={item.reply} />
        </div>
    </div>
    )
}

const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold mb-3'>Comments:</h1>
            <CommentList comments={commenstData} />
        </div>
    )
}

export default CommentContainer