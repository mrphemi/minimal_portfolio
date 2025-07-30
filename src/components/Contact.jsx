import Link from "next/link";

import Linkedin from "./icons/linkedin";
import ContactIcon from "./icons/contact";
import Github from "./icons/github";

const Contact = () => {
  return (
    <section>
      <div className="group flex gap-3 items-center">
        <div className="p-1.5 bg-transparent rounded-xl group-hover:text-white bg-linear-to-b from-green via-green-900 to-green-800">
          <ContactIcon />
        </div>

        <h3 className="font-bold text-lg group-hover:text-white">Contact</h3>
      </div>

      <p className="mt-2.5 md:text-lg md:w-4/5">
        If you've got something that I can help with or want to say hi, write me
        at{" "}
        <Link href="mailto:fkayode94@gmail.com">
          <span className="underline underline-offset-4 decoration-dashed hover:text-white">
            fkayode94@gmail.com
          </span>
        </Link>
        .
      </p>

      <div className="mt-5 flex gap-2">
        <Link
          href="https://www.linkedin.com/in/oluwafemi-kayode-b6918413b/"
          target="_blank"
          rel="noopener"
          className="bg-white/5 rounded-4xl flex gap-2 items-center p-2.5 hover:bg-white/20 text-white"
        >
          <Linkedin />
          <span className="font-bold text-sm">Linkedin</span>
        </Link>
        <Link
          href="https://github.com/mrphemi"
          target="_blank"
          rel="noopener"
          className="bg-white/5 rounded-4xl flex gap-2 items-center p-2.5 hover:bg-white/20 text-white"
        >
          <Github />
          <span className="font-bold text-sm">Github</span>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
