import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSearchTerm} from '../store/redditSlice'
import { HiOutlineSearch } from 'react-icons/hi';
import { ImReddit } from 'react-icons/im'
import './Header.css'

export default function Header() {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.searchTerm)
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm);
      }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal))
    }
    
    return (
        <header>
            <div className = 'logo'>
                <ImReddit className='logo-icon'/>
                <p>Reddit<span>Nature</span></p>
            </div>
            <form className ='search' onSubmit={onSearchTermSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label='Search posts'
                />
                <button type='submit' onClick={onSearchTermSubmit} aria-label='Search'>
                    <HiOutlineSearch/>
                </button>
            </form>
        </header>
    )
}
