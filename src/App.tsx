import { useState } from "react";
import reactLogo from "./assets/react.svg";
import player1 from "./assets/player2.png";
import viteLogo from "/vite.svg";
import "./App.css";
import "./text-style.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AliceCarousel from "react-alice-carousel";
function App() {
  const [count, setCount] = useState(0);

  const atletes = [
    {
      number: "01",
      numberColor: "",
      underline: "bg-primary",
      background: "",
      textColor: "black",
      title: "CONNECTION",
      content:
        "Connect with coaches directly, you can ping coaches to view profile.",
    },
    {
      number: "02",
      numberColor: "",
      underline: "bg-primary",
      background: "bg-secondary",
      textColor: "black",
      title: "COLLABORATION",
      content:
        "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    },
    {
      number: "03",
      numberColor: "",
      underline: "bg-white",
      background: "bg-primary",
      textColor: "white",
      title: "GROWTH",
      content:
        "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
    },
  ];

  const players = [
    {
      number: "01",
      numberColor: "",
      underline: "bg-primary",
      background: "",
      textColor: "black",
      title: "CONNECTION",
      content:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    },
    {
      number: "02",
      numberColor: "",
      underline: "bg-primary",
      background: "bg-secondary",
      textColor: "black",
      title: "COLLABORATION",
      content:
        "Work with recruiter to increase your chances of finding talented athlete.",
    },
    {
      number: "03",
      numberColor: "primary",
      underline: "bg-white",
      textColor: "white",
      background: "bg-third",
      title: "GROWTH",
      content: "Save your time, recruit proper athlets for your team.",
    },
  ];

  return (
    <>
      <div id="section1" className="container">
        <section id="section1">
          <img className="player1"></img>

          <div className="header-container">
            <div className="header-box header">ATHLETS</div>
          </div>

          {atletes.map((item, index) => (
            <div
              key={index}
              className={`${item.background} content-container `}
            >
              <div className="content-box">
                <div className="content-header-box">
                  <div className="number-container ">
                    <div className="number-text">{item.number}</div>
                    <div
                      className={`${item.underline} number-text-underline`}
                    ></div>
                  </div>
                  <div className="content-header-text">{item.title}</div>
                </div>
                <div className="content-text-box">
                  <div className={`${item.textColor} content-text`}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="slide-container bg-secondary">
            <Splide
              options={{
                arrows: false,
              }}
            >
              {atletes.map((item, index) => (
                <SplideSlide>
                  <div key={index}>
                    <div className="content-box">
                      <div className="content-header-box">
                        <div className="number-container ">
                          <div className="number-text">{item.number}</div>
                          <div
                            className={`bg-primary number-text-underline`}
                          ></div>
                        </div>
                        <div className="content-header-text">{item.title}</div>
                      </div>
                      <div className="content-text-box">
                        <div className={`content-text`}>{item.content}</div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>

        <section id="section2" className="section-padding">
          <div className="w-full">
            <div className="header-container">
              <div className="header-box header">PLAYERS</div>
            </div>
            {players.map((item, index) => (
              <div
                key={index}
                className={`${item.background} content-container`}
              >
                <div className="content-box">
                  <div className="content-header-box">
                    <div className="number-container">
                      <div className={` ${item.numberColor} number-text`}>
                        {item.number}
                      </div>
                      <div
                        className={`${item.underline} number-text-underline`}
                      ></div>
                    </div>
                    <div className="content-header-text">{item.title}</div>
                  </div>
                  <div className="content-text-box">
                    <div className={`${item.textColor} content-text`}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img className="player2"></img>
          <div className="slide-container bg-secondary">
            <Splide
              options={{
                arrows: false,
              }}
            >
              {players.map((item, index) => (
                <SplideSlide>
                  <div key={index}>
                    <div className="content-box">
                      <div className="content-header-box">
                        <div className="number-container ">
                          <div className="number-text">{item.number}</div>
                          <div
                            className={`bg-primary number-text-underline`}
                          ></div>
                        </div>
                        <div className="content-header-text">{item.title}</div>
                      </div>
                      <div className="content-text-box">
                        <div className={`content-text`}>{item.content}</div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
