import React from 'react'

function Overview() {
  return (
    <div id="docs" className='h-[110vh] bg-bg text-secondary p-20'>
        <div className='border-b border-b-secondary pb-3'>
            <p className='font-semibold text-black text-5xl'>Overview.</p>
            <p className=''>Explore and experiment with JavaScript, get instant output to text and iterate.</p>
        </div>


        <div className='flex justify-between'>
            <div className='w-[49%] flex flex-col gap-3 '>
                <p className='text-2xl font-semibold text-black mt-3'>Installing</p>
                <p>
                - No specific installation is required. You can use the git-hosted version (without downloading anything) here: 
                <a className='text-sky-600' href='https://app.scribbler.live/.'> https://app.scribbler.live/.</a> <br/>
                - Alternatively, you can download or clone the <a className='text-sky-600' href='https://github.com/lordsainath'> Github repo.</a> on any machine and host it in webserver. <br/>
                - To host the app online, put the folder in web directory of the server and use the link to index.html.<br/>
                - That's it. No no npm, no node, no pip install, no apt-get install.
                </p> 
                <p className='text-2xl font-semibold text-black'>Hello-World</p>
                <p>
                JavaScript: The only language where you can write the “Hello world” code in one line or in 1000.

                    ~ Anonymous

                    <br/>Easy to start:<br/>

                    scrib.show("Hello World")
                    <br/>Simple interface for array manipulation and charting:<br/>

                    range(0,10,0.01).map(Math.sin).plot()
                </p>

                <p className='text-2xl font-semibold text-black'>Example Notebooks</p>
                <p>A hello-world notebook: https://app.scribbler.live/#./examples/Hello-world.jsnb. More examples are added in the folder examples/ in Scribbler repository. Check the Samples page for links.</p>
            </div>

            <div className="right w-[49%] flex flex-col gap-3" >
                <p className='text-2xl font-semibold text-black mt-3 '>Cells</p>
                <p>- The notebook consists of cells. Each cell will have user inputted doc/code and an output.<br/>
- There is a menu at the top right corner of the cell (or above the cell in case of smaller screens).<br/>
- There are two types of cells: code and doc. The type of cell can be toggled using a switch in the cell menu.<br/>
- For code cells input and output are both shown. For doc cells, input is hidden and opens up if you click the output.</p>

<p className='text-2xl font-semibold text-black'>Actions</p>
<p>To get the output of a cell press play ► button on the cell menu (or Cmd/Ctrl-Enter on keyboard after selecting the cell). The cell menu also has buttons for moving the cell up ↑, down ↓, adding a new cell ✛ and deleting the current cell ☓.</p>

<p className='text-2xl font-semibold text-black'>Saving</p>
<p>A notebook can be downloaded as json (has a default extension of .jsnb). IT can be loaded back into the app. The notebook or only the output can also be downloaded as html.</p>

<p className='text-2xl font-semibold text-black'> Loading</p>
<p>A .jsnb file can also be directly loaded into the app by suffixing the url of the file after “#” something like: https://app.scribbler.live/#link_to_file.jsnb. The url of the file should be accessible by the browser through GET method.</p>
            </div>
        </div>

    </div>
  )
}

export default Overview
