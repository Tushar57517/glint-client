import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return (
        <footer className="text-brandgray flex items-center justify-between pl-10 pr-10 pt-4 pb-4">
            <p className="text-sm italic">Made with <FontAwesomeIcon icon={faHeart} className="text-red-600"/> by <span className="underline">@tushrsa</span></p>
        </footer>
    )
}

export default Footer;