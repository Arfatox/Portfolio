'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { Audiowide, Comfortaa } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' });

export default function A4Portfolio() {
    return (
        <main className={`min-h-screen bg-white ${comfortaa.variable} p-8`}>
            <div className="max-w-[210mm] mx-auto bg-white shadow-lg p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className={`text-3xl font-bold text-gray-800 ${audiowide.className}`}>
                        Alexis Doher
                    </h1>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Arfatox" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/alexis-doher-227108265/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* About */}
                <section className="mb-8">
                    <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${audiowide.className}`}>À propos</h2>
                    <p className="text-gray-600 mb-4">
                        Développeur Frontend passionné, actuellement en deuxième année à l'IUT d'Amiens.
                        Je crée des magnifiques sites web fonctionnels.
                    </p>
                    <p className="text-gray-600">
                        Je suis un étudiant en deuxième année d'informatique passionné par le développement frontend.
                        Je me spécialise dans la création d'applications web réactives et uniques en utilisant des
                        technologies modernes comme React, Next.js et Tailwind.
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${audiowide.className}`}>Compétences</h2>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git'].map((skill) => (
                            <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8">
                    <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${audiowide.className}`}>Projets</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                title: "Ce portfolio",
                                description: "Un portfolio créé avec Next.js, TypeScript et Tailwind qui met en valeur mes compétences frontend.",
                                technologies: ["Next.js", "TypeScript", "Tailwind"],
                                link: "/"
                            },
                            {
                                title: "FlagGuessr",
                                description: "Un jeu de devinette de drapeau avec une interface simple et intuitive et une version en anglais.",
                                technologies: ["HTML", "CSS", "JavaScript"],
                                link: "https://github.com/Arfatox/Flagguessr"
                            },
                            {
                                title: "Boulangerie Dona",
                                description: "Création d'un site web pour une boulangerie à partir de zéro en utilisant React, CSS et JavaScript.",
                                technologies: ["React", "Autonomie", "Hébergement"],
                                link: "https://boulangeriedona.fr"
                            }
                        ].map((project, index) => (
                            <div key={index} className="border border-gray-200 p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools */}
                <section className="mb-8">
                    <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${audiowide.className}`}>Outils</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {[
                            { name: 'VS Code', icon: '🧠' },
                            { name: 'Git', icon: '🐙' },
                            { name: 'Figma', icon: '🎨' },
                            { name: 'npm', icon: '📦' },
                            { name: 'Terminal', icon: '⌨️' }
                        ].map((tool, index) => (
                            <div key={index} className="text-center">
                                <span className="text-2xl mb-2 block">{tool.icon}</span>
                                <span className="text-sm text-gray-600">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
} 