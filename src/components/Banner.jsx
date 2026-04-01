import circle from "../assets/circle.svg";
import playIcon from "../assets/Play.png"
import bannerImage from "../assets/banner.png"
import "../App.css"

const Banner = () => {
    return (
        <div className='px-5 flex flex-col lg:flex-row container mx-auto  my-10 lg:my-16 lg:gap-8 gap-4'>
            <div className='flex flex-col flex-3 space-y-4 justify-center'>
                <p className='inline-flex gap-1 rounded-full px-3 py-1 font-medium text-purple-500 bg-blue-100 w-fit' >
                    <img src={circle} alt="ai" className='inline' />
                    New: AI-Powered Tools Available</p>
                <h1 className='font-extrabold text-4xl lg:text-7xl leading-20 '>Supercharge Your <br /><span className="vp-gradient text-transparent bg-clip-text"> Digital Workflow</span></h1>
                <p className='text-gray-400 text-sm lg:text-base '>Access premium AI tools, design assets, templates, and productivity<br />
                    software—all in one place. Start creating faster today.<br /> Explore Products
                </p>

                <div className="items-center flex gap-4">
                    <button className='vp-gradient px-3 py-5 rounded-full text-white font-bold btn'>Explore Products</button>
                    <button className="inline-flex px-3 py-5 border border-purple-500 text-purple-500 rounded-full font-bold btn"><img src={playIcon} alt="Play" className="" /> Watch Demo</button>
                </div>
            </div>

            <div className='flex-2 lg:shrink-0'>
                <img src={bannerImage} alt="Banner" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default Banner;