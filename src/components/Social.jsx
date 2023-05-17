import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import "./social.css";

//links below will take you to the home page of each element

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li className="facebook">
          <a href="https://m.facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook color="white" />
          </a>
        </li>
        <li className="youtube">
          <a href="https://m.youtube.com" target="_blank" rel="noreferrer">
            <BsYoutube color="white" />
          </a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <BsTwitter color="white" />
          </a>
        </li>
        <li className="instagram">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <BsInstagram color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
