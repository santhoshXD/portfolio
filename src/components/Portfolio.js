import { faBars, faBook, faBriefcase, faClose, faCloudSun, faCloudSunRain, faHome, faMailReply, faMoon, faNoteSticky, faPhone, faSun, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HomeImage from '../homeimage.png'
import { Col, Container, Row } from 'react-bootstrap';
import { faGithub, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import icon from '../purple-ribbon.png'




const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  position: relative;
  background-color: ${(props) => (props.darkmode  ? '#333' : '#fff' )};
  color: ${(props) => (props.darkmode  ? '#fff' : '#333')};
  

  ::selection {
    background-color: purple; 
    color: white; 
}





  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
animation: fadeIn 2s ease;
  
`

const Header = styled.header`
  height: 80px; 
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  backdrop-filter: blur(50px);

  img{
    width: 30px;
    height: 30px;
  }

  .nav-items{
     display: flex;
     gap: 5rem;
     
     
     div{
        cursor: pointer;
        font-weight: 600;


        }
       

        @media screen and (max-width:700px){
           display: none;
        }
        
     }

  

  .nav-items div.active {
  border-bottom: 3px solid #BF40BF;
  
}



  .dark-light{
         display: flex;
         gap: 3rem;
         font-size: 1.3rem;

    .menu-icon{
        @media screen and (min-width:700px){
        display: none;
        font-size: 1.3rem;
     }
    }
  }




 
`
const MobileMenu = styled.div`
  height: 90%;
  width: 50%;
  background-color: ${(props) => (props.darkmode  ? '#333' : '#fff' )};
  color: ${(props) => (props.darkmode  ? '#fff' : '#8e44ad')};
  position: absolute;
  top:9%;
  transition: left 0.3s ease; 
  left: ${(props) => (props.openMenu ? '0' : '-250px')};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 30px;
  font-weight: 600;
  font-size: 1.5rem;
  

/* 
  @media screen and (min-width: 700px) {
    display: ${(props) => (props.openMenu ? 'block' : 'none')};
    left: ${(props) => (props.openMenu ? '0' : '-250px')};
  }

  @media (max-width: 700px) and (min-width: 500px) {
    display: ${(props) => (props.openMenu ? 'block' : 'none')};
    left: ${(props) => (props.openMenu ? '0' : '-250px')};
  } */

  @media screen and (min-width: 700px) {
    display: none;
    left: 0;
  }

  @media (max-width: 700px) and (min-width: 500px) {
    width: 250px;
    left: ${(props) => (props.openMenu ? '0' : '-250px')};
  }

  @media (max-width: 500px) {
    width: 50%;
    left: ${(props) => (props.openMenu ? '0' : '-100%')};
  }

  div{
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
  }

  .icon{
    font-size: 1.3rem;
  }
`

const Home = styled.div`
  height: calc(100vh - 80px); 
  width: 100%;
  margin-top: 80px; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  place-content: center;
  place-items: center;
  grid-gap: 5rem;
  text-align: center;

  

img{
    height: auto;
}

  .cloud{
    
    min-height: 200px;


    .summary{
        
        text-align: justify;



    }
  }


  @media screen and (max-width:1110px){
    display: grid;
  grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width:900px){
    display: grid;
  grid-template-columns: 1fr;
  height: auto;
  }


  @media screen and (max-width:550px){
    display: grid;
  grid-template-columns:1fr;

  }

  @media screen and (max-width:380px){
   height: auto;
  }
 

  button {
  padding: 10px 20px;  
  font-size: 16px;  
  font-weight: bold;  
  text-transform: uppercase;  
  border: none; 
  border-radius: 4px;   
  background-color: #8e44ad; 
  color: #fff; 
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #7d3c98; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(142, 68, 173, 0.5); 
  }

  svg{
    margin-right: 5px;
  }
}

h3,p{
    /* background: white; */
 
   
    
}

.profession{
  @keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

overflow: hidden;
  border-right: 2px solid #8e44ad; 
  white-space: nowrap;
  animation: typewriter 4s steps(10) infinite;
  color: #8e44ad;
}


  
`

const Skills = styled.div`
height: calc(100vh - 80px); 
  width: 100%;
 display: grid;
 align-content: space-evenly;

 @media screen and (max-width:380px){
   height: auto;
  }



  .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}


