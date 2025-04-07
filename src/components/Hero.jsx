import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hero_img.png";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between pl-10 pr-10">
        <div className="flex flex-col justify-start items-start gap-7">
          <Button>request a demo.<FontAwesomeIcon icon={faArrowRight} /></Button>
          <div className="flex flex-col">
            <p className="text-7xl font-semibold text-brandgray tracking-tight mb-4">Stop coding</p>
            <p className="text-7xl font-semibold text-brandgray tracking-tight mb-5">boring portfolios.</p>
            <p className="font-semibold text-xl text-brandgray">Glint - Design and publish your</p>
            <p className="font-semibold text-xl text-brandgray">portfolio effortlessly, exactly how you imagine it.</p>
          </div>
          <div className="flex gap-5">
            <Button variant="outline">Login</Button>
            <Button className="bg-blue-500 hover:bg-blue-800">Register</Button>
          </div>
        </div>
        <div>
          <img src={heroImage} className="h-auto w-[450px] mr-16" />
        </div>
      </div>
    </>
  );
}

export default Hero;
