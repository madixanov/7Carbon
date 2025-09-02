import "./Footer.css"
import youtube from "../../assets/icons/youtube.svg"
import facebook from "../../assets/icons/Facebook.svg"
import instagram from "../../assets/icons/Instagram.svg"

export default function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="footer-container">
          <div className="logo-text-f">7Carbon</div>
          <form className="signup-container">
            <input type="email" placeholder="Email" />
            <button>Sign Up Now</button>
          </form>
          <div className="social-media">
            <span>Социальные сети</span>
            <div className="icon-row">
              <img src={instagram} alt="instagram icon" />
              <img src={facebook} alt="facebook icon" />
              <img src={youtube} alt="youtube icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}