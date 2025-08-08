import { useEffect, useState } from 'react'
import './App.css'
import {FloatingDock} from './components/floating-dock'
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Typewriter from 'typewriter-effect';

function App() {
  const [typewriterVisible,setTypewriterVisible] = useState(false);
  const [contentVisible,setContentVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(()=>{setTypewriterVisible(true);},1000);
    const timer2 = setTimeout(()=>{setContentVisible(true);},3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  },[])

  const items = [
    { title: "Github", href: "https://github.com/lit-chi", icon: <IconBrandGithub size={20} color='white' /> },
    { title: "Twitter", href: "https://x.com/lit_litchi", icon: <IconBrandTwitter size={20} color='white' /> },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/yohan-samuel-/", icon:  <IconBrandLinkedin size={20} color='white' /> },
  ];

  return (
    <>
      <div className='min-h-screen bg-[#100e0e] text-white font-mono'>
        <Quote contentVisible={contentVisible} />
        <div className='pt-[10vh] mx-[20%] h-screen'>
          <Heading typewriterVisible={typewriterVisible} />
          <br />
          <Content contentVisible={contentVisible} />
        </div>
        <Dock items={items} typewriterVisible={typewriterVisible}/>
      </div>
    </>
  )
}

function Quote({contentVisible}){
  return(
    <div className={`text-center pt-20 text-sm transition-opacity duration-3000 ${contentVisible ? 'opacity-70 visible' : 'opacity-0 invisible'} `}>
      <i>"A person who thinks all the time, has nothing to think about except thoughts."</i>
    </div>
  );
}

function Dock({items,typewriterVisible}){
 return (
    <>
      {
        typewriterVisible ? (
            <FloatingDock
              items={items}
              desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
              mobileClassName="fixed bottom-4 right-4"
            />
        ) : null
      }
    </>
  );
}

function Content({contentVisible}){
  return(
    <>
      {
        contentVisible ? (
          <div className='fade-in'>
            <div>
              <h2>
              <u>About Me</u>
              </h2>   
              <div>
                bla bla bla bla bla
              </div>
            </div>
            <br />
            <div>
              <h2>
              <u>My interests</u>
              </h2>   
              <ul className="list-disc ml-6">
                <li>Cybersecurity</li>
                <li>Computers</li>
                <li>Basketball</li>
                <li>Cooking</li>
              </ul>
            </div>
            <br />
            <div>
              <h2>
              <u>Skills</u>
              </h2>   
              <ul className="list-disc ml-6">
                <li>Web Development
                  <ol className="list-decimal ml-6">
                    <li>React</li>
                    <li>JavaScript</li>
                  </ol>
                </li>
                <li>
                  Cybersec
                  <ol className="list-decimal ml-6">
                    <li>Burpsuite</li>
                    <li>Nmap</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        ) : null
      }
    </>
  )
}


function Heading({typewriterVisible}){
  return(  
    <>
      <h1 className='fade-in font-bold text-3xl'>Hello🙃, I'm Yohan!</h1>
      <h3 className=' text-xl'>
        { typewriterVisible ? (
          <Typewriter
            options={{
              autoStart: true,
              loop:false,
              deleteSpeed: Infinity,
              delay: 50,
              strings: ["bla bla bla"],
            }} 
          />
        ):null
        }
      </h3>
    </>
  )
}

export default App
