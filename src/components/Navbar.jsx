import { useEffect, useState } from "react";

import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiX,
} from "react-icons/fi";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Detect current section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const item of navItems) {
                const section = document.getElementById(item.id);

                if (!section) continue;

                const sectionTop = section.offsetTop;
                const sectionBottom =
                    sectionTop + section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    setActiveSection(item.id);
                    break;
                }
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500 bg-purple-500/10 font-bold text-purple-400">
                        AK
                    </div>

                    <span className="text-lg font-semibold text-white">
                        Ankur Kumar
                    </span>
                </a>


                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">

                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${
                                activeSection === item.id
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}

                </div>


                {/* Desktop Right */}
                <div className="hidden items-center gap-3 md:flex">

                    {/* Resume */}
                    <a
                        href="/resume/Ankur-Kumar-Resume.pdf"
                        download="Ankur-Kumar-Resume.pdf"
                        className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
                    >
                        Resume
                    </a>

                </div>


                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <FiX size={23} />
                    ) : (
                        <FiMenu size={23} />
                    )}
                </button>

            </div>


            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">

                    {/* Navigation */}
                    <div className="flex flex-col gap-2">

                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={closeMenu}
                                className={`rounded-lg px-4 py-3 transition ${
                                    activeSection === item.id
                                        ? "bg-purple-500/10 text-purple-400"
                                        : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>


                    {/* Mobile Social Links */}
                    <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">

                        {/* GitHub */}
                        <a
                            href="https://github.com/ankur-539"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 hover:text-purple-400"
                        >
                            <FiGithub />
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/ankur539"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 hover:text-purple-400"
                        >
                            <FiLinkedin />
                        </a>


                        {/* Email */}
                        <a
                            href="mailto:ankurweb539@gmail.com"
                            aria-label="Email"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 hover:text-purple-400"
                        >
                            <FiMail />
                        </a>


                        {/* Resume */}
                        <a
                            href="/resume/Ankur-Kumar-Resume.pdf"
                            download="Ankur-Kumar-Resume.pdf"
                            className="ml-auto rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
                        >
                            Resume
                        </a>

                    </div>

                </div>
            )}

        </nav>
    );
}

export default Navbar;