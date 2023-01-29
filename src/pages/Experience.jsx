import React from 'react'
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Experience() {
	return (
		<div className='expContainer'>
			🍀 This Component Experience.jsx
			<div className="expContainer">
				<div className='expElements'>

					<ol>
						<li>
							<SchoolIcon />
							<h3>High School Graduation 2014</h3>
							<p>Bahçeşehir Collage</p>
						</li>
						<li>
							<BusinessCenterIcon />
							<h3>Maksan Proje</h3>
							<p>Project Developer</p>
						</li>
						<li>
							<ElectricBoltIcon />
							<h3>Senkron Elektronet</h3>
							<p>Software Developer</p>
						</li>
					</ol>

				</div>
			</div>
		</div>
	)
}

export default Experience
