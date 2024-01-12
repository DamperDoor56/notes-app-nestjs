"use client"
import Image from "next/image"
import IconNotes from '@/public/note-icon/favicon-32x32.png'
import Magnifier from '@/public/navbar/searchbar/Magnifier'
import Select from 'react-select';
import { options, selectStyles } from "@/app/utils/navbar"
import BurgerMenu from "@/public/navbar/menu";
import { NavbarProps } from "@/app/types/navbar";

export const Navbar = ({setInputContent, setSelectedOption, selectedOption} : NavbarProps) => {

return (
<nav className="w-full px-10 border-b pb-5">
  <div className="pt-5 grid grid-cols-6 grid-rows-1 gap-4 justify-center items-center">
    <aside className="flex flex-row h-full gap-5 items-center self-start">
      <button>
        <BurgerMenu className="fill-brick-gray" width={30} height={30}/>
      </button>
      <div className="flex flex-row gap-3 items-center">
        <Image src={IconNotes} alt="Notes" width={30}/>
        <h1 className="font-sans text-gray-700 text-1xl">Notes App</h1>
      </div>
    </aside>
    <div className="flex w-[30rem] flex-row items-center col-start-3 border gap-3 border-white-yellow rounded-2xl p-1 bg-white-yellow">
        <input className="bg-white-yellow w-full outline-none pl-3" type="text" 
          onChange={(e: any) => setInputContent(e.target.value)} 
          placeholder="Search..."
        />     
        <div className="flex flex-row gap-3 items-center">
        <p className="text-brick-gray fill-brick-gray">By:</p>
        <Select options={options} value={selectedOption} className="w-40"   
        styles={selectStyles} onChange={(e: any) => setSelectedOption({value: e.value, label: e.value})} 
        />
        </div>
        <button>   
        <Magnifier className="fill-brick-gray w-10" width={20} />
        </button>
    </div>
  </div>
</nav>

)
}