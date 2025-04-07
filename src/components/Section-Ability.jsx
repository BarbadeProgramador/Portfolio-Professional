import '../styles/components/Section-Ability.css';
import { Technologies } from '../data/Data';
import { Card_Ability } from './Tecnologys';

export function Ability() {

    let tecnologias = Technologies
    // console.log(tecnologias)

    return (
        <div className="timeline-container">
            <h2 className="timeline-title">Stack Tecnologico</h2>
                <div className="container-ability">
                    {tecnologias.map((tecnologia, index) => (
                        
                            <Card_Ability data={tecnologia} />
                
                    ))}
                </div>
        </div>
    )
}
