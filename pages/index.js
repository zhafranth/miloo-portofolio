import { useState } from "react";

// Components
import { Header, Hero, Skills } from "../components";

export default function Home() {
  const [mode, setMode] = useState(false);
  return (
    <main className={`${mode && "dark"}`}>
      <div className={`min-h-[100vh]  bg-white dark:bg-black transition-all`}>
        <Header toggle={() => setMode(!mode)} mode={mode} />
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
