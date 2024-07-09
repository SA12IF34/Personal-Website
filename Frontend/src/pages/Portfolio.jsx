import {useState, useEffect} from 'react';
import { api } from '../App';

import SectionLayout from '../layout/SectionLayout';
import ProjectElement from '../components/ProjectElement';
import StudyCaseElement from '../components/StudyCaseElement';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  const [studyCase, setStudyCase] = useState();
  

  async function handleGetProjects() {
    try {
      const response = await api.get('portfolio/projects/');

      if (response.status === 200) {
        const data = await response.data;

        setProjects(data)
      }
    } catch (error) {
      console.log(error); 
    }
  }

  async function handleGetStudyCase() {
    try {
      const response = await api.get('portfolio/studycase/');

      if (response.status === 200) {
        const data = await response.data;

        setStudyCase(data);
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.querySelector('title').textContent = 'Saif Chan | Portfolio';
    
    handleGetProjects();
    handleGetStudyCase();
  }, [])

  return (
    <SectionLayout>
      <div className='portfolio-page page'>
        <div className='portfolio-content'>
          <div className='projects'>
            {projects.map(project => {
              return (
                <ProjectElement project={project} />
              )
            })}
          </div>
          {studyCase && (<StudyCaseElement project={studyCase} />)}
        </div>
      </div>
    </SectionLayout>
  )
}

export default Portfolio;