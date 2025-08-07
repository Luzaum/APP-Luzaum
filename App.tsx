import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Fluidoterapia from './Fluidoterapia'; // Import the fluid therapy calculator
import Hemogasometria from './Hemogasometria'; // Import the new calculator component

// --- ICON COMPONENTS --- //

const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
        <path d="M12.75 14.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm0-5.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-3.5 1.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm3.5 2.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75z"/>
    </svg>
);

const DogFoodIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v1.5a1.5 1.5 0 0 1-3 0V7a5 5 0 0 0-5 5 1.5 1.5 0 0 1 0 3 5 5 0 0 0 5 5v-1.5a1.5 1.5 0 0 1 3 0V22a5 5 0 0 0 5-5 1.5 1.5 0 0 1 0-3 5 5 0 0 0-5-5z" fill="#A0522D"/></svg>;
const FluidIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#3498db"><path d="M12 2L5 9h14L12 2zm0 19.5c-3.14 0-6-2.5-6-5.5s2.86-5.5 6-5.5 6 2.5 6 5.5-2.86 5.5-6 5.5zM12 11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>;
const BloodBagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#e74c3c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4H7v-2h2V7h2v3h2v2h-2v4z"/></svg>;
const CriIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#f1c40f"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M16.1 9.9l-1.9-1.9-1.5 1.5 1.9 1.9 1.5-1.5zM7.9 8l-1.9 1.9 1.5 1.5 1.9-1.9-1.5-1.5zM12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>;
const ToxinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#8e44ad"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6z"/></svg>;
const AntibioticIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#2ecc71"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-3v3h-2v-3H8v-2h3V8h2v5h3v2z"/></svg>;
const DosesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#16a085"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/><path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"/></svg>;
const EmergencyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#c0392b"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>;
const PainScaleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#e67e22"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.25 12.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25-1.25zm2.5 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25-1.25zm2.5-4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25-1.25zM7.25 10.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>;
const GlasgowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#7f8c8d"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M9.5 13.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm5 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 7c-1.93 0-3.5 1.57-3.5 3.5 0 .53.13 1.02.35 1.45.22.43.52.81.88 1.12.37.31.78.53 1.27.64.48.12.98.19 1.5.19s1.02-.07 1.5-.19c.49-.11.9-.33 1.27-.64.36-.31.66-.69.88-1.12.22-.43.35-.92.35-1.45C15.5 8.57 13.93 7 12 7z"/></svg>;
const IrisIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#34495e"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 10.5c-1.24 0-2.25 1.01-2.25 2.25S10.76 15 12 15s2.25-1.01 2.25-2.25S13.24 10.5 12 10.5z"/></svg>;
const QuizIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#9b59b6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 10.89 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>;
const HemoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="#1abc9c"><path d="M15 2H9C7.9 2 7 2.9 7 4v16c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-7H9v-2h4v2z"/></svg>;

// --- DATA STRUCTURES --- //

interface AppItem {
  name: string;
  icon: ReactNode;
  implemented: boolean;
}

interface AppCategory {
  title: string;
  apps: AppItem[];
}

const appData: AppCategory[] = [
  {
    title: "Calculadoras",
    apps: [
      { name: "Calculadora Energética", icon: <DogFoodIcon />, implemented: false },
      { name: "Calculadora de Fluidoterapia", icon: <FluidIcon />, implemented: true },
      { name: "Calculadora de Transfusão Sanguínea", icon: <BloodBagIcon />, implemented: false },
      { name: "Calculadora CRI", icon: <CriIcon />, implemented: false },
      { name: "Calculadora Toxicicidade", icon: <ToxinIcon />, implemented: false },
    ],
  },
  {
    title: "Guias & Referências",
    apps: [
      { name: "Guia de Antibióticos", icon: <AntibioticIcon />, implemented: false },
      { name: "Doses atualizadas Plumb's", icon: <DosesIcon />, implemented: false },
      { name: "Fármacos emergenciais", icon: <EmergencyIcon />, implemented: false },
    ],
  },
  {
    title: "Avaliações & Escalas",
    apps: [
        { name: "Escalas de dor", icon: <PainScaleIcon />, implemented: false },
        { name: "Escala de Coma Glasgow", icon: <GlasgowIcon />, implemented: false },
        { name: "Estadiamento IRIS", icon: <IrisIcon />, implemented: false },
    ],
  },
  {
    title: "Quizzes",
    apps: [
      { name: "Quiz Residência Veterinária", icon: <QuizIcon />, implemented: false },
    ]
  },
  {
    title: "Interpretação de Exames",
    apps: [
        { name: "Hemogasometria", icon: <HemoIcon />, implemented: true },
    ]
  }
];

const App = () => {
  const [page, setPage] = useState('home');
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const handleAppClick = (appName: string, isImplemented: boolean) => {
    if (isImplemented) {
        setActiveApp(appName);
    } else {
        alert('Este aplicativo ainda não foi implementado.');
    }
  };

  const handleBackToApps = () => {
    setActiveApp(null);
  };
  
  const handleBackToHome = () => {
    setPage('home');
    setActiveApp(null); // Reset active app when going home
  };

  if (page === 'home') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
        <LogoIcon />
        <h1 className="text-4xl font-bold text-green-700 mt-4">MEDVET Luzaum</h1>
        <p className="text-gray-600 mt-2 mb-8">Seu assistente pessoal de medicina veterinária.</p>
        <button
          onClick={() => setPage('apps')}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          APPs
        </button>
      </div>
    );
  }

  // This is for page === 'apps'
  if (activeApp === 'Calculadora de Fluidoterapia') {
      return <Fluidoterapia onBack={handleBackToApps} />;
  }
  if (activeApp === 'Hemogasometria') {
      return <Hemogasometria onBack={handleBackToApps} />;
  }


  // App list view
  return (
    <div className="bg-white min-h-screen p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
            <button onClick={handleBackToHome} className="mb-6 text-green-600 hover:text-green-800 font-semibold">
                &larr; Voltar para o Início
            </button>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Aplicativos</h1>
            {appData.map((category) => (
                <div key={category.title} className="mb-8">
                    <h2 className="text-xl font-bold text-gray-700 border-b-2 border-green-200 pb-2 mb-4">
                        {category.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.apps.map((app) => (
                            <div 
                                key={app.name} 
                                className={`flex items-center p-3 bg-gray-50 rounded-lg shadow-sm transition-all ${app.implemented ? 'hover:shadow-md hover:bg-green-50 cursor-pointer' : 'opacity-50'}`}
                                onClick={() => handleAppClick(app.name, app.implemented)}
                                role="button"
                                tabIndex={app.implemented ? 0 : -1}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleAppClick(app.name, app.implemented)}}
                            >
                                <div className="flex-shrink-0">
                                    {app.icon}
                                </div>
                                <div className="ml-4">
                                    <p className="text-md font-semibold text-blue-600">{app.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default App;
