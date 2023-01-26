import React from "react"
import javascript from "../assets/javascript.png"
import reactimg from "../assets/react.png"
import java from "../assets/java.png"
import cplusspluss from "../assets/cplusspluss.png"
import git from "../assets/git.png"
import python from "../assets/python.jpeg"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import mysql from "../assets/mysql.png"

const Experience = () => {

  const skills = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-blue-600"
    },
    {
      id: 2,
      src: cplusspluss,
      title: "C++",
      style: "shadow-blue-600"
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-blue-600"
    },
    {
      id: 4,
      src: javascript,
      title: "Javascript",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-blue-600"
    },
    {
      id: 6,
      src: reactimg,
      title: "React",
      style: "shadow-blue-600"
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-blue-600"
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-blue-600"
    },
    {
      id: 9,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-600"
    },
  ]
  return(
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen
      md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
         h-full text-white"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500 p-2"
          >
            Experience
          </p>
          <p className="py-6">
            These are the tools I have Experience with
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center 
          py-8 px-12 sm:px-0"
        >

          {skills.map(({id, src, title, style}) => (
            <div
            key={id}
            // eslint-disable-next-line
            className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Experience; 