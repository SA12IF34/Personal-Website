import React from 'react'

function StudyCaseElement({project: {project_name, project_description, project_workflow, project_link, project_repo, work_time}}) {
  return (
    <div className='study-case-container'>
      <h1>Study Case</h1>
      <br />
      <div className='study-case'>
        <div>
          <h2>{project_name}</h2>
          <span>took {work_time}</span>
          <a target='_blank' href={project_link}>project link</a>
          <a target="_blank" href={project_repo}>project repo</a>
        </div>
        
        <div>
          <p>
            {project_description}
          </p>
        </div>

        <div>
          <ul>
            {project_workflow.map((point) => {
              return (
                <li>{point}</li>
              )
            })}
          </ul>
        </div>

        <div>
          <a target='_blank' href={project_link}>project link</a>
          <a target='_blank' href={project_repo}>project repo</a>
        </div>

      </div>
    </div>
  )
}

export default StudyCaseElement;