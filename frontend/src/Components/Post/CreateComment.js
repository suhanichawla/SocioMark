import React,{useState,useContext} from "react";
import {navigate} from "hookrouter"
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from 'react-toastify';

export default function CreateComment({post}) {
    const [comment, setComment] = useState("");
    const {  value2 } = useContext(AuthContext);
    const [access] = value2;
    const handleChange = (e) => {
        setComment(e.target.value);
      };

    const FormData ={
        post_id : post.post_id, 
        payload : comment
    }
    const post_id = post.post_id 

    const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/post/comment", FormData, {
        headers: {
            Authorization: "Bearer " + access,
        },
        })
        .then((res) => {
            toast.success(JSON.stringify(res.data.message));
            window.location.reload();
        })
        .catch((err) => {});
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
         <div className="flex border mt-2 border-gray-300 rounded">
            <input type="text" placeholder="Enter the comment" name="comment" value= {comment} onChange={handleChange} 
                className="appearance-none block w-full bg-white text-gray-700 font-normal  my-2 px-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" ></input>
            <button className="bg-blue-900 text-white font-semibold px-2 hover:bg-blue-700">Submit</button>
         </div>
        </form>
        </div>
    )
}
