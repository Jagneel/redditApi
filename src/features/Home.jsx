import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
  } from '../store/redditSlice';
  import './Home.css'

export default function Home() {

    const reddit = useSelector((state) => state.reddit)
    const {isLoading, error, selectedSubreddit} = reddit
    const posts = useSelector(selectFilteredPosts)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit])

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink))
    }
    return getComments;
    }

    return (
        <>
            {posts.map((post, index) => (
            <Post
            key = {post.id}
            post = {post}
            onToggleComments={onToggleComments(index)} />
        ))}
        
        </>
    )
}
