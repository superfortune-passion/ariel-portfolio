import { profile } from "@/data/portfolio";

export default function Hero() {
  const stats = [
    { label: "Years experience", value: "10+" },
    { label: "Companies", value: "4" },
    { label: "Focus", value: "AI & Full Stack" },
    { label: "Education", value: "BSc CS" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to opportunities · {profile.location}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-400 md:text-2xl">
          {profile.title}
          <span className="text-blue-400"> — </span>
          {profile.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#experience" className="btn-primary">
            View my work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-stat">
              <dt className="text-xs text-slate-500">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
