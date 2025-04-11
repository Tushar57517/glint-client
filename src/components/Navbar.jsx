import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center pl-10 pr-10 pt-3 pb-3 text-black">
      <p className="font-semibold text-3xl text-brandgray bg-gradient-to-t from-black to-slate-300 bg-clip-text text-transparent">glint.</p>
      <ul className="flex gap-2 cursor-pointer text-sm font-semibold text-slate-700 justify-center items-center">
        <li className="hover:bg-slate-100 rounded pl-2 pr-2 pt-1 pb-1">Themes</li>
        <li className="hover:bg-slate-100 rounded pl-2 pr-2 pt-1 pb-1">About</li>
        <HoverCard>
          <HoverCardTrigger asChild><li className="hover:bg-slate-100 rounded pl-2 pr-2 pt-1 pb-1">Pricing</li></HoverCardTrigger>
          <HoverCardContent className="w-fit h-fit m-3 bg-white text-black p-2 flex justify-center items-center border border-slate-300">
            <p className="text-sm">Currently it's free! Will update the pricing and subscription model soon.</p>
          </HoverCardContent>
        </HoverCard>
        <li><Button>Github</Button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
