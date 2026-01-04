import STEAMlogo from '@/public/STEAMlogo.jpg'
import PennyWiseLogo from "@/public/PennyWiseLogo.png"
import PennyWiseGif from "@/public/PennyWiseGif.gif"
import Elabrary from "@/public/Elabrary.png"
import LeafShield from "@/public/LeafShield.png"
import mywebsiteimg from "@/public/mywebsite.png"
import HackrMap from "@/public/hackrmap.png"
import SubleazyLogo from "@/public/subleazy_logo.png"
import Subleazyimg from "@/public/subleazyimg.png"
import OCRGatewayimg from "@/public/OCRGateway.png"
import OCRReview from "@/public/OCRReview.gif"
import Subleazy from "@/public/subleazy.gif"

export const projectsArr = [
    {
        "key": 0,
        "image":Subleazy,
        "icon":SubleazyLogo,
        "date":"April 2025 - Present",
        "link":"https://github.com/linhle15-ll/subleazy",
        "title":"Subleazy (Viet Tech Hackathon 2025)",
        "role":"Tech Lead, Full-stack Developer",
        "description":"Web app streamlining student subleasing",
        "details": [
            "Technologies: TypeScript, MongoDB, Next.js, Node.js, REST API, OpenAI API, Google Map API, Cloudinary, Tiptap, WebSocket, Socket.IO, Yjs, TanStack React Query, Shadcn, Figma, Postman, Unit Testing",
            "Awarded Best UI/UX, 2nd Favorite Project and Best Tech Lead at the 3-month Viet Tech Hackathon.",
            "Built a contract automation editor, enabling AI-assisted review of agreements.",
            "Engineered a recommendation system combining vector search and text search to align customed housing preferences and suggest optimal sublease options."
        ],
    },
    {
        "key": 0.1,
        "image":OCRReview,
        "icon":OCRGatewayimg,
        "date":"June 2025 - Sep 2025",
        "link":"https://github.com/linhle15-ll/OCR-gateway-application",
        "title":"OCR Gateway (FPT IS Internship)",
        "role":"Software Engineer Intern",
        "description":"OCR Gateway application for document processing",
        "details": [
            "Technologies: FastAPI (Python APIs), JWT-based authentication, MongoDB (database), MinIO (object storage), OCR processing service, Docker (containerization)",
            "The OCR Gateway Application is a full-stack, microservice-based system for uploading and processing documents (PDFs/images), performing OCR, ",
            "and managing review and confirmation workflows. It is designed to deliver a seamless and reliable OCR experience at scale."
        ],
    },
    {
        "key": 1,
        "image":HackrMap,
        "icon":STEAMlogo,
        "date":"October 2024",
        "link":"https://github.com/JoeyCorbett/hackrmap",
        "title":"HackrMap (HackHavard2024)",
        "role":"Frontend Developer",
        "description":"AI-driven web application help hackers generate dev flow",
        "details": [
            "Technologies: TypeScript, React, React Flow, OpenAI API, Figma, Postman",
            "Worked cooperatively in a team of four students to develop Hackrmap, an AI-driven web application designed to help hackers start their project quickly by crafting a personalized, step-by-step roadmap",
            "Designed a core development flow using graph algorithm with React Flow and an exemplary structured output JS file that facilitates efficient prompt engineering using OpenAI Chat Completions"
        ],
    },
    {
        "key": 2,
        "image":PennyWiseGif,
        "icon":PennyWiseLogo,
        "link":"https://github.com/linhle15-ll/Finance-Tracker-App-Pennywise",
        "date":"July 2024",
        "title":"PennyWise",
        "role":"Full-stack Developer",
        "description":"A MERN stack for financial management",
        "details": [
            "Technologies: TypeScript, MongoDB, Next.js, Node.js, Express.js, REST API, Clerk, Zustand, MaterialUI, Postman",
            "Developed and established a full-stack open-source financial app project using MERN stack, Zustand, and UI Libraries",
            "Created REST API endpoints using Express.js and MongoDB to handle data management and backend-frontend interactions",
            "Designed an algorithm in Budget planning that aligns with users’ habit in financial updates and planning"
        ],
    },
    {
        "key": 3,
        "image":LeafShield,
        "icon":"",
        "date":"March 2024",
        "link":"https://devpost.com/software/leaf-shield",
        "title":"Leaf Shield (YHack2024)",
        "role":"UI/UX Designer, Presenter",
        "description":"Application promoting Sustainable Agriculture",
        "details": [
            "Technologies: Figma, React Native, Python (Flask), TensorFlow, Keras, OpenCV, Postman",
            "Worked cooperatively to create a web and mobile application that assists farmers to detect dark spot on leaves, which utilizes Machine Learning to detect potential crop blight with an accuracy up to 98.05%",
            "Took major charge of Figma mockup, front-end, and worked partially on background data research for presentation"
        ],  
    },
    
    {
        "key": 4,
        "image":Elabrary,
        "icon":"",
        "date":"June 2022 - June 2023",
        "link":"https://elablibrary.wordpress.com/",
        "title":"ELabrary",
        "role":"Co-founder, Project Manager",
        "description":"Website promoting student's English self-study",
        "details": [
            "Technologies: WordPress, Canva",
            "Led a team of 5 members and organized 3 weekly meetings to develop Elabrary, a website helping HS English Club reach out to other students and offer them quality English self-study content",
            "Contributed to an increase of 60% in HS English Club’s awareness within Ha Tinh student community"
        ],
    },
    {
        "key": 5,
        "image":mywebsiteimg,
        "icon":"",
        "date":"Aug 2024",
        "link":"https://github.com/linhle15-ll/My-Cozy-Corner",
        "title":"My Cozy Corner",
        "role":"Full-stack Developer",
        "description":"My personal website",
        "details": [
            "Technologies: Figma, MERN stack, MaterialUI, Vercel",
            "Designed and Updated my own website using Figma and MERN stack"
        ],
    },

    
]