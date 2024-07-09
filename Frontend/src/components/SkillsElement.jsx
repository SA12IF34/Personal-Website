import React from 'react'

function SkillsElement({category}) {
  return (
    <div className="skills-category">
        <h3>{category.category}</h3>
        <div className='skills-list'>
            {category.skills.map(skill => {
            return (
                <div>
                <span>{skill.skill}</span>
                {skill.example_project && (<a target='_blank' href={skill.example_project[0]}>{skill.example_project[1]}</a>)}
                </div>
            )
            })}
        </div>
        <div className='aggregative-project'>
            {category.aggregative_project && (<a target='_blank' href={category.aggregative_project}>Aggregative Project of All Skills</a>)}
        </div>
    </div>
    
  )
}

export default SkillsElement;