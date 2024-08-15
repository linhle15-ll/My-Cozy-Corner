
import { CourseworksIcon, ProgrammingIcon, AppICon } from '@/utils/icons'
import VIBlogo from '@/public/VIBlogo.png'
import STEAMlogo from '@/public/STEAMlogo.jpg'
import GWC from '@/public/GWC.png'
export const experienceArr = [
    {
        key: 1,
        title: 'Relevant Coursewords',
        description: "Intro to Programming, Data Structures, Discrete Mathematics, Intermediate Statistics",
        icon: CourseworksIcon
    },
    {
        key: 2,
        title: 'Programming Skills',
        description: "Python, Java, JavaScript, R, Full-stack Web Development with MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        icon: ProgrammingIcon
    },
    {
        key: 3,
        title: 'Applications',
        description: "REST APIs, Microsoft Azure, OpenAI API, Zustand, VSCode, 3T Studio, Postman, Git, Figma, Adobe Illustrator",
        icon: AppICon
    }
]

export const workExperienceArr = [
    {
        key: 1,
        icon: VIBlogo,
        title: 'Full-stack Application Development Intern',
        organization: 'Digital Lab @Vietnam Internation Bank',
        link: "https://www.vib.com.vn/vn/home",
        startDate: 'June 2024',
        endDate: 'August 2024',
        description1: 'Collaborated with fellow interns and engineer team to develop Intranet web application using MongoDb, Studio3T, and PL/SQL for data management, Next.js, Zustand for front-end, Node.js, Express.js and REST API endpoints for back-end, Postman for API testing, ensuring seamless users’ experience and promoting overall working productivity by 50%',
        description2: 'Conducted research on AI and Cloud Technologies integration in core banking system and financial service, specifically OpenAI and AI Search services in Microsoft Azure environment, which identified mass potential in data management, maintenance, security, and faster data query in core banking system'
    }
]

export const leardershipExperienceArr = [
    {
        key: 1,
        icon: GWC,
        title: 'Marketing Coordinator, Tech Event Organizer',
        organization: 'Girls Who Code MHC',
        link: "https://www.facebook.com/thesteamprojectvn/",
        startDate: 'April 2022',
        endDate: 'April 2024',
        description1: 'Spearhead the promotion of technology and innovation within Mount Holyoke College and Girls Who Code organization by organizing 5 workshops on Hackathon, Industry Insight, Tech Research, Tech QnA, in partnership with Research students and tech industry experts, attracting an average of 50 students per session',
        description2: 'Innovate Social Media strategies to boost organization’s impact within communities and bring technologies closer to college students using copywriting and graphic design skills'
    },
    {
        key: 2,
        icon: STEAMlogo,
        title: 'Co-founder/Former President',
        organization: 'The STEAM Project Ha Tinh',
        link: "https://www.facebook.com/thesteamprojectvn/",
        startDate: 'April 2022',
        endDate: 'April 2024',
        description1: 'Established a project pioneering STEAM education that focused on science experiments, coding challenges, presentations for 140 secondary and high school students interested in Science and Technology in 2022 and 2023',
        description2: 'Managed a team of 50 to organize summer camps and science fairs, which include building operation program, planning basic coding projects, and working on logistics, partnership, media in 2 seasons with 3 months/season'
    },

]

