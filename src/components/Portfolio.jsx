import React from "react"


const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      src: "",
      codehref: "https://github.com/Bdiaz10/My-Portfolio",
      demohref: "",
      desc: "Porfolio built with React and Tailwind",
      title: "Portfolio",
      tools: ["React", "Tailwind"],
      
    },
    {
      id: 2,
      src: "",
      codehref: "https://github.com/Bdiaz10/REST-API",
      demohref: "",
      desc: "REST API built with Express and MongoDB",
      title: "REST API",
      tools: ["Express", "MongoDB"],
    },
    {
      id: 3,
      src: "",
      codehref: "https://github.com/Bdiaz10/Hackathon-Financial-Portal",
      demohref: "https://mecsimcalc.com/app/9137239/financial_portal",
      desc: "1st place hackathon web app build with Python ",
      title: "Financial Portal",
      tools: ["Python", "MatPlotLib"],
    },
    {
      id: 4,
      src: "",
      codehref: "https://github.com/Bdiaz10/Hackathon-Financial-Portal",
      demohref: "",
      desc: "Object oriented C++ program processes transactions between books and patrons.",
      title: "Library Management System",
      tools: ["C++"],
    }
  ]


  return(
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white 
      md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
         h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my Work
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({id, codehref, demohref, desc, title, tools}) => (
            <div key ={id} className="shadow-md shadow-blue-600 rounded-lg
              duration:200 hover:scale-105">          
              
              <p className="flex items-center justify-center m-2 text-blue-400">{title}</p>
              <p className="m-2 text-sm px-2">{desc}</p>
              
              <ul className="list-disc list-inside text-xs px-6">
                {tools.map((tool) => (
                  <li>{tool} </li>
                ))}
              </ul>

              <div className="flex items-center justify-center">
    
                <a
                  href={demohref}
                >
                  <button
                    className="w-1/2 px-6 m-2 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href={codehref}
                >
                  <button
                    className="w-1/2 px-6 m-2 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </a>
              </div>

            </div>
          ))}
          
        </div>


      </div>
    </div>
  )
}

export default Portfolio;