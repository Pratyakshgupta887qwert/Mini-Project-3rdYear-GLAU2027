export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: "tech-talk",
    title: "Tech Talk 2025",
    date: "March 15, 2025",
    location: "Tech Hub, Building A",
    attendees: 150,
    description: "Join industry leaders for insightful discussions on the latest tech trends and innovations.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: "hackathon",
    title: "Global Hackathon",
    date: "April 20-22, 2025",
    location: "Innovation Center",
    attendees: 300,
    description: "48-hour coding marathon where developers build innovative solutions to real-world problems.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    id: "web-workshop",
    title: "Web Dev Workshop",
    date: "May 5, 2025",
    location: "Digital Academy",
    attendees: 80,
    description: "Hands-on workshop covering modern web development with React, TypeScript, and best practices.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "ai-conference",
    title: "AI Conference 2025",
    date: "June 10-11, 2025",
    location: "Convention Center",
    attendees: 500,
    description: "Explore the future of artificial intelligence with workshops, demos, and keynote speakers.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
];

