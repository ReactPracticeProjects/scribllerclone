import React from "react";
import { CiCircleCheck } from "react-icons/ci";



const notebooks = [
    {
      title: "Learn",
      description: "Learn JavaScript coding easy to use interface.",
      keyPoints: [
        "Use HTML and JS.",
        "Interact with UI elements.",
        "Plot charts.",
        "Write functions, classes and other reusable code."
      ]
    },
    {
      title: "Scientific Computation",
      description: "Advanced computation including simulations, solving equations.",
      keyPoints: [
        "Use math and scientific libraries.",
        "Do complex simulations.",
        "Visualize output.",
        "Dynamically experiment with parameters and code."
      ]
    },
    {
      title: "AI and ML",
      description: "Use ML libraries like tensorflow.js and brain.js for training and inference.",
      keyPoints: [
        "Train ML models.",
        "Do inference of pre-trained models.",
        "Use Plotly etc for visualization.",
        "Build dynamic AI use-cases."
      ]
    },
    {
      title: "Testing",
      description: "Test JavaScript code, libraries, and APIs with a simple UI.",
      keyPoints: [
        "Test snippets of code.",
        "Test APIs dynamically.",
        "Integrate UI and JS testing.",
        "Share test cases and results."
      ]
    }
  ];


function Usecases(){




    return(
        <div id = "usecases" className="bg-[#F9F9F9] py-20 w-full ">


            <div className="flex flex-col items-center pt-5 pb-24">
                <p className="text-primary uppercase font-semibold">one tool, several uses</p>

                <p className="text-4xl font-extrabold mt-1">Use Cases</p>

                <p className="text-secondary pt-6 w-[40%] text-center">Whether you're a beginner, an advanced developer, an AI/ML engineer, or a scientist, Scribbler has you covered.</p>

                <p className="text-secondary mt-1">Some sample notebooks are below.</p>
            </div>



            <div className="flex gap-7 justify-center px-24">


            {
                notebooks.map((notebook)=>{
                    return(
                        <div className="bg-white px-5 py-5 rounded-sm shadow drop-shadow-md w-[23%]">
        
                            <div className="flex flex-col gap-5 border-b-2 border-bg  pb-3" >
                                <p className="font-bold">{notebook.title}</p>
        
                                <p className="text-secondary">{notebook.description}</p>    
        
                                <button className="bg-buttonbg text-white px-10 py-3 rounded-sm font-semibold hover:bg-primary hover:text-secondary">Sample Notebook</button>
                            </div> 
        
                            <div className="flex flex-col gap-3 ">
                                <p className="pt-8">Key points</p>
        
                            <div className=" text-secondary flex flex-col gap-4">
                           
                           {notebook.keyPoints.map((item)=>{
                            return (
                                <div className="flex items-center">
                                <CiCircleCheck className="text-primary" />
                                <p>{item}</p>
                            </div>
                            )
                           })}
        
        
                            </div>
        
        
        
                            </div>
        
                        </div>
                   )
                })
            }
            </div>


            <div className="flex justify-center pt-10">
                <button className="bg-primary px-4 py-2 text-white hover:bg-buttonbg hover:text-primary rounded-sm font-semibold">
                    Explore More Use-Cases
                </button>
            </div>

        </div>
    );
}
export default Usecases;