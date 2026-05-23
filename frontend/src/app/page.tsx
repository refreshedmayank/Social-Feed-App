"use client";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FeedCard from "./FeedCard";

function Home(){
  const [posts, setPosts] = useState([])

  async function fetchPosts(){
    const response = await axios.get("https://social-feed-app-wf5p.onrender.com/")
    console.log(response.data)
    setPosts(response.data)
  }

  useEffect(() => {fetchPosts()}, [])

  return(
    <div>
      

      {posts.map((post)=>(
        <FeedCard key={post._id} Image={post.Image} Caption={post.Caption} />
      ))}
    </div>
  )
}

export default Home;