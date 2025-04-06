import React from 'react';
import '../styles/components/Section-Laboral.css';
import { Experience } from '../data/Data';
import { useContext, useEffect, useState } from 'react';

export function Timeline() {

  let dataInter = Experience;
  let [data, setData] = useState([]);
  // let data = Experience;
  // console.log(data);  

  useEffect(() => {
    setData(dataInter);
    console.log(dataInter)
  }, [])

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Experiencia Laboral</h2>

      <div className="timeline">

        {data.map(experience => (

          <div key={experience.title} className="timeline-content">
            <div className='image-content'>
             <img className='image-work' src={experience.image} alt="image_work" /> 
            </div>

            <div className='description-content'>
              <h3>{experience.title}</h3>
              <h4>{experience.enterphrise}</h4>
              <p className="timeline-date">{experience.date}</p>
              <br />
              <p className="timeline-description">{experience.description}</p>
            </div>

          </div>
         ))
        }
      </div>
    </div>
  );

}

