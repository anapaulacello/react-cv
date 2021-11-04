import {useState} from "react";
import './App.css';
import { About, Education,Hero,Experience,More } from "./components";

import {CV} from "./CV/CV"
  
const{hero,education,experience,languages,habilities}=CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div>
    <Hero hero={hero}/>
    {/* <About hero={hero}/> */}
    {/* <Education education={education}/>
    <Experience experience={experience}/> */}
{/*     <More
      languages={languages}
      habilities={habilities}
    />   */}
    <nav>
      <div className="divider">
          <button onClick={()=>setShowEducation(true)}>
            educación
          </button>
          <button onClick={()=>setShowEducation(false)}>
            experiencia
          </button>
      </div>
    </nav>
    <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
      languages={languages}
      habilities={habilities}
      />
    </div>
    
  );
}

export default App;
