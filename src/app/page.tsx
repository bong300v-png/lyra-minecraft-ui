import { LandingApp } from "@/components/landing/LandingApp";

export default function Home() {
  // No #app wrapper — complex-theme #app {display:flex} broke single-card centering
  return <LandingApp />;
}
