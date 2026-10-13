import React from 'react';
import { createRoot } from 'react-dom/client';
import Clinic from './clinic';
import './style.css';

const pages: Record<string, string> =
    { '/sobre': 'about', '/servicos': 'services', '/avaliacoes': 'reviews', '/contato':
    'contact', '/equipe': 'team', '/perguntas-frequentes': 'faq' };

if (location.pathname === '/equipe') location.replace('/#equipe'); if 
    (location.pathname === '/perguntas-frequentes') location.replace('/#duvidas');
    createRoot(document.getElementById('root')!).render
    (<React.StrictMode><Clinic page={pages[location.pathname.replace(/\/$/, '')] || 'home'} /></React.StrictMode>);
