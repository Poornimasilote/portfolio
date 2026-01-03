import workout from "../../assets/projects/workout-buddy.png";
import notes from "../../assets/projects/pocket-notes.png";
import cart from "../../assets/projects/shopping-cart.png";
import bookshelf from "../../assets/projects/bookshelf.png";
import jobportal from "../../assets/projects/job-portal.png";

const projects = [
  {
    id: "workout",
    title: "Workout Buddy",
    tag: "MERN • Auth",
    image: workout,
    description:
      "Full-stack MERN application with JWT authentication, protected routes, and complete CRUD workflows.",
    tech: ["React", "Node", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Poornimasilote/WorkoutBuddy",
    live: "https://workout-buddy-drab.vercel.app/",
  },
  {
    id: "notes",
    title: "Pocket Notes",
    tag: "Persistent Storage",
    image: notes,
    description:
      "Notes application with persistent storage, clean UI state handling, and local data synchronization.",
    tech: ["React", "LocalStorage"],
    github: "https://github.com/Poornimasilote/pocket_notes",
    live: "https://pocket-notes-swart.vercel.app/",
  },
  {
    id: "cart",
    title: "Smart Shopping Cart",
    tag: "Redux / Context",
    image: cart,
    description:
      "E-commerce cart with global state management, product filtering, and dynamic cart calculations.",
    tech: ["React", "Redux", "Context API"],
    github: "https://github.com/Poornimasilote/smart-shopping-cart",
    live: "#",
  },
  {
    id: "bookshelf",
    title: "Bookshelf App",
    tag: "CRUD",
    image: bookshelf,
    description:
      "Built a production-ready MERN app with authentication, protected routes, and user-specific CRUD operations.",
    tech: ["React", "CRUD"],
    github: "https://github.com/Poornimasilote/Book-directory",
    live: "https://book-directory-giar.vercel.app/",
  },
  {
    id: "jobportal",
    title: "Job Portal",
    tag: "Real-world Flows",
    image: jobportal,
    description:
      "Job portal with application flows, forms, validation, and real-world user interaction patterns.",
    tech: ["React", "Forms", "Validation"],
    github: "https://github.com/Poornimasilote/job-application-portal",
    live: "#",
  },
];

export default projects;
