import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const links = ['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'];
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <ul className="nav-list">
          {links.map((link, index) => (
            <li className="list-inline-item" key={index}><a className="text-decoration-none text-dark" href="#">{link}</a></li>
          ))}
        </ul>

        <ul className="icon-list">
          <li className="list-inline-item"><a className="text-dark" href="#"><FaFacebook /></a></li>
          <li className="list-inline-item"><a className="text-dark" href="#"><FaInstagram /></a></li>
          <li className="list-inline-item"><a className="text-dark" href="#"><FaXTwitter /></a></li>
          <li className="list-inline-item"><a className="text-dark" href="#"><FaGithub /></a></li>
          <li className="list-inline-item"><a className="text-dark" href="#"><FaYoutube /></a></li>
        </ul>

        <p>@ {date} Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}