import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
	const now = new Date();
	return (

		<div className='footer'>
			🍀 This Component is Footer.jsx
			<div className='socialMedia'>
				<InstagramIcon />
				<TwitterIcon />
				<FacebookIcon />
				<LinkedInIcon />
				<GitHubIcon />
			</div>

			<p> &copy; {now.getFullYear()} {now.getMonth()} &nbsp;
				<a href="https://github.com/ordinat05" target="_blank"><GitHubIcon />https://github.com/ordinat05
				</a>
			</p>

		</div>
	)
}

export default Footer
