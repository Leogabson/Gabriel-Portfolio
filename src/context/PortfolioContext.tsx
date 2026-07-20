"use client";

import { createContext, useContext } from "react";

import personal from "@/data/personal";
import skills from "@/data/skills";
import projects from "@/data/projects";

interface PortfolioContextProps {
  personal: typeof personal;
  skills: typeof skills;
  projects: typeof projects;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioContext.Provider
      value={{
        personal,
        skills,
        projects,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext);
  if (!context)
    throw new Error(
      "usePortfolioContext must be used within PortfolioProvider"
    );
  return context;
}
