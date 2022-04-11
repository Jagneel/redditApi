import React, { useEffect } from 'react'
import './App.css';
import Home from './features/Home'
import Header from './features/Header'
import Subreddit from './features/Subreddit'

function App() {

  useEffect(() => {
    fetch('https://www.reddit.com/r/nature.json').then(res => {
      if (res.status != 200) {
        console.log('Error');
        return;
      }
      res.json().then(data => {
        if (data != null) {
          console.log(data)
        }
      })
    })
  },[])



  return (
    <>
        <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddit />
      </aside>
    </>
  );
}

export default App;
