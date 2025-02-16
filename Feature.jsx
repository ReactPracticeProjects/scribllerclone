import React from "react";
import { CiUnlock } from "react-icons/ci";

function Feature(){
  const feature =   [
        {
          "heading": "Open and Free",
          "description": "No login, lock-ins, or heavy deployment requirements."
        },
        {
          "heading": "Easy to Use",
          "description": "Runs without backend/node/npm/python. Can be loaded from a static file server."
        },
        {
          "heading": "Device Agnostic",
          "description": "Minimalistic UI and mobile responsive design, works on any modern browser."
        },
        {
          "heading": "Extensible",
          "description": "Can load third-party ES-6 libraries dynamically from CDNs."
        },
        {
          "heading": "JS+HTML Enabled",
          "description": "Supports JS, HTML, Markdown, and CSS for building dynamic notebooks."
        },
        {
          "heading": "Github Friendly",
          "description": "Can push to and pull from Github directly from the tool."
        }
      ]
      

    


    return(

        <div id="features" className="h-full pt-25 bg-[#F9F9F9]">
            <div className="flex flex-col items-center gap-4">
                <p className="text-[#FEDE02] uppercase font-semibold ">Experiment in JavaScript with Ease</p>
 
                <p className="text-4xl font-bold text-black">Features</p>

                <p className="text-[#555555]  w-[55%] text-center">Scribbler is a browser-based tool to experiment in JavaScript for developers, engineers, and scientists. It is an online notebook/editor/compiler for JavaScript</p>
            </div>

        <div className="flex gap-3 px-5 py-10 w-full flex-wrap justify-center ">


             {
                feature.map((feature) => {
                    return    (<div className="bg-white rounded-sm px-5 py-10 pr-20 basis-[30%] flex flex-col gap-5 hover:shadow">
                    <div className="bg-[#FEDE02] w-fit p-3 rounded-md text-3xl drop-shadow-md">
                        <CiUnlock />
                    </div>
                    <p className="font-semibold">{feature.heading}</p>
                    <p className="text-[#555555]">{feature.description}</p>
                </div>)
                })
             }

                
             

        </div>
        </div>
    )
}
export default Feature;