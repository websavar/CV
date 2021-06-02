const content = {
    home: {
        id: "1",
        firstname: "Hamidreza",
        lastname: "Soltani",
        profession: "Frontend Developer",
        avatar_url: "/img/profile-avatar.jpg",
        home_bg: "/img/home-bg.jpg"
    },
    about: {
        description:
            "Proficient front-end web developer with 5+ years of experience in user-friendly website design and development. Experienced in SEO and analyzing the websites. Utilized design skills to adapt customization to current designs while improving UI/UX. Passionate about continuous improvement, teamwork, good manners, social skills, customer satisfaction, energetic and enthusiastic with an ability to learn and adapt quickly. Hope to work with a professional team as full-time to learn more.",
        about_url: "/img/profile-about.jpg",
        positions: ["Frontend Developer", "Web Developer", "UI Developer"],
        perspectives: [
            "Interested to obtain a challenging position as Frontend Web Developer",
            "Motivated to learn and use new and modern technologies",
            "Looking for a growing company"
        ],
        personal_info: [
            {
                birthday: "13 Sep 1981"
            },
            {
                location: "Berlin, Germany"
            },
            {
                phone: "0178 826 4798"
            },
            {
                email: "websavar@gmail.com"
            },
            {
                degree: "Master"
            },
            {
                work_permit: "Blue Card EU"
            },
            {
                start_date: "Immediately"
            },
            {
                website: "www.websavar.com"
            }
        ],
        social_links: [
            {
                title: "github",
                link: "https://github.com/websavar/"
            },
            {
                title: "instagram",
                link: "https://www.instagram.com/soltani.art"
            },
            {
                title: "linkedin",
                link: "https://www.linkedin.com/in/hamidreza-soltani/"
            },
            {
                title: "hackerrank",
                link: "https://www.hackerrank.com/websavar/"
            },
            {
                title: "website",
                link: "http://websavar.com/"
            }
        ]
    },
    skills: {
        description:
            "I have been working mostly on the Frontend development side. But I also have experience of working with Backend programming languages. I have a good knowledge of visual design tools too.",
        percent: {
            HTML: 100,
            CSS: 100,
            JavaScript: 90,
            TypeScript: 60,
            React: 80,
            Vue: 60,
            NodeJs: 50,
            Git: 70,
            WordPress: 90,
            Photoshop: 90,
            Illustrator: 70,
            AdobeXD: 80,
            SEO: 80,
            MicrosoftOffice: 100
        }
    },
    work_experience: {
        description:
            "My work experience during the past 5 years as a Frontend Developer. Also, I have experience working as a computer teacher for several years in the education system and the university after graduation.",
        items: [
            {
                title: "Frontend Developer",
                company: "evoach",
                link: "https://www.evoach.me",
                city: "Karlsruhe",
                country: "Germany",
                start_date: "Aug 2020",
                end_date: "March 2021",
                items: [
                    "Weekly product sync meetings (online and In person)",
                    "Created tickets in Jira",
                    "Implemented various UI elements and widgets",
                    "Used Git daily",
                    "Have a keen eye for details and creative mind"
                ],
                projects: "Evoach web application"
            },
            {
                title: "Frontend Web Developer",
                company: "Dadevarzan",
                link: "https://www.dadevarzan.com",
                city: "Esfahan",
                country: "Iran",
                start_date: "Jun 2017",
                end_date: "July 2019",
                items: [
                    "Development of user interfaces with Html5, CSS3, Bootstrap, React, JavaScript and PHP",
                    "Regular alignment and close cooperation with UI, UX designers and back-end developers",
                    "Experience with mobile first and responsive design for different devices"
                ],
                projects:
                    "1and1group.com, fartakdesign.com, safagroup.com, malltina.com"
            },
            {
                title: "Personal Web Projects",
                company: "Freelancer",
                link: "http://www.websavar.me",
                city: "Esfahan",
                country: "Iran",
                start_date: "2016",
                end_date: "2019",
                items: [
                    "Designed and developed many websites with emphasis on WordPress platform",
                    "Developed and supported latest SEO strategies (using Google Analytics)"
                ],
                projects:
                    "teram-packaging.com, nafissilicate.com, shahrak-sazan.com, ryanglob.com, vantile.ca"
            }
        ]
    },
    education: {
        description: "Software engineering was my favorite major!",
        items: [
            {
                title: "Master of Science in Software Engineering",
                university: "Tehran Payame Noor University",
                link: "http://en.pnu.ac.ir/Portal/Home",
                city: "Tehran",
                country: "Iran",
                start_date: "Sep 2008",
                end_date: "Mar 2012",
                items: [
                    "(Certified by ZAB website -German Central Office for Foreign Education)"
                ]
            },
            {
                title: "Bachelor of Science in Software Engineering",
                university: "Esfahan Payame Noor University",
                link: "http://en.pnu.ac.ir/Portal/Home",
                city: "Esfahan",
                country: "Iran",
                start_date: "2016",
                end_date: "2019",
                items: []
            }
        ]
    },
    portfolio: {
        description: "Some portfolio of my web design and development",
        items: [
            {
                title: "malltina",
                link: "https://malltina.com",
                category: "Online shop",
                date: "2019",
                description:
                    "Malltina has succeeded in becoming one of the largest online shop in Iran, adhering to three principles, payment on the spot, 7-day money back guarantee and guaranteeing the authenticity of goods.",
                thumb_img: "/img/portfolio/malltina.jpg",
                images: [
                    "/img/portfolio/malltina-details-1.jpg",
                    "/img/portfolio/malltina-details-2.jpg"
                ],
                technologies: [
                    "HTML5",
                    "CSS3",
                    "React",
                    "NodeJS",
                    "Express",
                    "Bootstrap"
                ]
            },
            {
                title: "Kardan",
                link: "https://kardan.app",
                category: "Web Application",
                date: "2018 - 2020",
                description:
                    "Kardan, as a reference for receiving home and building services, facilitates access to specialists and repairmen, and with the transparency of prices and improving the quality of services, it will make you satisfied. Registration of the order in Kardan is free and the cost of services is paid to the specialist after finishing the work.",
                thumb_img: "/img/portfolio/kardan.jpg",
                images: [
                    "/img/portfolio/kardan-details-1.jpg",
                    "/img/portfolio/kardan-details-2.jpg"
                ],
                technologies: ["HTML5", "CSS3", "JavaScript", "React", "Webpack"]
            },
            {
                title: "Teram_Packaging",
                link: "https://www.teram-group.com/en",
                category: "Web design",
                date: "March 2019",
                description:
                    "In Teram, we provide the graduates with comprehensive training and opportunities for working with advanced printing and packaging machines.",
                thumb_img: "/img/portfolio/teram.jpg",
                images: [
                    "/img/portfolio/teram-details-1.jpg",
                    "/img/portfolio/teram-details-2.jpg",
                    "/img/portfolio/teram-details-3.jpg"
                ],
                technologies: [
                    "HTML",
                    "CSS3",
                    "JavaScript",
                    "PHP",
                    "WordPress",
                    "Google Analytics"
                ]
            },
            {
                title: "evoach",
                link: "https://www.evoach.com/",
                category: "Web Application",
                date: "2020 - 2021",
                description:
                    "Evoach is the next evolution in coaching offering an easy and user-friendly access to coaching for all employees and teams through an intelligent, web-based, selfcoaching chatbot application – without a real coach being involved.",
                thumb_img: "/img/portfolio/evoach.jpg",
                images: [
                    "/img/portfolio/evoach-details-1.jpg",
                    "/img/portfolio/evoach-details-2.jpg",
                    "/img/portfolio/evoach-details-3.jpg",
                    "/img/portfolio/evoach-details-4.jpg"
                ],
                technologies: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "Webpack",
                    "Adobe XD",
                    "Git"
                ]
            },
            {
                title: "1and1group",
                link: "https://en.1and1group.com/",
                category: "Online Shop",
                date: "Jun 2018",
                description:
                    "The central importance of the Industrial Group 1 and 1 is to provide consumers with easy access to healthy and hygienic food through the production of first-rate grade materials.",
                thumb_img: "/img/portfolio/1and1group.jpg",
                images: [
                    "/img/portfolio/1and1-details-1.jpg",
                    "/img/portfolio/1and1-details-2.jpg"
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "PHP",
                    "WordPress",
                    "WooCommerce",
                    "Google Analytics"
                ]
            },
            {
                title: "Cafesabz",
                link: "https://cafesabz.com/",
                category: "Online Shop",
                date: "2019",
                description:
                    "The Green Cafe online store has started its activity in order to increase the culture of using healthy and herbal products, as well as teaching traditional medicine and psychology, and formulates and produces all products using traditional medicine approaches.",
                thumb_img: "/img/portfolio/cafesabz.jpg",
                images: ["/img/portfolio/cafesabz-details-1.jpg"],
                technologies: [
                    "HTML",
                    "CSS",
                    "PHP",
                    "WordPress",
                    "WooCommerce",
                    "MySQL"
                ]
            }
        ]
    },
    personal_skills: {
        description:
            "Excellent team work skills with strong self-initiative ability to work towards deadlines and goals with utmost attention to quality standards. Energetic and enthusiastic with an ability to learn and adapt quickly. People who work with me believe that I have a high sense of responsibility as well as ability to work well under pressure.",
        skills: [
            {
                languages: [
                    "English: Advanced",
                    "German: A1 (Learning)",
                    "Persian: Mother Tongue",
                    "Arabic: Basic"
                ]
            },
            {
                personality: [
                    "Responsible",
                    "Creative",
                    "Loyal",
                    "Team Player",
                    "Problem-Solver"
                ]
            },
            {
                interests: [
                    "Painting",
                    "Music",
                    "Travelling",
                    "Swimming",
                    "Cooking",
                    "Jogging"
                ]
            }
        ]
    },
    recommendations: {
        description: "How would my friends and colleagues describe me!",
        persons: [
            {
                name: "Anke Paulick",
                role: "Co-Founder & -CEO at evoach",
                avatar: "/img/recommendations/Anke-Paulick.jpg",
                description:
                    "Herr Soltani verfügt über eine große und beachtliche Berufserfahrung. Er beherrschte seinen Arbeitsbereich umfassend, fand gute Lösungen und hatte neue Ideen. Er hat die ihm übertragenen Aufgaben stets zu unserer vollen Zufriedenheit erledigt und arbeitete fachmännisch, konzentriert und sauber. Er hat ein gutes grafisches Auge für Softwaredesign und Details. Als kreativer Kopf ist er top besetzt in Rollen an der Schnittstelle zwischen UI/UX und Frontend Entwicklung. Er war ein allseits beliebter Mitarbeiter. Sein Verhalten gegenüber Vorgesetzten, Kollegen und Kunden war stets vorbildlich."
            },
            {
                name: "Majid Karimi",
                role: "CEO at Spadan Dadeh Gostaran",
                avatar: "/img/recommendations/Majid-Karimi.jpg",
                description:
                    "I know Hamidreza for almost one decade. We are colleagues at Ministry of Education and he acts like a role model for me as his own great way of teaching computer courses. In addition, I have been familiar with his outstanding Web Developing skill through several projects which fortunately one of them is for our company. We are completely satisfied with what he designed for us. I must indicate that I have found him as a brilliant, gifted, highly motivated and companionable person."
            },
            {
                name: "Mahdi Rabie",
                role: "Entrepreneur at Dadevarzan",
                avatar: "/img/recommendations/Mahdi-Rabie.jpg",
                description:
                    "Hamidreza has a great personality . he is very friendly and I really enjoy when I work with him. He is intelligent and usually find best solutions for problems. He can learn everything faster than most people."
            },
            {
                name: "Mohammad Modrek",
                role: "Full Stack Developer at Lowell",
                avatar: "/img/recommendations/Mohammad-Modrek.jpg",
                description:
                    "Hamid is really good in programming and managing a project and Epics. he is flexible and always willing to help team in different scope. Senior Frontend Developer is really fit for him. he is full of energy and you can see he is smiling always. When there is am Incident he is always the first volunteer to fix and struggle with it."
            }
        ]
    },
    contact: {
        description:
            "Please feel free to contact me for any further information that you may need.",
        info: [
            {
                location: "Seesener Str. 40, 10711 Berlin"
            },
            {
                email: "websavar@gmail.com"
            },
            {
                phone: "+49 178 826 4798"
            },
            {
                map_address:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.1152917807526!2d13.290431315774445!3d52.49515257980961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c6ba0f66ff%3A0x20fe6c865a0c8ad3!2sSeesener%20Str.%2040%2C%2010711%20Berlin!5e0!3m2!1sen!2sde!4v1621729653383!5m2!1sen!2sde"
            }
        ]
    }
};

export default content;
