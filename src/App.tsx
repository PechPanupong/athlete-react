import "./App.css";
import "./text-style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function App() {
  const atletes = [
    {
      number: "01",
      background: "",
      title: "CONNECTION",
      content:
        "Connect with coaches directly, you can ping coaches to view profile.",
    },
    {
      number: "02",
      background: "bg-secondary",
      title: "COLLABORATION",
      content:
        "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    },
    {
      number: "03",
      background: "bg-primary",
      title: "GROWTH",
      content:
        "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
    },
  ];

  const players = [
    {
      number: "01",
      background: "",
      title: "CONNECTION",
      content:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    },
    {
      number: "02",
      background: "bg-secondary",
      textColor: "black",
      title: "COLLABORATION",
      content:
        "Work with recruiter to increase your chances of finding talented athlete.",
    },
    {
      number: "03",
      background: "bg-third",
      title: "GROWTH",
      content: "Save your time, recruit proper athlets for your team.",
    },
  ];

  return (
    <>
      <div className="container">
        <section id="section1">
          <img className="player1"></img>

          <div className="header-container">
            <div className="title-box title">ATHLETS</div>
          </div>

          {atletes.map((item, index) => (
            <div key={index} className={`${item.background} content-row `}>
              <div className="content-container">
                <div className="content-title-box">
                  <div className="number-container ">
                    <div className="number-text">{item.number}</div>
                    <div
                      className={`${
                        index == atletes.length - 1 ? "bg-white" : "bg-primary"
                      } number-text-underline`}
                    ></div>
                  </div>
                  <div className="content-title-text">{item.title}</div>
                </div>
                <div className="content-text-box">
                  <div
                    className={`${
                      index == atletes.length - 1 ? "white" : "black"
                    } content-text`}
                  >
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
                    <div className="content-container">
                      <div className="content-title-box">
                        <div className="number-container ">
                          <div className="number-text">{item.number}</div>
                          <div className="bg-primary number-text-underline"></div>
                        </div>
                        <div className="content-title-text">{item.title}</div>
                      </div>
                      <div className="content-text-box">
                        <div className="content-text">{item.content}</div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>

        <section id="section2" className="section-padding">
          <div className="header-container">
            <div className="title-box title">PLAYERS</div>
          </div>
          {players.map((item, index) => (
            <div key={index} className={`${item.background} content-row`}>
              <div className="content-container">
                <div className="content-title-box">
                  <div className="number-container">
                    <div
                      className={` 
                      ${index == atletes.length - 1 ? "primary" : "black"}
                      number-text`}
                    >
                      {item.number}
                    </div>
                    <div
                      className={`${
                        index == atletes.length - 1 ? "bg-white" : "bg-primary"
                      } number-text-underline`}
                    ></div>
                  </div>
                  <div className="content-title-text">{item.title}</div>
                </div>
                <div className="content-text-box">
                  <div
                    className={`${
                      index == atletes.length - 1 ? "white" : "black"
                    } content-text`}
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                    <div className="content-container">
                      <div className="content-title-box">
                        <div className="number-container ">
                          <div className="number-text">{item.number}</div>
                          <div
                            className={`bg-primary number-text-underline`}
                          ></div>
                        </div>
                        <div className="content-title-text">{item.title}</div>
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
