import React from "react";
import { useState } from "react";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pada tha to remove karna hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      // pehle se like nahi hai ye course
      //insert karna h ye  course liked course me
      if (likedCourses.length) {
        setLikedCourses(course.id);
      } else {
        //non empty pehle
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("LIked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-slate-400 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url}></img>
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center ">
          <button className="text-red-700 font-bol" onClick={clickHandler}>
            icon
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
//likeed liked .icludes(couse.id))?(icon bold):(icon)
