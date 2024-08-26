import { useState } from "react"
import { Link,useLocation } from "react-router-dom"

const Head = () =>{

    const [toggle, setToggle] = useState(false)
    const homepage = useLocation().pathname

    const handleToggle = () =>{

        setToggle(!toggle)
    }

    return(
        <div>
        
        <header className="bg-white">
            <section className=" header pb-1 px-6 pt-6 flex justify-between items-center ">
            <div className="inline-flex gap-10">
                <h1 className="text-3xl font-bold text-blue-700 h1">SheriffPortfolio</h1>
                <button onClick={handleToggle} 
                className="text-3xl sm:hidden relative -top-2 -right-4
                 focus:outline-none">
                    &#9776;
                </button>
                <nav className="hidden sm:block">
                <div className="inline-flex gap-8">
                <Link to={'/'} className=''><p>Home</p>
                <div className={`'background' ${homepage === '/' ? 'prim' : 'background'}`}></div>
                </Link>
                <Link to={'/about'} className=''><p>About me</p>
                <div className={`'background' ${homepage === '/about' ? 'primar' : 'background'}`}></div>
                </Link>
                </div>
                </nav>
            </div>
            <div>
            <Link to={'/contact'} className='font-bold hidden sm:block'><p>Contact me</p>
                <div className={`'background' ${homepage === '/contact' ? 'prima' : 'background'}`}></div>
                </Link>
            </div>
            </section>
            </header>
            <section className={`z-10 fixed top-0 h-full w-full left-0 block lg:hidden ${toggle ? "block" : "hidden"}`} >
            <div onClick={handleToggle} className="bg-white md:translate-x-40 w-72 md:w-full flex z-10	flex-col p-4 mx-auto translate-x-28 h-full">
                <button onClick={handleToggle} className="w-40 md:translate-y-6 md:fixed md:top-0 left-0 top-0 relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 relative left-0">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
                <Link to={'/'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-14 mb-4 font-bold">Home</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/about'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">About</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                <Link to={'/contact'}>
                <span className="flex flex-row items-center justify-between">
                 <p className="mt-4 mb-4 font-bold">Contact</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 translate-y-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</p>
                 </span>
                </Link>
                <hr className="w-lvw -translate-x-4"/>
                </div>
                </section>
                
        </div>
    )
}
export default Head