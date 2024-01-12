"use client"
import Image from "next/image"
import IconNotes from '@/public/note-icon/favicon-32x32.png'
import Magnifier from '@/public/navbar/searchbar/Magnifier'
import Select from 'react-select';
import { options, selectStyles } from "@/app/utils/navbar"
import BurgerMenu from "@/public/navbar/menu";

export const Navbar = () => {

return (
<nav className="w-full px-10 border-b pb-5">
  <div className="pt-5 grid grid-cols-6 grid-rows-1 gap-4 justify-center items-center">
    <aside className="flex flex-row h-full gap-5 items-center self-start">
      <button>
        <BurgerMenu className="fill-gray-400" width={30} height={30}/>
      </button>
      <div className="flex flex-row gap-3 items-center">
        <Image src={IconNotes} alt="Notes" width={30}/>
        <h1 className="font-sans text-gray-700 text-1xl">Notes App</h1>
      </div>
    </aside>
    <div className="flex w-[30rem] flex-row items-center col-start-3 border gap-3 border-gray-100 rounded-2xl p-1 bg-gray-100">
        <input className="bg-gray-100 w-full outline-none pl-3" type="text" placeholder="Search..."/>     
        <div className="flex flex-row gap-3 items-center">
        <p className="text-gray-400">By:</p>
        <Select options={options} className="w-40"   
        styles={selectStyles}/>
        </div>
        <button>   
        <Magnifier className="fill-gray-400 w-10" width={20} />
        </button>
    </div>
  </div>
</nav>

)
}