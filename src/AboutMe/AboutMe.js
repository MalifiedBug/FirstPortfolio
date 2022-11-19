

import Education from "../Education/Education"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Typewriter from 'typewriter-effect';

export default function AboutMe(){
  
 
    return (
      <div>
        <div className="aboutmeheader">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString(
                  '<h1 style="color: #008000">A simple yet efficient Coder on the block</h1>'
                )
                .pauseFor(300)
                .typeString(
                  "<strong>My name is Omkar</strong> and I am a Full-Stack Web Developer "
                )
                .typeString(
                  '<strong>Available to  <span style="color: #27ae60;">get Hired!!</span></strong>'
                )
                .pauseFor(1000)
                .typeString(
                  '<h1 style="color:#319177 ">I believe in making Resposive WebApps suitable for todays needs.</h1>'
                )
                .start()
              
            }}
          />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    );
  }