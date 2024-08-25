import { AlignRightOutlined } from "@ant-design/icons";
import "../styles/Support.css";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";
import {
  PlusOutlined,
  ExportOutlined,
  AlipayCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../context/CardContext";
interface Card {
  image: string;
  alt: string;
  operation: string;
  desc: string;
  price: string;
  bgColor: string;
}

const Cards: Card[] = [
  {
    image: hero1,
    alt: "Mobile Apps",
    desc: "Mobile Apps",
    operation: "Get your own mobile app",
    price: "100 DTSU*",
    bgColor: "#0A488F",
  },
  {
    image: hero2,
    alt: "Mobile Apps",
    desc: "BI",
    operation: "Get your own mobile app",
    price: "100 DTSU*",
    bgColor: "#579064",
  },
  {
    image: hero3,
    alt: "Mobile Apps",
    desc: "HR",
    operation: "Get your own mobile app",
    price: "100 DTSU*",
    bgColor: "#950000",
  },
  {
    image: hero4,
    alt: "Mobile Apps",
    desc: "Operations",
    operation: "Get your own mobile app",
    price: "100 DTSU*",
    bgColor: "#8F6C0A",
  },
];
function Support() {
  const { setSelectedCardName } = useCardContext();
  const navigate = useNavigate();
  const handleCardClick = (cardName: string) => {
    setSelectedCardName(cardName);
    navigate("/card-details");
  };
  return (
    <>
      <div className="support-holder">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center support-header">
              <h2>Get Support</h2>
              <AlignRightOutlined />
            </div>
          </div>
          <div className="row">
            <div className="card-img d-flex">
              {Cards.map((card, index) => (
                <>
                  <div
                    style={{ cursor: "pointer" }}
                    className="col-3 text-center"
                    onClick={() => handleCardClick(card.desc)}
                  >
                    <div className="p-3">
                      <img key={index} src={card.image} alt={card.alt} />
                      <div
                        className="card-text"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <h4>{card.operation}</h4>
                        <h5>{card.desc}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6>{card.price}</h6>
                          <div className="card-icons">
                            <div className="icon">
                              <ExportOutlined />
                            </div>
                            <div className="icon">
                              <PlusOutlined />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className=" d-flex justify-content-end align-items-center gap-5 gears">
            <div className=" d-flex justify-content-between align-items-center gap-2">
              <h2> Remaining DTSUs:200</h2>
              <AlipayCircleOutlined className="icon1" />
            </div>
            <div className=" d-flex justify-content-between align-items-center gap-2">
              <h2> Remaining DTSUs:200</h2>
              <AlipayCircleOutlined className="icon2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
