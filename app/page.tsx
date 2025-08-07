"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReactivex,
  SiPhp,
} from "react-icons/si";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Next.js", icon: SiNodedotjs },
    { name: "MySQL", icon: SiMysql },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "PHP", icon: SiPhp },
  ];

  const projects = [
    {
      title: "Sistem Lelang Online",
      description:
        "Sistem Lelang yang berbasis web dengan fitur lelang real-time.",
      technologies: ["HTML", "JavaScript", "Tailwind CSS"],
      image: "/slo.png",
      github: "https://github.com/sepUnch/Pemweb-UTS---Sistem-Lelang-Onlie-",
    },
    {
      title: "Dapur Tekno",
      description: "Website jual beli aksesoris dan komponen komputer.",
      technologies: ["React", "Next.Js", "TypeScript", "Prisma"],
      image: "/dapurtekno.png",
      github: "https://github.com/sepUnch/pemweb-uas-dapurTekno",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-300 via-cyan-400 to-blue-700 bg-clip-text text-transparent animate-gradient">
            Fahri Arkan
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/profil.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white dark:border-slate-700 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-300 via-cyan-400 to-blue-700 bg-clip-text text-transparent animate-gradient">
            Fahri Arkan
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Computer Science Student | Passionate about Backend Development &
            Real-World Tech Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fahrizulfadli14@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-500 via-cyan-500 to-blue-700 hover:from-slate-600 hover:via-cyan-600 hover:to-blue-800"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
            <a
              href="https://github.com/sepUnch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                See My Projects On GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-white/50 dark:bg-slate-800/50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                Hello! I'm Fahri Arkan 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I’m a 5th-semester Computer Science student at Esa Unggul
                University with a strong passion for web and mobile development.
                I have hands-on experience building full-stack applications
                using modern technologies like React, Next.js, and databases
                such as MySQL and MongoDB.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Currently, I’m actively looking for internship opportunities
                where I can improve my technical skills and contribute to
                real-world projects. I’m a fast learner, adaptable to new
                technologies, and enjoy solving complex problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  IPK: 3.86/4.0
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  Semester 5
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Available for Internship
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {Array.isArray(skill.icon)
                        ? skill.icon.map((IconComp, idx) => (
                            <IconComp
                              key={idx}
                              className="h-6 w-6 text-blue-600 dark:text-blue-400"
                            />
                          ))
                        : skill.icon && (
                            <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          )}
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-100">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-slate-100">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-white/50 dark:bg-slate-800/50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                Contact Me
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                I'm open to discussing internship opportunities, project
                collaborations, or simply sharing my experiences with
                technology. Feel free to contact me!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-300">
                    fahrizulfadli14@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/sepUnch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/fahri-arkan-b6a211334/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:fahrizulfadli14@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Fahri Arkan. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
