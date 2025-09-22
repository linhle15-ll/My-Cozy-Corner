import { Download, Menu, Mail, SquareArrowOutUpRight, SquareLibrary, SearchCode, LayoutGrid, House, UserRound, Handshake, FolderKanban, BriefcaseBusiness, Bolt } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const DownloadIcon = <Download size={20} strokeWidth={1.5} />
export const MenuIcon = <Menu size={20} strokeWidth={1.5} />
export const EmailIcon = <Mail size={30} strokeWidth={2} />
export const LinkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2xl" />
export const InstagramIcon = <FontAwesomeIcon icon={faInstagram} size="2xl" />

export const CourseworksIcon  = <SquareLibrary size={35} color="#dc406f" strokeWidth={1.5} />
export const ProgrammingIcon = <SearchCode size={35} color="#dc406f" strokeWidth={1.5} />
export const AppICon = <LayoutGrid size={35} color="#dc406f" strokeWidth={1.5} />
export const ToolIcon = <Bolt size={35} color="#dc406f" strokeWidth={1.5}/>
export const Link = <SquareArrowOutUpRight size={20} strokeWidth={1.5} />

export const Home = <House size={20} strokeWidth={1.5} />
export const About = <UserRound size={20} strokeWidth={1.5} />
export const Experience = <BriefcaseBusiness size={20} strokeWidth={1.5} />
export const Projects = <FolderKanban size={20} strokeWidth={1.5} />
export const Contact = <Handshake size={20} strokeWidth={1.5} />