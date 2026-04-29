import React from 'react'
import { skills } from '../utils/data'
import SkillCard from './SkillCard'



function Skills() {



  return (
    <div style={{display:"flex"}}>
    {
        skills.map((skill)=>{
            return (
             <SkillCard
             data={skill}/>
            )
        })
    }
    </div>
  )
}

export default Skills
