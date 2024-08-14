
import { CourseworksIcon, ProgrammingIcon, AppICon } from '@/utils/icons'
import VIBlogo from '@/public/VIBlogo.png'
import { OrigamiIcon } from 'lucide-react'

export const experienceArr = [
    {
        key: 1,
        title: 'Relevant Coursewords',
        description: "Intro to Programming, Data Structures, Discrete Mathematics, Intermediate Statistics",
        icon: CourseworksIcon
    },
    {
        key: 2,
        title: 'Programming Languages',
        description: "Python, Java, JavaScript, R",
        icon: ProgrammingIcon
    },
    {
        key: 3,
        title: 'Applications',
        description: "VSCode, 3T Studio, MongoDB, Postman, Git, Github, Figma, Adobe Illustrator",
        icon: AppICon
    }
]

export const workExperienceArr = [
    {
        key: 1,
        icon: VIBlogo,
        title: 'Application Development Intern',
        organization: 'Digital Lab @Vietnam Internation Bank',
        link: "ttps://www.vib.com.vn/vn/home",
        startDate: 'June 2024',
        endDate: 'August 2024',
        description1: 'Collaborated with fellow interns and engineer team to develop Intranet web application using MongoDb, Studio3T, and PL/SQL for data management, Next.js, Zustand for front-end, Node.js, Express.js and REST API endpoints for back-end, Postman for API testing, ensuring seamless users’ experience and promoting overall working productivity by 50%',
        description2: 'Conducted research on AI and Cloud Technologies integration in core banking system and financial service, specifically OpenAI and AI Search services in Microsoft Azure environment, which identified mass potential in data management, maintenance, security, and faster data query in core banking system'
    }
]

