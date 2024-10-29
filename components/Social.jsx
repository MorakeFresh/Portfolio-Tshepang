import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/MorakeFresh",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tshepang-morake-1154ba216",
  },
];

export default function Social({containerStyles, iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((social, index) => {
      return <Link key={index} href={social.path} target="_blank" className={iconStyles}>{social.icon}</Link>
    })}
  </div>;
}
