import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
    return (
        <footer className="bg-black pt-32 ">
            <div className='px-5 container mx-auto'>
                <div className='lg:grid flex flex-wrap lg:grid-cols-[2fr_repeat(4,1fr)] gap-6'>
                    <nav className='pr-10 '>
                        <h2 className="mb-4 text-4xl font-bold text-white">DigiTools</h2>
                        <a className="text-white opacity-80">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</a>

                    </nav>
                    <nav className='space-y-2'>
                        <h4 >Product</h4>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p >Integrations</p>
                    </nav>
                    <nav className='space-y-2'>
                        <h4 >Company</h4>
                        <p >About</p>
                        <p >Blog</p>
                        <p >Careers</p>
                        <p >Press</p>
                    </nav>
                    <nav className='space-y-2'>
                        <h4>Resources</h4>
                        <p >Documentation</p>
                        <p >Center</p>
                        <p >Community</p>
                        <p >Contact</p>
                    </nav>
                    <nav className=''>
                        <h4 className='mb-2'>Social Links</h4>
                        <div className='flex gap-2'>
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                            <img src={twitter} alt="Twitter" />
                        </div>


                    </nav>
                </div>

            </div>
        </footer>
    );
};

export default Footer;