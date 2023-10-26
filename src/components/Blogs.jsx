import { BsArrowRight } from 'react-icons/bs';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className="text-white lg:px-24 px-4">
            <div>
                <h2 className="text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pb-20">Lorem ipsum dolor sit amet. Et repellat obcaecati eum eveniet delectus sed tempora suscipit quo assumenda consectetur qui galisum fugiat qui velit laboriosam.</h2>

                {/* video player */}

                <a href="/">
                    <div className="bg-[url('/src/assets/video_bg.jpeg')] bg-cover bg-no-repeat cursor-pointer cs-video_block cs-style1 cs-video_open cs-bg">
                        <span className="cs-player_btn cs-accent_color">
                            <span></span>
                        </span>
                    </div>
                </a>
            </div>
            <div className="h-28"></div>

            {/* Blog */}
            <div className="relative" id="blog">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12">
                    {/* Conteudo */}
                    <div className="lg:w-1/3 space-y-5 z-30">
                        <h4 className="text-gray-200 font-semibold text-2xl">Our Blog</h4>
                        <h2 className=" text-5xl font-bold mb-5 leading-snug">Explore recent publications</h2>
                        <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"><span>View More Blog</span> <BsArrowRight/></a>
                    </div>

                    {/* Cards */}
                    <div className='lg:w-2/3 my-8'>
                        {/* Linhas */}
                        <div className='flex mb-10'>
                            <div className="h-8 w-1/3 rounded-s-2xl bg-white"></div>
                            <div className="h-8 w-1/2 bg-red-700"></div>
                            <div className="h-8 w-1/3 bg-blue-700"></div>
                            <div className="h-8 w-1/3 rounded-e-2xl bg-orange"></div>
                        </div>

                        {/* Blog Cards*/}
                        <BlogCard/>

                        {/* Botão*/}
                        <div className=' w-full mx-auto relative'>
                            <button className=' lg:absolute right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange hover:text-white transition-all duration-300 hover:-translate-y-3'>Read More</button>
                        </div>
           
                    </div>
                </div>
                    {/* Circulos */}
                <div className=' hidden lg:block'>
                    <div className='cs-shape_4'></div>
                    <div className='cs-shape_4'></div>
                </div>
                    <div className=' lg:h-60 h-8'></div>
            </div>
        </div>
    );
};

export default Blogs;