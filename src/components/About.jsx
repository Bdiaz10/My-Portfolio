import React from "react"

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800
      to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inilne border-b-4 
            border-gray-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a highly motivated and enthusiastic full stack software
          engineer with a strong foundation in computer science. Through 
          extensive course work and a previous internship, I have gained 
          a strong understanding of the software development process, from initial 
          design to deployment and maintenance. My knowledge and experience 
          across the full stack allows me to drive progress and deliver 
          complete solutions.

        </p>

        <br/>

        <p className="text-xl">
          As a team player, I thrive in environments where I can collaborate 
          with experienced engineers and contribute to successful software 
          solutions. My passion for software and ability to learn new 
          technologies fast make me a valuable asset to any software development
          team. I am eager to deliver quality software solutions in a challenging 
          environment, where I can be pushed as a young engineer.

        </p>
      </div>
    </div>
  )
}

export default About;