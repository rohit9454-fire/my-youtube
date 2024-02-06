import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/redux/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResult } from '../utils/redux/searchSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((state) => state.search)


    useEffect(() => {
        //SEARCH API CALL
        //make API call after every key press
        //But if the differance between 2 APi call is < 200ms decline the API call.     - DEBOUNCING

        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        };
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const JSON = await data.json();
        dispatch(cacheResult({
            [searchQuery]: JSON[1]
        }))
        setSuggestions(JSON[1])
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const handleName = (item) => {
        setSearchQuery(item)
        setShowSuggestions(false)
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-xl'>
            <div className='flex col-span-2'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt={'menu'} src={'https://cdn.iconscout.com/icon/free/png-256/free-menu-1767818-1502398.png'} />
                <img className='h-8 mx-2' alt={'logo'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU'} />
            </div>
            <div className='col-span-8'>
                <div>
                    <input
                        // onBlur={() => setShowSuggestions(false)}
                        onFocus={() => setShowSuggestions(true)}
                        type="text" onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        className='px-4 py-2 w-1/2 border border-black rounded-l-full '
                        placeholder='Search'
                    />
                    <button className='border border-black px-4 py-2 rounded-r-full hover:bg-gray-100'>🔍</button>
                </div>

                {(showSuggestions && suggestions.length > 0) && <div className='absolute bg-white py-2 px-3 w-96 rounded-lg mt-2'>
                    <ul>
                        {suggestions.map((item) => <li key={item} onClick={() => handleName(item)} value={item} className='p-1 m-1  shadow-sm hover:bg-gray-100'> 🔍 {item}</li>)}
                    </ul>
                </div>}
            </div>


            <div className='col-span-2'>
                <img className='h-8' alt={'userIcon'} src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} />
            </div>
        </div>
    )
}

export default Header