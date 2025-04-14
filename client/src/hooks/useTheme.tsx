import { createContext, useContext, useEffect } from "react";

type ThemeContextType = {
  theme: "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always apply dark theme
    const root = document.documentElement;
    root.classList.add("dark");
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}