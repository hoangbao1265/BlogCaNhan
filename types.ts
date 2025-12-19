
export type Category = 'Java' | 'JavaScript' | 'Network';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Course {
  name: string;
  provider: string;
  year: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: Skill[];
  courses: Course[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}
