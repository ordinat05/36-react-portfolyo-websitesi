import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helper/ProjectList'

function Projects() {
	return (
		<div className='projects'>
			🍀 This Component Projects.jsx
			<div className='projectList'>
				{ProjectList.map((project, index) => {
					return <ProjectItem key={index} name={project.name} image={project.image} />
				})}
			</div>
		</div>
	)
}

export default Projects
