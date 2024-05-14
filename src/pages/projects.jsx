import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import prof from "../assets/prof.png";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			{/* <Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet> */}

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="main1">
							<div>

                          
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
						I've delved into several web development projects, each representing a unique facet of my skills and creativity. From crafting responsive user interfaces to implementing robust backend systems, my portfolio offers a glimpse into my expertise in web technologies. Dive in and explore the websites and applications I've built. Whether it's designing intuitive user experiences or optimizing website performance, I'm passionate about creating impactful digital solutions that make a difference.
							</div>
						</div>
							<div>
  <img src={prof} />
							</div>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
