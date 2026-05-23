"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedCard from "./FeedCard";

interface Post {
  _id: string;
  Image: string;
  Caption: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const response = await axios.get("https://social-feed-app-wf5p.onrender.com/feed");
    console.log(response.data);
    setPosts(response.data.posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <FeedCard key={post._id} Image={post.Image} Caption={post.Caption} />
      ))}
    </div>
  );
}

export default Home;