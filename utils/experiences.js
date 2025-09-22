
import { CourseworksIcon, ProgrammingIcon, AppICon, ToolIcon } from '@/utils/icons'
import VIBlogo from '@/public/VIBlogo.png'
import STEAMlogo from '@/public/STEAMlogo.jpg'
import GWC from '@/public/GWC.png'
import VSA from '@/public/VSA.png'
import MHCLogo from '@/public/MHCLogo.png'
import FPTISLogo from '@/public/fptis_logo.jpeg'

export const experienceArr = [
    {
        key: 1,
        title: 'Programming',
        description: "Python, Java, JavaScript, TypeScript",
        icon: ProgrammingIcon
    },
    {
        key: 2,
        title: 'Systems, Cloud & Databases',
        description: "Linux, Docker, MongoDB, SQL, RabbitMQ, MinIO, CI/CD Pipelines, Vercel, Azure",
        icon: AppICon
    },
    {
        key: 3,
        title: 'Frameworks',
        description: "FastAPI, Node.js, Express.js, React.js, Next.js, REST API",
        icon: CourseworksIcon
    },
    {
        key: 4,
        title: 'Tools',
        description: "Git, GitHub, Postman, DrawIO, Figma (UI/UX Prototyping and Engineering)",
        icon: ToolIcon
    }
]

export const workExperienceArr = [
    {
        key: 1,
        icon: FPTISLogo,
        title: 'Software Engineer Intern',
        organization: 'AI R&D Center, FPT Information System',
        link: "https://fpt-is.com/en/",
        startDate: 'June 2025',
        endDate: 'Sep 2025',
        descriptions: [
            'Architected and implemented a full-stack OCR gateway with FastAPI and MongoDB, enabling seamless and highly secure document uploading and processing for 1000+ active users.',
            'Designed and deployed 15+ API endpoints and a modular microservice architecture and data modeling for authentication with JWT, input classification, OCR execution, storage, delivery.',
            'Built the frontend architecture with Next.js, NextUI, Axios, and React Query, optimizing server state management and enhancing user experience with responsive UI/UX.',
            'Containerized microservices with Docker, creating a shared network for inter-service communication and ensuring consistent, scalable deployments across multiple environments.',
            'Integrated asynchronous message queues (RabbitMQ) to optimize throughput and reduce latency by 25\%.'
        ]
    },
    {
        key: 2,
        icon: VIBlogo,
        title: 'Software Development Intern',
        organization: 'Digital Lab @Vietnam Internation Bank',
        link: "https://www.vib.com.vn/vn/home",
        startDate: 'June 2024',
        endDate: 'August 2024',
        descriptions: [
            'Collaborated with interns and engineers to enhance VIB’s internal web application used by VIB employees to access organizational news and employee’ profiles using MongoDB as database, React.js, Express.js, Node.js.',
            'Designed Postman API testing workflows and comprehensive unit tests, cutting bug reopen rate by 22%.',
            'Worked on user research with 5,000+ employees and improved UI/UX with Figma and front-end’s state management with Zustand, boosting internal app productivity and interest by 40% based on feedback from 500+ employees.'
        ]
    },
    {
        key: 3,
        icon: MHCLogo,
        title: 'Teaching Assistant | Data Structures',
        organization: 'Computer Science Department, Mount Holyoke College',
        link: "https://www.mtholyoke.edu/directory/departments-offices-centers/computer-science",
        startDate: 'Sep 2024',
        endDate: 'Present',
        descriptions: [
            'Led weekly lab sessions, office hours, and host 1:1 sessions for +30 students, assisting with code reviews, debugging, and conceptual problem-solving in Java and data structures.',
            'Provided feedback on major programming assignments and contributed to grading rubrics, helping students strengthen algorithmic thinking and software design skills, driving a 35% average improvement in academic outcomes.'
        ]
    },

    {
        key: 4,
        icon: MHCLogo,
        title: 'Teaching Assistant, Course Grader | Applic Statistics',
        organization: 'Mathematics and Statistics Department, Mount Holyoke College',
        link: "https://www.mtholyoke.edu/directory/departments-offices-centers/mathematics-and-statistics",
        startDate: 'Sep 2024',
        endDate: 'May 2025',
        descriptions: [
            'Facilitated 4-hour weekly evening help sessions, supporting 50 students with core statistical concepts, R-programming, Rstudio labs, providing assignment guidance',
            'Improved 40% of students’ academic efficiency and 20% in test scores averagely',
            'Collaborated closely with course’s instructor to design assignments for students, grading students’ homework and lab work'
        ]
        
    },

]

export const leardershipExperienceArr = [
    {
        key: 1,
        icon: GWC,
        title: 'Marketing Coordinator, Tech Event Organizer',
        organization: 'Girls Who Code College Loops @MHC',
        link: "https://www.instagram.com/mhc_gwc/",
        startDate: 'Oct 2023',
        endDate: 'Current',
        description1: 'Spearhead the promotion of technology and innovation within Mount Holyoke College and Girls Who Code College Loops',
        description2: 'Organized monthly workshops on Hackathon, Industry Insight, Tech Research, Tech QnA, in partnership with Research students and Tech industry experts, attracting an average of 60 students per session in 2023 - 2024'
    },
    {
        key: 2,
        icon: VSA,
        title: 'President, Former Marketing Coordinator',
        organization: 'MHC Vietnamese Student Association',
        link: "https://www.instagram.com/mhc.vsa/",
        startDate: 'Sep 2023',
        endDate: 'Current',
        description1: 'Took charge of managing and hosting annual Vietnamese cultural events such as Vietnam Night, Coffee Workshop, and Lunar New Year, thus enhancing community engagement and awareness of Vietnamese culture',
        description2: 'Successfully organized and performed in 2024 Vietnam Night, as measured by the attendance of > 200 students and faculties in Five College Consortium and 60% increase in Media promotion'
    },
    {
        key: 2,
        icon: STEAMlogo,
        title: 'Co-founder/Former President',
        organization: 'The STEAM Project Ha Tinh',
        link: "https://www.facebook.com/thesteamprojectvn/",
        startDate: 'April 2022',
        endDate: 'April 2024',
        description1: 'Established and led a project pioneering STEAM education focusing on science experiments, coding challenges, presentations for 140 students interested in Science and Technology in 2022 and 2023',
        description2: 'Generally managed project operation with other department leaders and 40 members, including Marketing, Finance, HR, Logistics, Content, successfully organized 2 seasons of STEAM Summer Camp in 2022 and 2023'
    },

]

