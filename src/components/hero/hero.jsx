import './hero.scss'
import pic5 from "../../../public/blob-scene-haikei.svg";

const hero = () => {
    return (
        <div className='hero bg-none sm:bg w-full h-[86vh] mt-1 inline-block mx-auto lg:flex lg:justify-evenly lg:items-center'>
            <div className="wrapper">
                <div className="textContainer w-screen lg:w-[100%] lg:text-left text-center justify-center items-center flex-col gap-y-40">
                    <h2 className="mb-10 text-7xl font-bold text-red-500">Owais Rafiq</h2>
                    <h1 className="mb-10 text-3xl font-semibold text-gray-400">Front End Developer and Graphic Designer</h1>    
                    <div className="buttons inline sm:flex sm:justify-center lg:justify-start sm:align-center sm:flex-row sm:gap-x-8">
                        {/* <button>See the latest work</button> */}
                        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-60 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                        See the latest work   
                        </button>
                    <button class="mt-4 ml-0 sm:mt-0 sm:ml-6 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-60 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                      Contact Me   
                    </button>   
                    </div>
                    <div className="flex justify-start items-start mt-8 p-0">
                        <img src="scroll.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="imageContainer mb-12 sm:mb-0">
                <img src="./gif2.gif" alt="" />
            </div>
        </div>
    )
}

export default hero
