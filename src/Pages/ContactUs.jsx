import { FaFacebook } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className="max-w-6xl mx-auto flex justify-around gap-6 mt-12">
         <iframe src="https://www.google.com/maps/embed?pb=!…" width="500" height="500"></iframe>

         <div className="space-y-7">
            <h1 className="text-5xl">Contact Info..</h1>
          <div className="flex flex-col">
          <small>BookVibe.com</small>
          <small>phone: 999</small>
          <small>email: amite403@gmail.com</small>
          <small>Address: Borhanuddin, VIP Road, Bhola</small>
          </div>
          <h1 className="text-5xl">Social Networking</h1>
          <div className="flex gap-7">
         <a href="#"><FaFacebook className="text-3xl" /></a>
         <a href="#"><FaTwitter className="text-3xl" /></a>
         <a href="#"><FaInstagramSquare className="text-3xl" /></a>
         <a href="#"><FaYoutube className="text-3xl" /></a>
        <a href="#">  <CgWebsite className="text-3xl" /></a>
          </div>
         <p className="mt-10 mx-auto"><small>Copyrights &copy; 2018-2024 www.bookVibe.com</small></p>
         </div>
        </div>
    );
};

export default ContactUs;