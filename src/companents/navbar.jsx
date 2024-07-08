import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full min-h-[72px] shadow-lg py-6 bg-[#CFCFCF25]">
            <div className="max-w-[1110px] mx-auto items-center flex justify-between">
                <NavLink to={'/'}>
                    <img className="w-[97px] h-[21px]" src="./../../public/svg/site-logo.svg" alt="site logo" />
                </NavLink>
                <ul className="flex items-center">
                    <li className="text-[#70737C] text-[14px] font-normal"><NavLink to={'/'} >ALL PRODUCTS</NavLink></li>
                    <div className="w-[1px] ml-[16px] mr-[16px] h-[100%] bg-[#EFEFEF]"></div>
                    <li className="text-[#70737C] text-[14px] font-normal"><NavLink to={'/'} >ABOUT SEEDRA</NavLink></li>
                    <div className="w-[1px] ml-[16px] mr-[16px] h-[100%] bg-[#EFEFEF]"></div>
                    <li className="text-[#70737C] text-[14px] font-normal"><NavLink to={'/'} >OUR BLOG</NavLink></li>
                    <div className="w-[1px] ml-[16px] mr-[16px] h-[100%] bg-[#EFEFEF]"></div>
                    <li className="text-[#70737C] text-[14px] font-normal"><NavLink to={'/'} >CONTACTS</NavLink></li>
                </ul>
                <div className="flex gap-[8px]">
                    <NavLink to={'https://www.instagram.com/'}>
                        <img className="w-[24px] h-[24px]" src="./../../public/svg/instagram-logo.svg" alt="Instagram logo" />
                    </NavLink>
                    <NavLink to={'https://www.facebook.com/'}>                        
                        <img className="w-[24px] h-[24px]" src="./../../public/svg/fasebook-logo.svg" alt="Fasebook logo" />
                    </NavLink>
                </div>
                <div className="border-[1px] border-[#EFEFEF] rounded-[71px] py-[12px] pl-[20px] w-[285px] h-[48px]">
                    <div className="flex gap-[16px] items-center">
                        <img className="w-[24px] h-[24px]" src="./../../public/svg/search-logo.svg" alt="search logo" />
                        <input className="outline-none bg-transparent" type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className=" flex gap-[24px] w-[72px] h-[24px]">
                    <NavLink to={'/'}>
                        <img className="w-[24px] h-[24px]" src="./../../public/svg/love-logo.svg" alt="Like logo" />
                    </NavLink>
                    <NavLink to={'/'}>
                        <img className="w-[24px] h-[24px]" src="./../../public/svg/icon_cart_simple.svg" alt="Karzinka logo" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}