
import { CourseworksIcon, ProgrammingIcon, AppICon } from '@/utils/icons'
import VIBlogo from '@/public/VIBlogo.png'
import STEAMlogo from '@/public/STEAMlogo.jpg'
import GWC from '@/public/GWC.png'
import VSA from '@/public/VSA.png'
import MHCLogo from '@/public/MHCLogo.png'

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
        description1: 'Collaborated with fellow interns and learned from engineers to develop an Intranet web application using MongoDb, Studio3T, Next.js, Node.js, Express.js, REST API, Zustand, Postman, ensuring seamless users’ experience and promoting overall working productivity by 50%',
        description2: 'Conducted research on AI and Cloud Technologies on Microsoft Azure’s integration in banking system and financial service to improve efficiency, privacy, and data maintenance',
        description3: 'Developed a Chatbot using Azure OpenAI API and MERN stack that helped users train their own Chatbot to process business documents faster and more securely'
    },
    {
        key: 2,
        icon: MHCLogo,
        title: 'Full-stack Application Development Intern',
        organization: 'Digital Lab @Vietnam Internation Bank',
        link: "https://www.mtholyoke.edu/directory/departments-offices-centers/mathematics-and-statistics",
        startDate: 'Sep 2024',
        endDate: 'Current',
        description1: 'Facilitated 4-hour weekly evening help sessions, supporting 50 students with core statistical concepts, R-programming, Rstudio labs, providing assignment guidance',
        description2: 'Improved 40% of students’ academic efficiency and 20% in test scores averagely',
        description3: 'Collaborated closely with course’s instructor to design assignments for students, grading students’ homework and lab work'
    },

]

export const leardershipExperienceArr = [
    {
        key: 1,
        icon: GWC,
        title: 'Marketing Coordinator, Tech Event Organizer',
        organization: 'Girls Who Code MHC',
        link: "https://www.facebook.com/thesteamprojectvn/",
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
        description2: 'Successfully organized and performed in 2023 Vietnam Night, as measured by the attendance of > 200 students and faculties in Five College Consortium and 60% increase in Media promotion'
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

