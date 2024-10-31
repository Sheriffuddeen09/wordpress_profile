import shipment from './image/shipment.png'
import indeed from './image/indeed.png'
import blogport from './image/blogpost.png'
import youtube from './image/youtube.png'
import uipic from './image/ui.png'
import redux from './image/redux.png'
import { Link } from 'react-router-dom'

const MainPortfolio = () =>{


    return(
        <div>
            <p className='font-bold my-4 text-2xl text-center'>Projects by Odukoya Sheriff Olawale</p>
        <div className='p-3 sm:grid-cols-2 -translate-x-7 sm:translate-x-0 sm:grid grid mx-16 sm:mx-40 sm:my-6 justify-center grid-cols-1'>
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={indeed} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-white p-2 shadow-md rounded-xl'>SheriffJob is a job site portfolio and hiring platform. access to search for jobs, posts resumes research companies and more</p>
                <div className='flex-wrap flex gap-3 items-center'>           
                <Link to={'https://github.com/Sheriffuddeen09/Sheriff-Job-Portfolio.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-64 sm:w-64 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://sheriff-job-portfoli-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://github.com/Sheriffuddeen09/blog-server.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Api
                </button>
                </Link>
                </div>

            </div>
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={youtube} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-white p-2 shadow-md rounded-xl'>SheriffYouTube is a video site portfolio and YouTube alike method. access to search for video and watch</p>
                <div className='flex-wrap flex gap-3 items-center'>            
                <Link to={'https://github.com/Sheriffuddeen09/Next-SheriffYouTube.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-64 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://next-sheriff-you-tub-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://github.com/Sheriffuddeen09/next-server.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Live
                </button>
                </Link>
                </div>
            </div>
            
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={redux} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-white p-2 shadow-md rounded-xl'>SheriffBlog is a blog site portfolio and facebook alike method. access to posts watch video and view market</p>
                <div className='flex-wrap flex gap-3 items-center'>            
                <Link to={'https://github.com/Sheriffuddeen09/React-Redux-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-64 font-bold '>
                    GitHub Link
                </button>
                </Link>
                <Link to={'https://redux-project-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://redux-json.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Api Link
                </button>
                </Link>
                </div>
            </div>
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={shipment} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-white p-2 shadow-md rounded-xl'>SheriffShipment is a shipment site portfolio and transportation platform. ideas of giving Transportation from one port to another either within the coutry or outside the country.</p>
                <div className='flex-wrap flex gap-3 items-center'>            
                <Link to={'https://github.com/Sheriffuddeen09/Shipment-Project.git'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-64 font-bold '>
                   GitHub Link
                </button>
                </Link>
                <Link to={'https://shipment-project-odukoya-sheriff-olawales-projects-0e5387fc.vercel.app/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Live Link
                </button>
                </Link>
                <Link to={'https://json-server-8zz0.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 -mt-2 sm:my-0 mb-3 font-bold '>
                    Api Link
                </button>
                </Link>
               </div>
            </div>
            
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={blogport} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://project-po.onrender.com/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 mb-3 font-bold '>
                    Live
                </button>
                </Link>
            </div>
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