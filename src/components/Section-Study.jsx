import React from 'react';
import '../styles/components/Section-Study.css';
import { Study_data } from '../data/Data';
import { useContext, useEffect, useState } from 'react';

export  function Study(){

    let dataInter = Study_data;
    let [data, setData] = useState([]);
    // let data = Experience;
    // console.log(data);  
  
    useEffect(() => {
      setData(dataInter);
      console.log(dataInter)
    }, [])
  
  

  return (
    <div className="timeline-container">
    <h2 className="timeline-title">Estudios y Certificaciones</h2>

    <div className="timeline">

      {data.map(experience => (

        <div key={experience.title} className="timeline-content">
          <div className='image-content'>
           <img className='image-work' src={experience.image} alt="image_work" /> 
          </div>

          <div className='description-content-two'>
            <h3>{experience.title}</h3>
            <h4>{experience.subTitle}</h4>
            <p className="timeline-date">{experience.date}</p>
          </div>

        </div>
       ))
      }
    </div>
  </div>
  );
}