.grid > div {
  text-align: center;
}


.grid img {
  max-width: 100px;
  height: auto;
  margin: 10px;
  box-shadow: ${(props) => (props.darkmode ? '0 0 10px rgba(255, 255, 255, 0.2)' : ' 0 0 10px rgba(0, 0, 0, 0.1)')};
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover{
    animation: shake 0.5s ease-in-out;

    @keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px) rotate(-5deg); }
  50% { transform: translateX(5px) rotate(5deg); }
  75% { transform: translateX(-5px) rotate(-5deg); }
  100% { transform: translateX(0); }
}
  }

}

  h2{
    text-align: center;
  }

  .grid{
  


    img{
        width: 100px;
        height: 100px;
        background: white;
        box-shadow: ${(props) => (!props.darkmode ? '0 0 10px rgba(255, 255, 255, 0.5)' : ' 0 0 10px rgba(0, 0, 0, 0.1)')};
        
    }

    img[title]{
        color: red;
    }

    

   
  }

  h3{
    position: absolute;
    left: 47.5%;
    top: 120%;
  }


  .markup,.programming,.development,.tools{
    box-shadow: ${(props) => (props.darkmode ? '0 0 10px rgba(255, 255, 255, 0.1)' : ' 0 0 10px rgba(0, 0, 0, 0.1)')};
   
  }

  

`

const Projects = styled.div`
height: calc(auto - 80px); 
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  text-align: center;
  align-items: space-evenly;
  

  @media screen and (max-width: 1290px) {
    display: grid;
  grid-template-rows:1fr;
  }
 

  .grid2{
    display: grid;
grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
gap: 20px;
text-align: center;

  }


  .project{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    box-shadow: ${(props) => (props.darkmode ? '0 0 10px rgba(255, 255, 255, 0.1)' : ' 0 0 10px rgba(0, 0, 0, 0.1)')};
    
    /* height: 300px; */
    position: relative;
  }


  img{
    width: 100%;
    height: 100%;
    max-height: 200px;
  object-fit: cover;
  }
  
  h3{
       display: none;
  }

  .description{
        display: none;
  }

  .link{
        position: absolute;
        bottom: 0;
        background: ${(props) => (!props.darkmode ? 'white' : ' #333')};
        width: 100%;
        height: 15%;

        a{
          color: ${(props) => (!props.darkmode ? 'purple' : ' white')};
        }
  }


`
const Contact = styled.div`
height: auto;
width: 100%;
background:#f2f2f2;
margin-top: 1rem;

h5,p{
   color: ${(props) => (!props.darkmode ? 'white' : ' lightgrey')};
}

