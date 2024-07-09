import React from 'react'

function ProjectElement({project}) {
  return (
    <div className={`project-${project.project_ui}`}>
        {project.image && (
            <img src={project.image} />
        )}
        <h3>{project.name}</h3>
        <p>
            {project.description}
        </p>
        <div className='skills'>
            {project.skills.map((skill, index) => {
                return (
                    <>
                    <span>{skill}</span>
                    {index < project.skills.length-1 ? (<span> / </span>) : (<></>)}
                    </>
                )
            })}
        </div>
        <div className='links'>
            <a target='_blank' href={project.link}>project link</a>
            <a target='_blank' href={project.repo_link}>repo link</a>
        </div>
    </div>
  )
}

export default ProjectElement;