import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, INITIAL_STATE, UserProfile, Skill, Project } from '../types';

interface DataContextType extends AppState {
  login: () => void;
  logout: () => void;
  updateUser: (user: UserProfile) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  removeSkill: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  removeProject: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('portfolio_data');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(state));
  }, [state]);

  const login = () => setState(prev => ({ ...prev, isAdmin: true }));
  const logout = () => setState(prev => ({ ...prev, isAdmin: false }));

  const updateUser = (user: UserProfile) => {
    setState(prev => ({ ...prev, user }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: Math.random().toString(36).substr(2, 9) };
    setState(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const removeSkill = (id: string) => {
    setState(prev => ({ ...prev, skills: prev.skills.filter(s => s.id !== id) }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Math.random().toString(36).substr(2, 9) };
    setState(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
  };

  const removeProject = (id: string) => {
    setState(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  return (
    <DataContext.Provider value={{
      ...state,
      login,
      logout,
      updateUser,
      addSkill,
      removeSkill,
      addProject,
      removeProject,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};