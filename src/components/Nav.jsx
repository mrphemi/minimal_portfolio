import Image from "next/image";
import Link from "next/link";

import Linkedin from "./icons/linkedin";
import Github from "./icons/github";

const Nav = () => {
  return (
    <div className="px-4 md:px-8 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/self.jpg"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full border border-green"
        />
      </Link>

      <div className="flex gap-4 items-center">
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/oluwafemi-kayode-b6918413b/"
            className="p-2 rounded-full flex justify-center items-center border border-white/5 text-gray hover:bg-gray-dark hover:text-white"
            target="_blank"
            rel="noopener"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/mrphemi"
            className="p-2 rounded-full flex justify-center items-center border border-white/5 text-gray hover:bg-gray-dark hover:text-white"
            target="_blank"
            rel="noopener"
          >
            <Github />
          </Link>
        </div>
        <Link
          href="mailto:fkayode94@gmail.com"
          className="capitalize py-2.5 px-4 bg-gray-dark hover:bg-gray-darker rounded-full border border-white/10 font-bold text-white"
        >
          get in touch
        </Link>
      </div>
    </div>
  );
};

export default Nav;
