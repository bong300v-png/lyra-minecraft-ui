import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

/** Khung trang con: nền sao tĩnh + nav + footer. Landing tự dựng riêng (canvas). */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="starfield-static"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <SiteNav />
      <main
        style={{
          flex: 1,
          maxWidth: 1080,
          margin: "0 auto",
          padding: "40px 48px 100px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageKicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        color: "#8B5CF6",
        fontWeight: 700,
        letterSpacing: ".3em",
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="font-display"
      style={{
        fontWeight: 900,
        fontSize: "clamp(30px, 4.5vw, 42px)",
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
}
