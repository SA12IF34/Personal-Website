import {useState, useEffect} from 'react';
import { api } from '../App';

import SectionLayout from '../layout/SectionLayout';
import SkillsElement from '../components/SkillsElement';

function Skills() {
  
  const [skills, setSkills] = useState([]);
  
  async function handleGetSkills() {
    try {
      const response = await api.get('skills/');

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        setSkills(data);
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.querySelector('title').textContent = 'Saif Chan | Skills';
    handleGetSkills();
  }, [])

  return (
    <SectionLayout>
      <div className='skills-page page'>
        <div className='skills-content'>
          <h2>Skills in a Nutshell:</h2>
          <div className='skills-container'>  
            {skills.length > 0 && skills.map(category => {
              return (
                <SkillsElement category={category} />
              )  
            })}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Skills;