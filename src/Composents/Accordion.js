import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Accordion = ({icon, title ,children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => setIsOpen((curr) => !curr)

    return (
      <div className="my-10 mx-36">
    <div className={`flex items-center mb-4 cursor-pointer hover:bg-zinc-900 ${isOpen && "bg-zinc-900"}`} onClick={toggleContent}>
      <span className='text-2xl text-green-500 m-2 '>
        {icon}
      </span>
        <h1 className='sm:text-lg text-base pl-2'> {title} </h1>
      <span className={`text-2xl text-green-500 ml-auto duration-[400] ${isOpen && "rotate-180"}`}>
        <FaAngleDown/>
      </span>
      </div>
      {isOpen ? <div className="px-8">{children}</div> : null}
    </div>
    )
}

export default Accordion 