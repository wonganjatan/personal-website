import { Project } from "../types/project";

export const DEFAULT_PROJECTS: Project[] = [
    {
        title: "Venue Vendor",
        description:
        "Led a 2-person team to design and build a full-stack venue booking platform, implementing 10+ RESTful endpoints and a normalized relational schema in Microsoft SQL Server. Built a GraphQL API for admin-side CRUD operations across users, venues, and subscriptions, enabling flexible querying alongside REST endpoints used for core booking functionality. Architected the backend using the MVC pattern and the frontend using reusable React components, coordinating with stakeholders to translate requirements into technical specs.",
        techStack: ["Next.js", "Express", "TypeORM", "Microsoft SQL Server"],
    },
    {
        title: "Task Manager",
        description:
        "Built and deployed a full-stack task manager with JWT-based authentication and full CRUD functionality across 5+ entity relationships in PostgreSQL. Designed a responsive React frontend with task filtering, sorting, and inline editing, styled with Tailwind CSS. Independently owned the full development lifecycle — API design, database schema, frontend, deployment — applying MVC and REST best practices.",
        techStack: ["Java Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
        repoUrl: "https://github.com/wonganjatan/task-manager",
    },
    {
        title: "EventHub",
        description:
        "Implemented core features including user authentication, event creation/booking logic, and event filtering within a 6-person Agile/Scrum team across 4+ sprints. Built an admin dashboard for managing events and scheduling, and developed responsive frontend pages using Thymeleaf. Integrated MySQL for data persistence and containerized the application and database with Docker for consistent deployment across environments.",
        techStack: ["Java Spring Boot", "Thymeleaf", "MySQL", "Docker"],
    },
]