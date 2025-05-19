import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import styles from './Projects.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const { setPageTitle } = usePageTitle();
  

  useEffect(() => {
    setPageTitle('Projects - My Portfolio');
  }, [setPageTitle]);

  const projects = [
    {
      title: "Fight Knight (Unity)",
      description: "A 3D combat-based game with AI-driven enemies and physics-based combat.",
      image: "assests/fight_knight.jpg",
      tags: ["Unity", "C#"],
      links: [
        { icon: <GitHubIcon />, url: "#" },
        { icon: <LaunchIcon />, url: "#" }
      ]
    },
    {
      title: "Vim-Like Text Editor",
      description: "This command-line text editor replicates Vim's functionality, built using data structures like arrays, linked lists, and stacks.",
      image: "assests/txt.png",
      tags: ["C++", "Data Structures"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    },
    {
      title: "Chess Game",
      description: "This Chess Game was developed as a Programming Fundamentals (PF) project, implementing key programming concepts such as loops, conditionals, functions, and object-oriented programming (OOP).",
      image: "assests/chess_ai.jpg",
      tags: ["C++", "OOP"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    },
    {
      title: "H&M Apparel Store - E-Commerce & Meeting System",
      description: "E-commerce platform features secure authentication, real-time product management, and an Al-powered chatbot. With secure transactions and efficient order management, hosted on Firebase Hosting for scalability and security.",
      image: "assests/hm_apparel.jpg",
      tags: ["React.js", "Tailwind CSS","Firebase"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    }
  
  ];

  return (
    <Box className={styles.container} sx={{ ml: { xs: 0, sm: '280px' }, p: 3 }}>
      <Typography variant="h4" className={styles.pageTitle}>My Projects</Typography>
      <Box className={styles.gridWrapper}>
        {projects.map((project, index) => (
          <Card key={index} className={styles.card} sx={{ 
            width: '100%',
            maxWidth: '400px',
            mx: 'auto'
          }}>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              className={styles.cardMedia}
            />
            <CardContent className={styles.cardContent}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {project.description}
              </Typography>
              <Box className={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <Box key={i} className={styles.tag}>
                    {tag}
                  </Box>
                ))}
              </Box>
              <Box className={styles.linksContainer}>
                {project.links.map((link, i) => (
                  <Button
                    key={i}
                    variant="outlined"
                    size="small"
                    startIcon={link.icon}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectButton}
                  >
                    {link.icon.type === GitHubIcon ? 'Code' : 'Demo'}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;