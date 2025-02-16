import React from "react";

function Herosec(){
    return(
<div id = "home" className='bg-[#FEDE02] flex w-full gap-10 px-40 py-8 justify-between text-[#444444] items-center '>
    <div className="flex flex-col gap-4">
        <p className="text-xl md:text-5xl font-extrabold text-[#555555] ">Scribbler - JavaScript<br/> Notebook, Online Compiler <br/> & Editor</p>

        <p>Simple Interface for Experimenting in JavaScript. Developed for Open Source using Open Source.</p>

        <p className="font-semibold ">Learning • AI/ML • Scientific computation • Testing</p>

        <p>Happy experimenting!</p>
        
        <button className="bg-white px-6 py-3 font-semibold rounded-sm w-fit">Start Now</button>
        <div className="flex list-none gap-5">
            <li>Github</li>
            <li>Discord</li>
        </div>
    </div>
    <div className="hidden md:flex">
        <img src="phone.png" className="w-75 "></img>
    </div>


</div>


    )
}

export default Herosec;