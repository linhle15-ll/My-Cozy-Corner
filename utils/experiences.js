    import {
    CourseworksIcon,
    ProgrammingIcon,
    AppICon,
    ToolIcon,
    } from "@/utils/icons";
    import VIBlogo from "@/public/VIBlogo.png";
    import STEAMlogo from "@/public/STEAMlogo.jpg";
    import GWC from "@/public/GWC.png";
    import VSA from "@/public/VSA.png";
    import MHCLogo from "@/public/MHCLogo.png";
    import FPTISLogo from "@/public/fptis_logo.jpeg";
    import CarGurusLogo from "@/public/cargurus_logo.jpg";
    import MetaMLHLogo from "@/public/meta_mlh_logo.gif";

    export const experienceArr = [
    {
        key: 1,
        title: "Languages & Frameworks",
        description:
        "Python, Java, TypeScript, FastAPI, Spring Boot, Node.js, React.js, Next.js, Kotlin, Bash",
        icon: ProgrammingIcon,
    },
    {
        key: 2,
        title: "Systems, Cloud & Databases",
        description:
        "Git, Linux, Docker, CentOS, SQL, MongoDB, AWS S3, DigitalOcean, Grafana",
        icon: AppICon,
    },
    {
        key: 3,
        title: "Frameworks",
        description:
        "REST API, FastAPI, Spring Boot, Node.js, Express.js, React.js, Next.js",
        icon: CourseworksIcon,
    },
    {
        key: 4,
        title: "Tools",
        description:
        "Git, GitHub, Postman, DrawIO, Figma (UI/UX Prototyping and Engineering)",
        icon: ToolIcon,
    },
    ];

    export const workExperienceArr = [
    {
        key: 1,
        icon: CarGurusLogo,
        title: "Backend Software Engineer Intern",
        organization: "CarGurus Inc",
        link: "https://www.cargurus.com/",
        startDate: "June 2026",
        endDate: "August 2026",
        descriptions: [
        "Built and extended Java/Spring Boot backend APIs enhancing purchase decision experience on CarGurus’ car marketplace, serving 4.4M daily page views on Vehicle Detail page.",
        "Partnered with engineers across teams to implement the Vehicle Insight, a Model Context Protocol tool, into CarGurus’ Universal AI chat, enabling millions of users to gain insight into listed vehicles.",
        "Built a 25-panel Grafana dashboard for production observability, tracking business-health indicators, AI tool performance, latency, success and error rates, request volume, and downstream HTTP dependency health.",
        "Authored a GraphQL migration plan mapping 80 vehicle-detail fields to target subgraphs, validated data parity across 200 fields, and cooperated with cross-functional teams to implement the plan.",
        ],
    },
    {
        key: 2,
        icon: MetaMLHLogo,
        title: "Production Engineering Fellow",
        organization: "Meta - MLH Production Engineering Fellowship",
        link: "https://mlh.io/",
        startDate: "June 2026",
        endDate: "September 2026",
        descriptions: [
        "Mentored by Meta Production Engineers and trained on production engineering - Linux, scripting in Python/Bash, networking protocols, CI/CD, and monitoring with Grafana and Prometheus.",
        "Architected a multi-container staging environment for Link Graph, a digital research resource organization app, using Docker and Nginx, isolating microservices, the database, and client layers for local and integration testing.",
        "Engineered automated GitHub Actions CI/CD pipelines to execute test suites, build container images, and automate staging deployments, reducing setup time by 80%.",
        ],
    },
    {
        key: 3,
        icon: FPTISLogo,
        title: "Software Engineer Intern",
        organization: "AI R&D Department, FPT Information System",
        link: "https://fpt-is.com/en/",
        startDate: "June 2025",
        endDate: "September 2025",
        descriptions: [
        "Led development of a core OCR gateway for LibraAI, an AI-powered legal document management platform used by 20,000+ public-sector users, enabling document ingestion, OCR processing, display, and storage.",
        "Designed and implemented modular FastAPI microservices for JWT-based authentication, document ingestion, and OCR processing, establishing service boundaries for a scalable document workflow.",
        "Built a MinIO-backed media processing pipeline separating raw uploads, OCR outputs, and indexed metadata; processed 10,000+ documents monthly and reduced failed uploads by 15%.",
        ],
    },
    {
        key: 4,
        icon: MHCLogo,
        title: "Teaching Assistant",
        organization: "Mount Holyoke College",
        link: "https://www.mtholyoke.edu/",
        startDate: "September 2024",
        endDate: "Present",
        descriptions: [
        <>
            <strong>Data Structures and Algorithms:</strong> Led weekly labs and
            office hours for 35 students, teaching Java-based problem-solving
            techniques and providing individualized support on programming
            assignments.
        </>,
        <>
            <strong>Software Design and Development:</strong> Led weekly office
            hours for 25 students on GUI event-driven programming with JavaFX, UML,
            and software architecture, version control, and collaborative
            development with Git.
        </>,
        <>
            <strong>Intro to Applied Statistics:</strong> Facilitated 4-hour weekly
            evening help sessions, supporting 50 students with core statistical
            concepts, R-programming, Rstudio labs, providing assignment guidance.
        </>,
        ],
    },
    ];

    export const leardershipExperienceArr = [
        {
        key: 1,
        icon: STEAMlogo,
        title: "Co-founder/Former President",
        organization: "The STEAM Project Ha Tinh",
        link: "https://www.facebook.com/thesteamprojectvn/",
        startDate: "April 2022",
        endDate: "April 2024",
        description1:
        "Established and led a project pioneering STEAM education focusing on science experiments, coding challenges, presentations for 140 students interested in Science and Technology in 2022 and 2023",
        description2:
        "Generally managed project operation with other department leaders and 40 members, including Marketing, Finance, HR, Logistics, Content, successfully organized 2 seasons of STEAM Summer Camp in 2022 and 2023",
    },
    {
        key: 2,
        icon: GWC,
        title: "Marketing Coordinator, Tech Event Organizer",
        organization: "Girls Who Code College Loops @MHC",
        link: "https://www.instagram.com/mhc_gwc/",
        startDate: "Oct 2023",
        endDate: "Current",
        description1:
        "Spearhead the promotion of technology and innovation within Mount Holyoke College and Girls Who Code College Loops",
        description2:
        "Organized monthly workshops on Hackathon, Industry Insight, Tech Research, Tech QnA, in partnership with Research students and Tech industry experts, attracting an average of 60 students per session in 2023 - 2024",
    },
    {
        key: 3,
        icon: VSA,
        title: "President, Former Marketing Coordinator",
        organization: "MHC Vietnamese Student Association",
        link: "https://www.instagram.com/mhc.vsa/",
        startDate: "Sep 2023",
        endDate: "Current",
        description1:
        "Took charge of managing and hosting annual Vietnamese cultural events such as Vietnam Night, Coffee Workshop, and Lunar New Year, thus enhancing community engagement and awareness of Vietnamese culture",
        description2:
        "Successfully organized and performed in 2024 Vietnam Night, as measured by the attendance of > 200 students and faculties in Five College Consortium and 60% increase in Media promotion",
    },
    ];
