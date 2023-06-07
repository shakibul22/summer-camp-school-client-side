import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer  className="">
            <div className="footer p-10  bg-slate-800 text-white ">
            <div>
    <img className='w-10 h-10 rounded-md' src="https://th.bing.com/th/id/OIP.32ViKWKLo8sSJkeqrLqZywHaKe?pid=ImgDet&w=636&h=900&rs=1" alt="yoga" />
    <p>YOGA Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>

    <span className="footer-title">SHOP</span> 
    <a className="link link-hover">Yoga Mat</a> 
    <a className="link link-hover">Yoga Clothes</a> 
    <a className="link link-hover">Shoes & Mats</a> 
    <a className="link link-hover">Yoga Tights</a>
    <a className="link link-hover">Yoga Tops
</a>
  </div> 
  <div>
    <span className="footer-title">  OUR WORLD</span> 
    <a className="link link-hover">History</a> 
    <a className="link link-hover">Ambassadors</a> 
    <a className="link link-hover">Regional Office</a> 
    <a className="link link-hover">Our Partners</a>
  </div> 
  
  <div>
    <span className="footer-title">USEFUL LINKS</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">FAQ</a>
  </div> 
  <div>
    <span className="footer-title"> SUPPORT</span> 
    <a className="link link-hover">Yoga FAQ</a> 
    <a className="link link-hover">Terms of Use</a> 
    <a className="link link-hover">Common Questions</a>
    <a className="link link-hover">Validate Authenticity</a>
    <a className="link link-hover">Careers</a>

  </div>
  <div>

    <span className="footer-title">SOCIAL MEDIA</span> 
   
   <div className='flex gap-2'>
   <FaFacebook/> <FaTwitter/> <FaPinterest/> <FaInstagram/>  <FaYoutube/>
   </div>
   <div className='flex gap-2 mt-2'>
    <FaPhoneAlt/> +08801823246565
   </div>
   <div >
   <a className='flex gap-2 mt-2 underline' href="#"> <FaWhatsapp/> +08801823246565</a>
   </div>
   
  </div>
            </div>
  
  <div className="footer footer-center p-4 bg-base-300 text-base-content">
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>

</footer>
    );
};

export default Footer;