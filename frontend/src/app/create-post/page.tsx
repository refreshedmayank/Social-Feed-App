"use client";
import axios from "axios";
function CreatePost(){
   async function handlesubmit(e: any){
    e.preventDefault();
    const formdata = new FormData(e.target);
    const Image = formdata.get("Image");
    const Caption = formdata.get("Caption")
    console.log(Image)
    const response = await axios.post("http://localhost:3001/create-post", formdata, {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    console.log(response)
    /// new skill issue arised need to learn how to send form data using axios
   }


return(<div>
        <form onSubmit={handlesubmit} className="border flex flex-col gap-6 p-12 justify-center h-screen">
           <input type="file" name="Image" className="border text-center p-2 rounded-md" />
            <input type="text" name="Caption" id="" placeholder="enter caption" className="border rounded-md text-center p-2"/>
            <button  className=" transition hover:bg-blue-500 border rounded-md text-center p-2 px-20">Post</button>
        </form>
    </div>)
}
export default CreatePost;
