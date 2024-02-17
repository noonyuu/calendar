import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { NavItems } from "./NavItems";

export const Header = () => {
  const [open, setOpen] = useState(true);
  const click = () => setOpen(!open);

  return (
    <div className="flex h-16 w-screen bg-blue-300">
      <div className="ml-4 flex w-full items-center">スケジュール管理</div>
      <div className="mr-4 flex h-full w-full items-center justify-end">
        <div onClick={click}>
          {open ? (
            <FaRegUserCircle className="h-12 w-12" />
          ) : (
            <MdCancel className="h-12 w-12" />
          )}
        </div>
      </div>
      <ul className={open ? "hidden list-none items-center whitespace-nowrap" : "flex flex-col absolute top-16 right-0 h-auto rounded-lg m-2 z-50 w-1/5 bg-black text-white"}>
        {NavItems.map((Item, index) => {
          return (
            <li key={index} className="p-2 text-center">
              <a href={Item.url} className={Item.cName}>
                {Item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
