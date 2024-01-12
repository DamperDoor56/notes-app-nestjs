import Image from "next/image"
import IconNotes from '@/public/note-icon/favicon-32x32.png'
import Magnifier from '@/public/navbar/searchbar/Magnifier'
import BurgerMenu from '@/public/navbar/menu.png'

export const Navbar = () => {
return (
<nav className="w-full px-10 border-b pb-5">
  <div className="pt-5 grid grid-cols-5 grid-rows-1 gap-4 justify-center items-center">
    <aside className="flex flex-row gap-5 items-center self-start">
      <button>
        <Image src={BurgerMenu} alt="Menu" width={20}/>
      </button>
      <div className="flex flex-row gap-3">
        <Image src={IconNotes} alt="Notes" width={20}/>
        <h1 className="font-sans text-gray-700">Notes App</h1>
      </div>
    </aside>
    <div className="flex w-full flex-row items-center col-start-3 border gap-3 border-gray-100 rounded-2xl p-2 bg-gray-100">
        <Magnifier color="gray-300" width={20} className="w-10" />
        <input className="bg-gray-100 w-full outline-none" type="text" placeholder="Search..."/>
    </div>
  </div>
</nav>

)
}