import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiCloudSun } from "react-icons/ci";

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <CiCloudSun size={28} /> <h1 className="ml-2">mcounselling</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <SiFrontendmentor />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
