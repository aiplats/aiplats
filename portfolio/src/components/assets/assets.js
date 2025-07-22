import gradpic from './PLATON-GRAD.jpg'
import itflogo from './../assets/itflogo2.png'
import adscert from './../assets/adscert.png'

import github from './../assets/icons8-githubw-50.png'
import instagram from './../assets/icons8-instagram-48.png'
import facebook from './../assets/icons8-facebook-48.png'

import linkedin from './../assets/icons8-linkedin-48.png'
import gmail from './../assets/icons8-gmail-48.png'
import whatsapp from './../assets/icons8-whatsapp-48.png'
import map from './../assets/icons8-map-48.png'

import frontend from './../assets/icons8-frontend-50.png'
import server from './../assets/icons8-server-50.png'
import paint from './../assets/icons8-paint-50.png'
import tailwind from './../assets/icons8-tailwind-css-48.png'
import web from './../assets/icons8-webw-50.png'
import api from './../assets/icons8-api-64.png'

import responsive from './../assets/icons8-responsive-design-50.png'
import uiux from './../assets/icons8-ui-ux-design-50.png'
import wordpress from './../assets/icons8-wordpress-50.png'
import framer from './../assets/icons8-framer-48.png'

import git from './../assets/icons8-git-48.png'
import graphql from './../assets/icons8-graphql-50.png'
import restapi from './../assets/icons8-rest-api-50.png'
import vscode from './../assets/icons8-vs-code-48.png'
import vercel from './../assets/icons8-vercel-50.png'

import css from './../assets/icons8-css3-48.png'
import html from './../assets/icons8-html5-48.png'
import javascript from './../assets/icons8-javascript-48.png'
import laravel from './../assets/icons8-laravel-64.png'
import mongodb from './../assets/icons8-mongodb-48.png'
import supabase from './../assets/icons8-supabase-48.png'
import express from './../assets/icons8-express-js-50.png'
import mysql from './../assets/icons8-mysql-48.png'
import nodejs from './../assets/icons8-node-js-48.png'
import react from './../assets/icons8-react-40.png'
import postgresql from './../assets/icons8-postgresql-48.png'

import mahikacafe from './../assets/mahikacafe.png'
import historiko from './../assets/historiko.png'
import taalert from './../assets/taalert.png'


export const skillsIcons = [
  {
    category: "Front-End",
    icon: html,
    title: "HTML5"
  },
  {
    category: "Front-End",
    icon: css,
    title: "CSS3"
  },
  {
    category: "Front-End",
    icon: tailwind,
    title: "Tailwind CSS"
  },
  {
    category: "Front-End",
    icon: react,
    title: "React"
  },
  {
    category: "Front-End",
    icon: javascript,
    title: "JavaScript"
  },
  {
    category: "Back-End",
    icon: nodejs,
    title: "Node.js"
  },
  {
    category: "Back-End",
    icon: laravel,
    title: "Laravel"
  },
  {
    category: "Back-End",
    icon: express,
    title: "Express.js"
  },
  {
    category: "Back-End",
    icon: graphql,
    title: "GraphQL"
  },
  {
    category: "Back-End",
    icon: restapi,
    title: "Rest API"
  },
  {
    category: "Database",
    icon: mongodb,
    title: "MongoDB"
  },
  {
    category: "Database",
    icon: supabase,
    title: "Supabase"
  },
  {
    category: "Database",
    icon: mysql,
    title: "MySQL"
  },
  {
    category: "Database",
    icon: postgresql,
    title: "PostgreSQL"
  },
  {
    category: "Design",
    icon: wordpress,
    title: "WordPress"
  },
  {
    category: "Design",
    icon: framer,
    title: "Framer"
  },
  {
    category: "Design",
    icon: uiux,
    title: "UI/UX Design"
  }, 
  {
    category: "Design",
    icon: responsive,
    title: "Responsive Design"
  },
  {
    category: "DevOps & Tools",
    icon: git,
    title: "Git"
  },
  {
    category: "DevOps & Tools",
    icon: github,
    title: "GitHub"
  },
  {
    category: "DevOps & Tools",
    icon: vscode,
    title: "VS Code"
  },
  {
    category: "DevOps & Tools",
    icon: vercel,
    title: "Vercel"
  },
  
];

export  const certifications = [
  {
    icon: itflogo,
    title: "CompTIA IT Fundamentals+",
    issuer: "Issuer:",
    company: "CompTIA",
    credential: "Credential ID:",
    id: "2BXGK4CRMJV41DCN",
    url: "https://www.credly.com/badges/717db591-47ed-4549-94d9-748ca3fef174"
  },
  {
    icon: adscert,
    title: "AI-Powered Performance Ads",
    issuer: "Issuer:",
    company: "Google",
    credential: "Credential ID:",
    id: "143449646",
    url: "https://skillshop.credential.net/00c02ab1-8fea-47a9-ae8d-f20501e21048#acc.F1NRb4xh"
  }
];

export const socialContact = [
  {
    icon: whatsapp,
    name: "Alexander Isaac Platon",
  },
  {
    icon: gmail,
    name: "platon.alexanderip@gmail.com",
  },
  {
    icon: map,
    name: "Batangas, Philippines",
  }
]


export const projects = [
  {
    project: mahikacafe,
    name: "Mahika Cafe",
    desc: "An e-commerce coffee ordering platform featuring a recommendation algorithm tailored to individual health preferences and wellness goals.",
    techstack: ["HTML", "CSS", "REACT", "JAVASCRIPT", "MONGODB", "NODE JS", "EXPRESS JS"],
    link: "https://mahika-cafe.vercel.app/",
  },
  {
    project: historiko,
    name: "Historiko (Freelance Project)",
    desc: "A Learning Management System (LMS) for Araling Panlipunan, specifically tailored for high school students to enhance historical and civic education.",
    techstack: ["HTML", "CSS", "REACT", "JAVASCRIPT", "SUPABASE", "NODE JS"],
    link: "https://historiko.vercel.app/",
  },
  {
    project: taalert,
    name: "TaAlert",
    desc: "A web-based dashboard designed to display, monitor, and analyze real-time data from the TaAlert: A real-time Air Quality Monitoring IoT device.",
    techstack: ["HTML", "CSS", "REACT", "JAVASCRIPT", "SUPABASE"],
    link: "https://capstone-eta-ten.vercel.app/"
  }
]

export const services = [
  {
    number: "01",
    icon: frontend,
    name: "Web Development",
    desc: "Build responsive and user-friendly web applications using HTML, CSS, JavaScript, and React"
  }, 
  {
    number: "02",
    icon: server,
    name: "Database Integration",
    desc: "Integrate databases to store and manage data using MongoDB, Supabase, MySQL, and Nodejs"
  },
  {
    number: "03",
    icon: api,
    name: "API Integration",
    desc: "Integrate APIs to fetch and send data to external services"
  },
  {
    number: "04",
    icon: paint,
    name: "UI/UX Design",
    desc: "Create visually appealing and user-centered designs using Framer, WordPress and Tailwind CSS"
  }
]