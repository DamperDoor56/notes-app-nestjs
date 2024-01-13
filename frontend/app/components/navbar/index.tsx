"use client"
import Image from "next/image"
import IconNotes from '@/public/note-icon/favicon-32x32.png'
import Magnifier from '@/public/navbar/searchbar/Magnifier'
import Select from 'react-select';
import { options, selectStyles } from "@/app/utils/navbar"
import { NavbarProps } from "@/app/types/navbar";
import { useEffect, useState } from "react";

export const Navbar = ({setInputContent, selectedOption} : NavbarProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

	// This is a workaround for a console error related to latest nextjs version
	// see https://github.com/JedWatson/react-select/issues/5459#issuecomment-1458451734 for details
	useEffect(() => setIsMounted(true), []);

return (
<nav className="w-full px-10 border-b pb-5">
  <div className="pt-5 grid grid-cols-8 grid-rows-1 gap-4 justify-center items-center">
    <aside className="flex flex-row h-full gap-5 items-center self-start">
        <Image src={IconNotes} alt="Notes" width={30}/>
        <h1 className="font-sans text-gray-700 text-1xl">Notes App</h1>
    </aside>
    <div className="flex w-[28rem] flex-row items-center col-start-4 border gap-3 border-white-yellow rounded-2xl p-1 bg-white-yellow">
        <input className="bg-white-yellow w-full outline-none pl-3" type="text" 
          onChange={(e: any) => setInputContent(e.target.value)} 
          placeholder="Search..."
        />     
        <div className="flex flex-row gap-3 items-center">
        <p className="text-brick-gray fill-brick-gray">By:</p>
        {isMounted ? (
	        <Select options={options} value={selectedOption} className="w-40" />	) : null}
        </div>
        <button>   
        <Magnifier className="fill-brick-gray w-10" width={20} />
        </button>
    </div>
  </div>
</nav>

)
}