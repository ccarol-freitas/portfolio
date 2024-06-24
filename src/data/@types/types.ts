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

export interface TabsProps {
  tagInitial: string;
  tabs: {
    name: string;
    selected: string;
  }[];
  style?: React.CSSProperties;
  className?: string;
  setToogled: (tab: string) => void; 
};