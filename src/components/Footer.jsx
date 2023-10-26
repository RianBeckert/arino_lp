import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="lg:px-24 px-4 text-white" id="contact">
        {/* Footer top*/}
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
                {/* Logo texto*/}
                <div className="space-y-4 lg:w-1/3">
                <a href="/" className="text-white text-3xl font-bold"><span className="text-orange">A</span>rino</a>
                <p className="text-gray-200">Welcome to arino sed ut perspiciae omude omnis iste natus error sitort voluptatem accusatium</p>
                {/* Social icons */}
                <div className="flex gap-5 text-white">
                    <a href="" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-500"><FaLinkedinIn className="w-5 h-5" /></a>
                    <a href="" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-500"><FaInstagram className="w-5 h-5" /></a>
                    <a href="" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-500"><FaTwitter className="w-5 h-5" /></a>
                    <a href="" className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-500"><FaFacebook className="w-5 h-5" /></a>
                </div>
                </div>
                {/* Serviços */}
                <div className="space-y-4">
                    <h3 className="text-x1 font-semibold">Services</h3>
                    <div className="space-y-3 text-gray-300">
                        <a href="" className="block">UI/UX Design</a>
                        <a href="" className="block">WP Development</a>
                        <a href="" className="block">Digital Marketing</a>
                        <a href="" className="block">React Development</a>
                    </div>
                </div>
                    
                {/* Contact */}
                <div className="space-y-4">
                <h3 className="text-x1 font-semibold">Contact Us</h3>
                <div className="space-y-3 text-gray-300">
                    <p>+44 462 45673 455</p>
                    <p>techinfo@arino.com</p>
                    <p>50 Wall Street Suite, <br /> 44150 Ohio, United States</p>
                </div>
                </div>

                {/* Subscribe */}
                <div className="space-y-4 lg:w-96">
                <h3 className="text-x1 font-semibold">Subscribe</h3>
                <div className="space-y-3 text-gray-300">
                    <div className="relative w-full">
                        <input type="email" placeholder="techinfo@arino.com" className="newsletter_input"/>
                        <button className="newsletter_btn">
                            <span>Send</span>
                        </button>
                    </div>

                    <p>Non facilis quibusdam sed architecto molestiae sed dignissimos esse et porro incidunt qui alias temporibus.</p>
                </div>
                </div>
            </div>
            <div className="h-12"></div>
            <hr className="border-gray-300"/>
            <div className="h-8"></div>
            {/* Direitos reservados */}
            <div className="flex flex-col sm:flex-row justify-between pb-7">
                <p>Copyright</p>
                <p>Terms of use | Provacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;