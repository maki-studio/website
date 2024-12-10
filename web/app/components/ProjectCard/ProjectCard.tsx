import React from 'react';

// import styles from './ProjectCard.css';

export interface ProjectCardProps {
  prop?: string;
}

export function ProjectCard({prop = 'default value'}: ProjectCardProps) {
  return <div className={'styles.ProjectCard'}>ProjectCard {prop}</div>;
}
