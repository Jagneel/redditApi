import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import { fetchSubreddits, selectSubreddits } from '../store/subredditSlice'
import './Subreddit.css'
import { setSelectedSubreddit, selectSelectedSubreddit } from '../store/redditSlice'

export default function Subreddit() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(setSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]) 


    return (
        <Card className = 'subreddit-container'>
            <h2>Subreddits</h2>
            <ul className = 'subreddits-list'>
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id}
                    className={`${selectedSubreddit === subreddit.url && 'selected-subreddit'}`}>
                        <button
                        type = 'button'
                        onClick={() => 
                            dispatch(setSelectedSubreddit(subreddit.url))
                        }>
                        <img
                            src = {
                                subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                            }
                            alt={`${subreddit.display_name}`}
                            className = 'subreddit-icon'
                            style={{ border: `1px solid ${subreddit.primary_color}`}}
                        />
                        <span className = 'subreddit-name'>
                        {subreddit.display_name}
                        </span>
                        </button>
                    </li>
                ))}
            </ul>
        </Card>

    )
}
