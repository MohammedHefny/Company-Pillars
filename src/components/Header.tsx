import "../styles/Header.css";
import archImage1 from "../assets/header/arch1.png";
import archImage2 from "../assets/header/arch2.png";
import archImage3 from "../assets/header/arch3.png";
import archImage4 from "../assets/header/arch4.png";
import { ShoppingCartOutlined, PicLeftOutlined } from "@ant-design/icons";

interface Image {
  src: string;
  alt: string;
}

interface Icon {
  component: React.FC;
  key: string;
}

const images: Image[] = [
  { src: archImage1, alt: "archImage1" },
  { src: archImage2, alt: "archImage2" },
  { src: archImage3, alt: "archImage3" },
  { src: archImage4, alt: "archImage4" },
];

const icons: Icon[] = [
  { component: ShoppingCartOutlined, key: "cart" },
  { component: PicLeftOutlined, key: "picLeft" },
];

function Header() {
  return (
    <div className="header-holder">
      <div className="container">
        <div className="row header">
          <div className="col-4">
            <div className="header-intro">
              <h2>Welcome to My Company!</h2>
              <h3>
                You have started your <span>30 day trial</span>
              </h3>
            </div>
          </div>
          <div className="col-5">
            <div className="d-flex justify-content-between">
              <div className="header-img d-flex">
                {images.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} />
                ))}
                <span></span>
                <p>+3</p>
              </div>
              <div className="header-archs">
                <h2>Our architects are here to help</h2>
                <h3>Book a free session</h3>
              </div>
            </div>
          </div>
          <div className="col-3 header-icons">
            {icons.map((Icon) => (
              <a key={Icon.key} className="icon">
                <Icon.component />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
