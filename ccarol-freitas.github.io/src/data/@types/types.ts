import { ReactNode } from 'react'

export interface PropsContent {
  children?: ReactNode
}


export interface SocialInfoProps {
  title: string;
  img: string;
  link: string;
}
export interface SkillsInfoProps {
  title: string;
  img: string;
}

export interface ProjectsInfoProps {
  title: string;
  link: string;
}

export interface SlideShowProps {
  projects: ProjectsInfoProps[];
  currentIndex: number | null;
  onClose: () => void;
}
