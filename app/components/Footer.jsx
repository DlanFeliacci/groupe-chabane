// components/Footer.js
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { CgInstagram } from "react-icons/cg";

const Footer = () => {
  return (
    <>
        <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div className='text-center'>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-gray-400">
                We are a company dedicated to providing the best services and solutions for our customers.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className='text-center'>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <Link href="#home">
                    <span className="text-gray-400 hover:text-white cursor-pointer">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                    <span className="text-gray-400 hover:text-white cursor-pointer">About</span>
                    </Link>
                </li>
                <li>
                    <Link href="#services">
                    <span className="text-gray-400 hover:text-white cursor-pointer">Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                    <span className="text-gray-400 hover:text-white cursor-pointer">Contact</span>
                    </Link>
                </li>
                </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className='text-center'>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="text-gray-400 space-y-2">
                <li>Email: info@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Main St, City, Country</li>
                </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className='text-center'>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className='hover:scale-[1.1] duration-200' size={30}/>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <CgInstagram className='hover:scale-[1.1] duration-200' size={30}/>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <RxLinkedinLogo className='hover:scale-[1.1] duration-200' size={30}/>
                </Link>
                </div>
            </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t-2 w-5/6 m-auto border-gray-800 mt-8 pt-8 text-center drop-shadow-xl">
            <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Groupe Chabane. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    </>
  );
};

export default Footer;