'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { Permanent_Marker, Audiowide, Comfortaa } from 'next/font/google';

const permanentMarker = Permanent_Marker({ weight: '400', subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' });

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const projects = [
    {
        id: 1,
        title: "Ce portfolio",
        description: "Un portfolio créé avec Next.js, TypeScript et Tailwind qui met en valeur mes compétences frontend.",
        image: "/logo.png",
        link: "/",
        technologies: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
        id: 2,
        title: "FlagGuessr",
        description: "Un jeu de devinette de drapeau avec une interface simple et intuitive et une version en anglais.",
        image: "https://www.mpadeco.com/resize/500x500/zc/3/f/0/src/sites/mpadeco/files/products/34f10dfad38a2b522a5c9b9a6f3963f7.png",
        link: "https://github.com/Arfatox/Flagguessr",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 3,
        title: "Boulangerie Dona",
        description: "Création d'un site web pour une boulangerie à partir de zéro en utilisant React, CSS et JavaScript.",
        image: "https://boulangeriedona.fr/assets/favicon-BQJIQYsk.ico",
        link: "https://boulangeriedona.fr",
        technologies: ["React", "Autonomie", "Hébergement"]
    }
];

export default function Home() {
    return (
        <main className={`min-h-screen bg-gradient-to-b from-gradient-top via-gradient-middle to-gradient-bottom ${comfortaa.variable} scroll-smooth`}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-top/95 backdrop-blur-md border-b border-accent/20">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-2xl font-bold text-white ${audiowide.className}`}
                    >
                        <a href="/" className="text-white hover:text-accent transition-colors">Portfolio</a>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex space-x-4"
                    >
                        <a href="#about" className="text-white hover:text-accent transition-colors">À propos</a>
                        <a href="#projects" className="text-white hover:text-accent transition-colors">Projets</a>
                        <a href="/a4" className="text-white hover:text-accent transition-colors">Version A4</a>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-8 pt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className={`text-6xl md:text-8xl font-bold mb-6 text-white ${audiowide.className}`}
                    >
                        Je suis <span className="text-accent"><br />Alexis Doher<span
                            className="inline-block ml-1 text-accent animate-[blink_1s_steps(1)_infinite]"
                        >_</span></span>
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-white/80 mb-12"
                    >
                        Développeur Frontend passionné, actuellement en deuxième année à l'IUT d'Amiens.
                        Je crée des magnifiques sites web fonctionnels.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center space-x-6"
                    >
                        <a
                            href="https://github.com/Arfatox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-all duration-300 text-white"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alexis-doher-227108265/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-all duration-300 text-white"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Quote Section */}
            <section className="min-h-screen flex items-center justify-center -mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <blockquote className={`text-3xl md:text-4xl font-bold text-white/90 italic ${permanentMarker.className}`}>
                        "Fume la vie avant qu'elle te fume"
                    </blockquote>
                    <p className="text-xl text-white/70 mt-4 mr-4 text-right">— Un très bon ami</p>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 scroll-mt-32 -mt-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mx-12 mb-12 text-center text-white ${audiowide.className}`}
                    >
                        À propos de moi
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="mx-12"
                        >
                            <p className="text-white/90 mb-6 text-lg">
                                Je suis un étudiant en deuxième année d'informatique passionné par le développement frontend.
                                Je me spécialise dans la création d'applications web réactives et uniques en utilisant des
                                technologies modernes comme React, Next.js et Tailwind.
                            </p>
                            <p className="text-white/90 text-lg">
                                Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies,
                                de contribuer à des projets open-source ou de travailler sur des projets personnels pour améliorer mes compétences.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="bg-accent/10 p-8 mx-12 rounded-2xl backdrop-blur-sm border border-accent/20"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">Compétences</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Personal Story Section */}
            <section className="py-40 px-8 -mt-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 text-center text-white ${audiowide.className}`}
                    >
                        Mon Parcours
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-dark/40 p-8 rounded-2xl backdrop-blur-sm border border-accent/20"
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-white">Mon Histoire</h3>
                                <p className="text-white/90 mb-6 text-lg">
                                    Passionné par la technologie depuis mon plus jeune âge, j'ai découvert le développement web
                                    lors de mes années de lycée. Cette découverte a été une révélation qui a orienté ma carrière vers
                                    le développement frontend.
                                </p>
                                <p className="text-white/90 text-lg">
                                    J'aime créer des expériences utilisateur intuitives et esthétiques tout en faisant preuve de créativité.
                                    Chaque projet est pour moi une opportunité d'apprendre
                                    et de m'améliorer.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-white">Mes Objectifs</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">→</span>
                                        <span className="text-white/90">Développer des applications web modernes et performantes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">→</span>
                                        <span className="text-white/90">Maîtriser un large éventail de technologies frontend</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">→</span>
                                        <span className="text-white/90">Contribuer à des projets qui me tiennent à coeur</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">→</span>
                                        <span className="text-white/90">Mettre mes connaissances au service du plus grand nombre</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">→</span>
                                        <span className="text-white/90">Proposer un service personnalisé et adapté à chacun</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hobbies Section */}
            <section className="py-6 px-8 -mt-20">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 text-center text-white ${audiowide.className}`}
                    >
                        Mes Passions
                    </motion.h2>
                    <div className="hobbies-container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Informatique",
                                    icon: "💻",
                                    description: "Je suis passionné autant par le software que par le hardware. J'aime autant coder qu'explorer de nouveaux frameworks, que de monter des machines ou comprendre le fonctionnement des composants électroniques."
                                },
                                {
                                    title: "Géographie",
                                    icon: "🌍",
                                    description: "La géographie est une passion qui me permet de découvrir le monde. J'aime particulièrement étudier les différents pays et leurs paysages ainsi que leur drapeau, à travers différents jeux, que ce soit le site que j'ai créer ou geoguessr"
                                },
                                {
                                    title: "Lecture",
                                    icon: "📚",
                                    description: "La lecture est une activité qui me permet de m'évader et d'apprendre. Je lis majoritairement des mangas, aussi bien en français qu'en anglais. Il m'arrive de lire des romans, mon préféré étant 'La maison des feuilles' de Mark Z. Danielewski"
                                },
                                {
                                    title: "Dessin",
                                    icon: "🎨",
                                    description: "Le dessin est une activité que je pratique rarement mais que j'ai toujours aimé faire. Je ne suis pas très bon mais je prends du plaisir à grifonner ou doodler."
                                },
                                {
                                    title: "Musique",
                                    icon: "🎵",
                                    description: "La musique est un moyen pour moi de me concenter, elle m'aconpagne dans tout mes moments. Je collectionne aussi les vinyles de mes artises préférés tels que coldplay et girl in red"
                                },
                            ].map((hobby, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-dark/50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-dark/60 transition-all duration-300 max-w-[400px] mx-auto"
                                >
                                    <span className="text-4xl mb-4">{hobby.icon}</span>
                                    <h3 className="text-xl font-semibold mb-4 text-white">{hobby.title}</h3>
                                    <p className="text-white/80 text-sm">{hobby.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="py-28 px-8 -mt-10">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 text-center text-white ${audiowide.className}`}
                    >
                        Mes Outils
                    </motion.h2>
                    <div className="tools-container">
                        {[
                            { name: 'Visual Studio Code', icon: '🧠' },
                            { name: 'Git bash', icon: '🐚' },
                            { name: 'GitHub', icon: '🐙' },
                            { name: 'Figma', icon: '🎨' },
                            { name: 'npm', icon: '📦' },
                            { name: 'React', icon: '⚛️' },
                            { name: 'Next.js', icon: '⏭️' },
                            { name: 'TypeScript', icon: '📘' },
                            { name: 'Tailwind CSS', icon: '🌊' },
                            { name: 'Terminal', icon: '⌨️' }
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="tool-card bg-dark/50 p-6 rounded-2xl flex flex-col items-center text-center"
                            >
                                <span className="text-4xl mb-4">{tool.icon}</span>
                                <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-14 px-8 scroll-mt-32 -mt-14">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 text-center text-white ${audiowide.className}`}
                    >
                        Mes Projets
                    </motion.h2>
                    <div className="projects-container">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="project-card bg-dark/50 p-6 rounded-2xl"
                            >
                                <div className="h-48 bg-accent/10 rounded-xl mb-4 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-white/80 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                                >
                                    Voir le Projet <FaArrowRight className="ml-2" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CV Section */}
            <section id="cv" className="py-10 px-8 pb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl font-bold mb-12 text-center text-white ${audiowide.className}`}
                    >
                        Mon CV
                    </motion.h2>
                    <div className="cv-container">
                        {[
                            { name: 'Mon CV', icon: '📄', link: './CV Alexis DOHER.pdf' },
                        ].map((cv, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="tool-card bg-dark/50 p-6 rounded-2xl items-center text-center justify-self-center"
                            >
                                <a href={cv.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-accent hover:text-accent/80 transition-colors">
                                    <span className="text-4xl mb-4">{cv.icon}</span><br></br>
                                    <h3 className="text-lg font-semibold text-white">{cv.name}</h3>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </main >
    );
} 