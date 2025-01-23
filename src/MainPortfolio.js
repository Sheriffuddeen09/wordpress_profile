import shipment from './image/shipment.png'
import indeed from './image/indeed.png'
import todolist from './image/todo_list.png'
import youtube from './image/youtube.png'
import jvec_project from './image/jvec.png'
import uipic from './image/ui.png'
import redux from './image/redux.png'
import ApiFetch from './image/cat.jpg'
import { Link } from 'react-router-dom'

const MainPortfolio = () =>{


    return(
        <div>
            <p className='font-bold my-4 text-white text-2xl text-center'>Projects by Odukoya Sheriff Olawale</p>
        <div className='p-3 sm:grid-cols-2 gap-4 sm:gap-7 text-white sm:translate-x-0 sm:grid grid mx-auto items-center md:mx-0  lg:mx-40 sm:my-6 justify-items-center grid-cols-1'>
            {/* Shipment Project */}
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={shipment} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>SheriffShipment is a shipment site portfolio and transportation platform. ideas of giving Transportation from one port to another either within the coutry or outside the country. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>Tools: @React.js</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/Shipment-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-28 font-bold '>
                   GitHub Link
                </button>
                </Link>
                <Link to={'https://shipment-project-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-32 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://json-server-8zz0.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
               </div>
               </div>

                {/*Indeed Project  */}
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={indeed} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>SheriffJob is a job site portfolio and hiring platform. access to search for jobs, posts resumes research companies and more. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @React.js</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>           
                <Link to={'https://github.com/Sheriffuddeen09/Sheriff-Job-Portfolio.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-28 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://sheriff-job-portfoli-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-32 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://github.com/Sheriffuddeen09/blog-server.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>

            </div>

            {/* Youtube Project */}
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={youtube} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>SheriffYouTube is a video site portfolio and YouTube alike method. access to search for video and watch. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @Next.js & Typescript</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/Next-SheriffYouTube.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-28 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://next-sheriff-you-tube.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-32 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://github.com/Sheriffuddeen09/next-server.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>
            </div>
            
        {/* Blog Post Project */}
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={redux} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>SheriffBlog is a blog site portfolio and facebook a like method. access to posts watch video and view market </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @React Redux
                </span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/React-Redux-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-28 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://react-redux-project-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-32 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://redux-json.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>
            </div>

            {/* To-Do List Project */}
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={todolist} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>To-Do List project for Delete, Check Creating a task for a fresher candidate aspiring to join as a ReactJS Developer involves designing challenges that test their understanding of foundational web technologies.</p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @React Redux </span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/React-Redux-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-28 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://quad-b-tech-project-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-32 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://redux-json.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-24 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>
            </div>

            {/* JVEC Project data */}
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={jvec_project} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>Client Service Project designing with animation and responsiveness.</p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @React.js</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/solutionproject.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-32 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://solutionproject-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-64 sm:w-32 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://company-json.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-28 sm:w-20 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>
            </div>

                {/* Api Fetch data */}
                <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={ApiFetch} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>Api fetch of a thecatapi return a Array of 10 ramdom cat image and implement pagination of displaying more images by modifying the limit parameter and Add a button to "Save to Favorite. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: @React.js</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://github.com/Sheriffuddeen09/ApiFetch-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 sm:mt-0 rounded-xl w-64 sm:w-28 sm:w-32 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://api-fetch-git-master-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/favorite'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-64 sm:w-32 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Live Link
                </button>
                </Link>
                </div>
            </div>


            {/* Ui Project */}
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={uipic} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://ui-project.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 mb-3 font-bold '>
                    Live
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default MainPortfolio