.bg-purple {
  background: ${(props) => (props.darkmode ? 'grey' : '#ca97ca')};

  a{
    color: ${(props) => (props.darkmode ? 'white' : 'white')};
    
  }
  
}
`


export default function Portfolio() {

  const initialDarkMode = localStorage.getItem('darkmode') === 'true';
  const [darkmode, setdarkMode] = useState(initialDarkMode);
  
  const handleDarkTheme = () => {
    setdarkMode(!darkmode);
    localStorage.setItem('darkmode', !darkmode);
  };



  const HomeRef = useRef()
  const SkillsRef = useRef()
  const ProjectsRef = useRef()
  const ContactRef = useRef()



  const ScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const ClickToResume = () => {
    window.location.href = 'https://1drv.ms/b/s!AkfnQSNKRdksgWAEoAJfJLq2lJMI?e=QzXyeF'
  };

  const [openMenu, setIsOpenMenu] = useState(false)

  const clickMenu = () => {
    setIsOpenMenu(!openMenu)
  }

  const [activeTab, setActiveTab] = useState('Home');

  const [imageTitle, setImageTitle] = useState('');

  const handleImageClick = (title) => {
    setImageTitle(title);
  };





  return (
    <Wrapper className='container-fluid' darkmode={darkmode}>
      <Header>
        <div className="portfolio">
          <img src={icon} alt="" />
        </div>
        <div className="nav-items">
          <div className={activeTab === 'Home' ? 'active' : ''} onClick={() => { ScrollToSection(HomeRef); setActiveTab('Home'); }}>Home</div>
          <div className={activeTab === 'Skills' ? 'active' : ''} onClick={() => { ScrollToSection(SkillsRef); setActiveTab('Skills'); }} >Skills</div>
          <div className={activeTab === 'Projects' ? 'active' : ''} onClick={() => { ScrollToSection(ProjectsRef); setActiveTab('Projects') }}>Projects</div>
          <div className={activeTab === 'Contacts' ? 'active' : ''} onClick={() => { ScrollToSection(ContactRef); setActiveTab('Contacts') }} >Contact</div>
        </div>
        <div className='dark-light'>

        <FontAwesomeIcon style={{cursor:'pointer'}} onClick={handleDarkTheme} className='dark-light-icon' icon={darkmode ? faSun : faMoon} />
          <FontAwesomeIcon
            className='menu-icon'
            onClick={clickMenu}
            icon={openMenu ? faClose : faBars}
          />

        </div>



      </Header>
      

      <MobileMenu darkmode={darkmode} className="mobile-menu" openMenu={openMenu}>
        <div onClick={() => ScrollToSection(HomeRef)} > <FontAwesomeIcon className='icon' icon={faHome} /> Home</div>
        <div onClick={() => ScrollToSection(SkillsRef)} > <FontAwesomeIcon className='icon' icon={faTools} />Skills</div>
        <div onClick={() => ScrollToSection(ProjectsRef)} > <FontAwesomeIcon className='icon' icon={faBook} />Projects</div>
        <div onClick={() => ScrollToSection(ContactRef)} > <FontAwesomeIcon className='icon' icon={faPhone} />Contact</div>

      </MobileMenu>

      <Home ref={HomeRef}>

        <div className="cloud">
          <h3 className='name'>I'm Santhosh Kumar</h3>
          <p className='profession'>Web Developer</p>
          <p className='summary'>🚀 My journey began with a fascination for coding, I've sharpened my skills in HTML, CSS, and JavaScript, delving into frameworks like React to create dynamic and responsive web solutions. I thrive on the challenges that web development presents, constantly seeking to expand my knowledge and embrace new technologies.</p>
          <button onClick={ClickToResume}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-cloud"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
Download Resume</button>
        </div>

        <div>
          <img className='img-fluid' src={HomeImage} />
        </div>
      </Home>
      <Skills ref={SkillsRef}>
        <h2>Skills</h2>
        {/* <h3>{imageTitle}</h3> */}
        <div className="grid">

          <div className="markup">
            <p>MarkUp Languages</p>

            <img onClick={() => handleImageClick('HTML')} src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="" title='HTML' />
            <img onClick={() => handleImageClick('CSS')} src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="" title='CSS' />

          </div>
          <div className="programming">
            <p>Programming Languages</p>


            <img onClick={() => handleImageClick('JavaScript')} className='img-fluid' src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="" title='JavaScript' />
            <img onClick={() => handleImageClick('Python')} className='img-fluid' src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="" title='Python' />


          </div>
          <div className="development">
            <p>FrameWorks</p>


            <img onClick={() => handleImageClick('React')} className='img-fluid' src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="" title='React' />
            <img onClick={() => handleImageClick('BootStrap')} className='img-fluid' src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png" alt="" title='Bootstrap' />


          </div>
          <div className="tools">
            <p>Tools</p>


            <img onClick={() => handleImageClick('GitHub')} className='img-fluid' src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="" title='GitHub' />
            <img onClick={() => handleImageClick('Git')} className='img-fluid' src="https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png" alt="" title='Git' />
            <img onClick={() => handleImageClick('VSCode')} className='img-fluid' src="https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png" alt="" title='VSCode' />


          </div>


        </div>
      </Skills>
      <Projects darkmode={darkmode} ref={ProjectsRef}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

        <h2>Projects</h2>
        </div>
        <div className="grid2">

        <div className="project">
          <h3>ChatHub</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCtllUhAY3Y2S0zAudCSq43sIzYegkKVdp9hdoUObboPaWG8fP6FmnJ1IHf7p8YPWBWk&usqp=CAU" alt="" />
          <div className="description">A chatapp design to make conversation with google and github login</div>
          <div className="link"><a href='https://santhoshxd.github.io/chatHub/'>ChatHub Link</a></div>
        </div>
        <div className="project">
          <h3>Resposive BlogPage</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTfiUIzxhWa9dNhVte3RvMeeyA6wfbnoORQ&usqp=CAU" alt="" />
          <div className="description">A fluid and visually appealing blog page that seamlessly adapts to various devices, ensuring an optimal reading experience for users on both desktop and mobile platforms.</div>
          <div className="link"><a href='https://santhoshxd.github.io/blog/'>BlogPage Link</a></div>
        </div>
        <div className="project">
          <h3>Responsive PortFolio</h3>
          <img src="https://www.esdesignbarcelona.com/sites/default/files/img/6_pasos_para_crear_un_portfolio_digital_y_todo_lo_que_debe_incluir_2.png" alt="" />
          <div className="description">A responsive portfolio seamlessly showcasing skills and projects, ensuring an optimal viewing experience across all devices.</div>
          <div className="link"><a href='https://santhoshXD.github.io/portfolio'>Portfolio</a></div>

        </div>
        <div className="project">
          <h3>Responsive E-Plant</h3>
          <img src="https://cdn.dribbble.com/userupload/10965581/file/original-2646df5643965dec5adbc80ff17064d4.jpg?resize=400x0" alt="" />
          <div className="description">
            A responsive and user-friendly E plant webpage with an intuitive design</div>
          <div className="link"><a href='https://santhoshxd.github.io/practice/'>E-Plant Link</a></div>
        </div>
        {/* <div className="project">
          <h3>Netflix Clone</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQzEhion45IS4Nt6kCpRpL3FgpND7RZoBNHctZK-wS8EsdottMgG34Be9Ksrw1jlOVjs&usqp=CAU" alt="" />
          <div className="description">Netflix Clone</div>
          
        </div> */}
       

        </div>

        

      </Projects>
      <Contact darkmode={darkmode} ref={ContactRef}>
      <footer className="bg-purple text-light py-5 text-center">
    <Container className="mx-auto">
        <Row>
            <Col md={4} className="mx-auto">
                <h5>Contact Information</h5>
                <p><a href="mailto:ysanthoshkm416@gmail.com"><FontAwesomeIcon icon={faMailReply}/>  santhoshkm416@gmail.com</a></p>
            </Col>
            <Col md={4} className="mx-auto">
                <h5>Connect with Me</h5>
                <ul className="list-unstyled row">
                    <li className="col-sm-4">
                        <a href="https://github.com/santhoshXD" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}/> GitHub
                        </a>
                    </li>
                    <li className="col-sm-4">
                        <a href="https://www.linkedin.com/in/santhosh-kumar-5a37b8240/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/> LinkedIn
                        </a>
                    </li>
                    <li className="col-sm-4">
                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faBriefcase}/> Naukri
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
</footer>
        
      
      </Contact>
    </Wrapper>
  )
}


