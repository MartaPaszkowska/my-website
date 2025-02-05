import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function HomePage() {
	return (
		<>
			<section id="hero">
				<HeroSection />
			</section>
			<section id="about">
				<AboutSection />
			</section>
			<section id="projects">
				<ProjectsSection />
			</section>
			<section id="contact">
				<ContactSection />
			</section>
		</>
	);
}

export default HomePage;
