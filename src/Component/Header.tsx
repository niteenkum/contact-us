import { useNavigate } from "react-router-dom"


export default function Header() {
    const navigate = useNavigate();
    return (
    <div className='h-14 w-full shadow-xl shadow-gray-100 top-0 left-0 sticky flex gap-5 md:justify-end items-center p-5 pr-10'>
        
        <div className="cursor-pointer hover:text-blue-500" onClick={() => {navigate("/about-us")}}>About Us</div>
        <div className="cursor-pointer hover:text-blue-500" onClick={() => {navigate("/contact-us")}}>Contact Us</div>
    </div>
  )
}
