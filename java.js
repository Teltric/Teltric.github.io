
document.getElementById("year").textContent = new Date().getFullYear();


const sections = ["summary","education","skills","projects","resume","contact"].map(id => document.getElementById(id));
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const linkFor = (id) => navLinks.find(a => a.getAttribute("href") === "#" + id);

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			navLinks.forEach(a => a.classList.remove("active"));
			const link = linkFor(entry.target.id);
			if (link) link.classList.add("active");
		}
	});
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sections.forEach(s => s && observer.observe(s));