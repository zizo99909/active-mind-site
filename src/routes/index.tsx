import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-sports.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Move Daily — Why Practicing Sports Matters" },
      {
        name: "description",
        content:
          "Discover why practicing sports is essential for your body, mind, and life. Build strength, focus, and community through movement.",
      },
    ],
  }),
});

function Index() {
  const benefits = [
    {
      number: "01",
      title: "Stronger Body",
      text: "Regular physical activity builds endurance, muscle, and cardiovascular health — adding years to your life and life to your years.",
    },
    {
      number: "02",
      title: "Sharper Mind",
      text: "Movement releases endorphins, reduces anxiety, and improves focus. Sport is one of the most powerful tools for mental wellbeing.",
    },
    {
      number: "03",
      title: "Real Community",
      text: "Teams and training partners create bonds that go beyond the field. Sport teaches trust, discipline, and shared purpose.",
    },
  ];

  const stats = [
    { value: "30%", label: "lower risk of chronic disease" },
    { value: "2×", label: "improvement in mood after exercise" },
    { value: "150", label: "minutes per week recommended by WHO" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Athlete sprinting at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
        <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-primary" />
            MOVE.DAILY
          </div>
          <div className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#why" className="hover:text-foreground transition">Why Sport</a>
            <a href="#benefits" className="hover:text-foreground transition">Benefits</a>
            <a href="#start" className="hover:text-foreground transition">Start</a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[calc(100%-88px)] items-end px-6 pb-16 md:px-12 md:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              The case for movement
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Your body was{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                built to move.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Practicing sports isn't a luxury — it's the simplest investment you can make in a longer, happier, more focused life.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Why it matters
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Sport is the most underrated medicine of our time.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              We sit more than any generation before us. Screens dominate our attention, deadlines drain our energy, and movement has quietly disappeared from daily life.
            </p>
            <p>
              Sport brings it back. Whether it's a morning run, a weekly football match, or yoga in the living room — every session is a vote for a stronger, calmer, more capable version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="text-5xl font-black tracking-tight md:text-6xl bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                {s.value}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Three reasons to start{" "}
            <span className="text-primary">today</span>.
          </h2>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.number}
                className="group bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10"
              >
                <div className="mb-8 text-sm font-mono text-primary">{b.number}</div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">{b.title}</h3>
                <p className="text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="start"
        className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            The best time to start was yesterday. The second best is now.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Pick something. Walk, swim, lift, kick, climb. Twenty minutes today is a promise to your future self.
          </p>
          <div className="mt-10">
            <a
              href="#why"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
              style={{
                background: "var(--gradient-hero)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              Start moving →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground md:px-12">
        © {new Date().getFullYear()} Move.Daily — Built to inspire movement.
      </footer>
    </main>
  );
}
