//import React from 'react';

import './App.css';
import './Projects.css';
import CopyEmail from './components/CopyEmail.jsx';
import ArrowLiftStatus from './components/ArrowLiftStatus.jsx';
import Project from './components/ProjectOutline.jsx';
import { useTypewriter } from 'react-simple-typewriter';

import RoadcastImage1 from './assets/roadcast1.png';
import RoadcastImage2 from './assets/roadcast2.png';
import PollarImage1 from './assets/pollar.png';
import PollarImage2 from './assets/pollar-2.png';
function App() {
  const [myRole] = useTypewriter({
    words: ['Software Engineer', 'Full-stack Developer', 'Software Developer', 'Data Analyst'],
    loop: {},
  });
  const aboutMeUrl = () => {
    window.location.href = '#about-me';
  };

  return (

    <>

      <header className="header">
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-ltr active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-ltr">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-ltr">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-ltr">Certifications</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-ltr">Contact</a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <main>
        <div className="card">
          <div className="my_name_card">
            <div className="name">Jheus Brian Lavilla</div>
            <div className="name-transparent">Jheus Brian Lavilla</div>
            <div className="position" >I'm a <span style={{ fontWeight: "Bold", }}>{myRole}</span></div>
            <button className="button" onClick={aboutMeUrl}>
              Know About Me!
            </button>
          </div>
        </div>
      </main>
      <section className="contact-me-icons">
        <ul className="contact-me-icons-flex">
          <li className="icon-list">
            <a
              href="https://drive.google.com/file/d/1F-cU-f47_Azd_wnuIvpY1irster5txCZ/view?usp=sharing"
              className="resume"
              target="_blank"
            ><svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M17 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V23C7 24.11 7.89 25 9 25H21C22.11 25 23 24.11 23 23V11L17 5ZM21 23H9V7H16V12H21V23ZM16 16C16 17.1 15.1 18 14 18C12.9 18 12 17.1 12 16C12 14.9 12.9 14 14 14C15.1 14 16 14.9 16 16ZM18 21V22H10V21C10 19.67 12.67 19 14 19C15.33 19 18 19.67 18 21Z"
                  fill="#6885A5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/jheus10" className="github" target="_blank"
            ><svg
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M8.78863 9.2799C8.55947 8.6533 8.56863 7.93731 8.67038 7.28222C9.37089 7.50711 10.0288 7.86288 10.6137 8.33312C10.8704 8.5433 11.2068 8.61106 11.5203 8.5099C12.3247 8.25203 13.1602 8.12231 13.9999 8.1249C14.8808 8.1249 15.7177 8.2624 16.4776 8.50892C16.7911 8.61106 17.1276 8.54231 17.3833 8.33213C17.968 7.862 18.6255 7.50623 19.3257 7.28124C19.4275 7.93633 19.4357 8.65231 19.2084 9.27794C19.0709 9.65508 19.1396 10.0892 19.399 10.3976C20.0627 11.1862 20.4166 12.0928 20.4166 13.0356C20.4166 15.1119 18.6107 17.1479 15.7104 17.7676C14.9844 17.9228 14.7011 18.902 15.2566 19.4628C15.6132 19.8222 15.8332 20.329 15.8332 20.8928V23.8392C15.8332 24.0997 15.9298 24.3495 16.1017 24.5337C16.2736 24.7179 16.5068 24.8213 16.7499 24.8213C16.993 24.8213 17.2262 24.7179 17.3981 24.5337C17.57 24.3495 17.6666 24.0997 17.6666 23.8392V20.8928C17.6666 20.3329 17.5566 19.8006 17.3604 19.3184C20.126 18.2901 22.2499 15.9752 22.2499 13.0356C22.2499 11.7127 21.8062 10.4968 21.0701 9.4783C21.2626 8.67294 21.2452 7.86169 21.1719 7.23901C21.1068 6.68115 21.016 5.95044 20.6494 5.51437C20.104 4.86713 19.2011 5.24821 18.5594 5.48294C17.8711 5.73249 17.2162 6.07754 16.6115 6.50928C15.7581 6.27593 14.8806 6.15879 13.9999 6.16062C13.0887 6.16062 12.2096 6.28338 11.3865 6.51026C10.7818 6.07851 10.1269 5.73346 9.43855 5.48392C8.79688 5.24821 7.89305 4.86713 7.34763 5.51437C6.97363 5.9583 6.89572 6.63106 6.8288 7.20267L6.82422 7.23999C6.75088 7.86365 6.73438 8.67588 6.92688 9.48222C6.19355 10.4997 5.74988 11.7137 5.74988 13.0356C5.74988 15.9742 7.8738 18.2901 10.6394 19.3184C10.4392 19.8088 10.335 20.3379 10.3332 20.8731L10.1792 20.9065C9.52197 21.0037 9.10122 20.9163 8.81522 20.7867C8.11855 20.4704 7.75922 19.6739 7.32105 19.065C7.04788 18.6869 6.65005 18.2145 6.03955 17.9964C5.92531 17.9557 5.8047 17.9394 5.6846 17.9486C5.5645 17.9578 5.44726 17.9922 5.33959 18.05C5.12212 18.1665 4.95679 18.3709 4.87997 18.6181C4.80314 18.8653 4.82112 19.1351 4.92994 19.3681C5.03875 19.6011 5.2295 19.7782 5.46022 19.8605C5.97172 20.0432 6.32555 20.9821 6.65005 21.3986C6.99197 21.8386 7.44663 22.2982 8.09838 22.5948C8.72355 22.8796 9.4578 22.9808 10.3332 22.8659V23.8392C10.3332 24.0997 10.4298 24.3495 10.6017 24.5337C10.7736 24.7179 11.0068 24.8213 11.2499 24.8213C11.493 24.8213 11.7262 24.7179 11.8981 24.5337C12.07 24.3495 12.1666 24.0997 12.1666 23.8392V20.8928C12.1666 20.329 12.3866 19.8222 12.7431 19.4628C13.2996 18.901 13.0154 17.9228 12.2894 17.7676C9.38813 17.1479 7.58322 15.1119 7.58322 13.0356C7.58322 12.0947 7.93613 11.1882 8.59888 10.3995C8.8583 10.0912 8.92613 9.65705 8.78863 9.2799Z"
                  fill="#6885A5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/jheus10/"
              className="facebook"
              target="_blank"
            ><svg
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M16 16.6071H18.5L19.5 12.3214H16V10.1785C16 9.07493 16 8.03564 18 8.03564H19.5V4.43564C19.174 4.38957 17.943 4.28564 16.643 4.28564C13.928 4.28564 12 6.061 12 9.32136V12.3214H9V16.6071H12V25.7142H16V16.6071Z"
                  fill="#6885A5"
                />
              </svg>
            </a>
          </li>
          <li>
            <CopyEmail />
          </li>
          <li>
            <a
              href="https://twitter.com/jheus_lavilla"
              className="twitter"
              target="_blank"
            ><svg
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M17.8641 8.56652C17.1063 8.56638 16.3787 8.88499 15.838 9.45379C15.2972 10.0226 14.9865 10.7961 14.9726 11.6079L14.9447 13.2904C14.9431 13.3808 14.9236 13.4697 14.8877 13.5514C14.8517 13.6332 14.8 13.7058 14.736 13.7646C14.6719 13.8234 14.597 13.8671 14.5162 13.8927C14.4353 13.9183 14.3503 13.9253 14.2667 13.9132L12.7103 13.6868C10.6623 13.3877 8.70013 12.3771 6.81769 10.6967C6.22145 14.2327 7.38601 16.6822 10.1907 18.572L11.9326 19.745C12.0154 19.8007 12.0841 19.8773 12.1329 19.9681C12.1816 20.0589 12.2088 20.1611 12.2122 20.2657C12.2155 20.3704 12.1949 20.4744 12.152 20.5685C12.1092 20.6626 12.0455 20.7441 11.9665 20.8058L10.3792 22.0482C11.3234 22.1112 12.2198 22.0663 12.9636 21.9082C17.6677 20.9019 20.7955 17.1095 20.7955 10.8537C20.7955 10.3431 19.7864 8.56652 17.8641 8.56652ZM12.9785 11.5684C12.9959 10.5386 13.2965 9.53723 13.8425 8.68961C14.3886 7.84198 15.1559 7.18579 16.0484 6.80318C16.9409 6.42058 17.9188 6.32856 18.8599 6.53866C19.801 6.74875 20.6633 7.25162 21.3389 7.98431C22.0478 7.97896 22.651 8.17125 24 7.29527C23.666 9.04724 23.5015 9.80786 22.7896 10.8537C22.7896 19.0175 18.1064 22.9872 13.3544 24.0031C10.096 24.6996 5.35799 23.5555 4 22.0364C4.69196 21.9787 7.50366 21.655 9.12887 20.3806C7.75393 19.4095 2.28107 15.959 5.87746 6.68208C7.56548 8.79406 9.27743 10.232 11.0123 10.9947C12.1669 11.5021 12.4501 11.4915 12.9795 11.5694L12.9785 11.5684Z"
                  fill="#6885A5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jheus-lavilla-4a07171a3/"
              className="linkedin"
              target="_blank"
            ><svg
              width="30"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M8.19727 7.60678C8.19699 8.20313 7.97562 8.77494 7.58185 9.19641C7.18809 9.61788 6.65418 9.85449 6.09759 9.85419C5.54099 9.8539 5.00731 9.61671 4.61393 9.19482C4.22056 8.77292 3.99972 8.20088 4 7.60453C4.00028 7.00818 4.22165 6.43638 4.61542 6.0149C5.00919 5.59343 5.54309 5.35682 6.09969 5.35712C6.65628 5.35742 7.18996 5.5946 7.58334 6.01649C7.97671 6.43839 8.19755 7.01043 8.19727 7.60678ZM8.26023 11.5192H4.06296V25.5951H8.26023V11.5192ZM14.8919 11.5192H10.7156V25.5951H14.8499V18.2086C14.8499 14.0938 19.8552 13.7116 19.8552 18.2086V25.5951H24V16.6796C24 9.74289 16.5918 10.0015 14.8499 13.408L14.8919 11.5192Z"
                  fill="#6885A5"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
      <div className="arrow-wrapper">
        <ArrowLiftStatus></ArrowLiftStatus>
      </div>
      <section className="about-me-wrapper" id="about-me">
        <div className="about-me">
          <div className="start-tag-about"></div>
          I recently graduated from FEU Institute of Technology with Bachelor's
          Degree in Information Technology specializes in Service Management &
          Business Analytics. I accomplished my journey with excellent, and
          consistent academic record, ability to understand and develop software
          and websites, working knowledge as a Full-stack Web Developer, and a
          strong understanding of core hardware and internet technologies. I seek
          to further my knowledge in the IT industry and assists your company by
          utilizing my skills in Business Management and Data Analytics.
          <div className="close-tag-about"></div>
        </div>
      </section>
      <div className="start-tag-projects"></div>
      <section className="projects-wrapper" id="projects">
        <div className="projects">

          <Project
            number={'01'}
            title={"Roadcast"}
            roles={['Full Stack Developer', 'Project Manager']}
            description={`A Vehicle Incident Management System and Forecasting Implementing Moving Average Web Application for Philippine National Police (PNP) Headquarters of Pasig City.`}
            skills={['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Data Analysis']}
            images={[RoadcastImage1, RoadcastImage2, RoadcastImage1, RoadcastImage2]}
          >
          </Project>
        </div>
      </section>
      <section className="projects-wrapper" id="projects">
        <div className="projects">
          <Project
            number={'02'}
            title={"Roadcast"}
            roles={['Full Stack Developer', 'Project Manager']}
            description={`A Vehicle Incident Management System and Forecasting Implementing Moving Average Web Application for Philippine National Police (PNP) Headquarters of Pasig City.`}
            skills={['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Data Analysis']}
            images={[RoadcastImage1, RoadcastImage2, RoadcastImage1, RoadcastImage2]}
          >
          </Project>
        </div>
      </section>
      <section className="projects-wrapper" id="projects">
        <div className="projects">
          <Project
            number={'03'}
            title={"Roadcast"}
            roles={['Full Stack Developer', 'Project Manager']}
            description={`A Vehicle Incident Management System and Forecasting Implementing Moving Average Web Application for Philippine National Police (PNP) Headquarters of Pasig City.`}
            skills={['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Data Analysis']}
            images={[RoadcastImage1, RoadcastImage2, RoadcastImage1, RoadcastImage2]}
          >
          </Project>
        </div>
      </section>
      <section className="projects-wrapper" id="projects">
        <div className="projects">
          <Project
            number={'04'}
            title={"Roadcast"}
            roles={['Full Stack Developer', 'Project Manager']}
            description={`A Vehicle Incident Management System and Forecasting Implementing Moving Average Web Application for Philippine National Police (PNP) Headquarters of Pasig City.`}
            skills={['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Data Analysis']}
            images={[RoadcastImage1, RoadcastImage2, RoadcastImage1, RoadcastImage2]}
          >
          </Project>
        </div>
      </section>
      <section className="projects-wrapper" id="projects">
        <div className="projects">
          <Project
            number={'05'}
            title={"Roadcast"}
            roles={['Full Stack Developer', 'Project Manager']}
            description={`A Vehicle Incident Management System and Forecasting Implementing Moving Average Web Application for Philippine National Police (PNP) Headquarters of Pasig City.`}
            skills={['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Data Analysis']}
            images={[RoadcastImage1, RoadcastImage2, RoadcastImage1, RoadcastImage2]}
          >
          </Project>
          <div className="close-tag-projects"></div>

        </div>
      </section>
    </>
  )
}

export default App
