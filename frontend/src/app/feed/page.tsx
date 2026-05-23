"use client";
import Feedcard from "../components/Feedcard";
import axios from "axios";
import { useState, useEffect } from "react";
 function Feed(){
    const [feeddata, setFeeddata] = useState([]);
    async function fetchfeeddata(){
        const response = await axios.get("https://social-feed-app-wf5p.onrender.com/");
        setFeeddata(response.data.posts);
        console.log(response.data.posts)
    
    }
    useEffect(() => {fetchfeeddata()}, [])
    

    return(<div>
        {feeddata.map((feed)=>(
            <Feedcard key={feed._id} Image={feed.Image} Caption={feed.Caption} />
        ))}
    </div>)
}
export default Feed; 
