import Image from "next/image";
import type { CSSProperties } from "react";
import { experiences } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Professional experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            A decade building AI-driven products
          </h2>
          <p className="mt-4 text-slate-400">
            From banking and healthcare to enterprise AI — each role with
            hands-on work samples showcasing the systems I helped deliver.
          </p>
        </div>

        <div className="space-y-24">
          {experiences.map((job, index) => (
            <article key={job.id} id={job.id} className="scroll-mt-24">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-lg backdrop-blur-sm"
                    style={{ boxShadow: `0 8px 32px ${job.accent}33` }}
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={36}
                      height={36}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {job.company}
                    </h3>
                    <p className="text-lg text-slate-300">{job.role}</p>
                    <p className="mt-1 font-mono text-xs text-slate-500">
                      {job.period} · {job.location}
                    </p>
                  </div>
                </div>
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-medium tracking-wide"
                  style={{
                    backgroundColor: `${job.accent}18`,
                    color: job.accent,
                    border: `1px solid ${job.accent}40`,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: job.accent }}
                  />
                  {job.samples.length} work samples
                </span>
              </div>

              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="card-highlight flex gap-3 text-sm leading-relaxed text-slate-400"
                    style={{ "--card-accent": job.accent } as CSSProperties}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="card-eyebrow mb-6 text-slate-500">Work samples</h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  {job.samples.map((sample) => (
                    <ProjectCard
                      key={sample.title}
                      title={sample.title}
                      description={sample.description}
                      image={sample.image}
                      tags={sample.tags}
                      accent={job.accent}
                    />
                  ))}
                </div>
              </div>

              {index < experiences.length - 1 && (
                <hr className="mt-24 border-white/6" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
