// import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4x1">
                We`re delighted to have you {" "}
                <span className="text-pink-500">Here! </span>
            </h1>
            <p className="mt-12">
            EasyLearn provides a wide range of free courses to help you master coding. Our courses cover popular programming languages like Python, Java, JavaScript, and more. Each lesson is designed to be simple and easy to follow, making it perfect for beginners. You'll get hands-on practice with real coding exercises to build your skills. Our step-by-step approach ensures that you understand each concept clearly. We also offer advanced topics for those looking to deepen their knowledge. Study at your own pace, with support from a community of learners. Gain practical coding experience through interactive challenges. Whether you're just starting out or advancing your skills, EasyLearn is here to help. Best of all, it's completely free to get started!
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link> 
        </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {
                 list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                 ))
              }
           </div>
      </div>    
    </>
    
  );
}

export default Course;
