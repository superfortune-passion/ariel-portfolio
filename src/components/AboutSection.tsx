import { profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Engineering leader at the intersection of AI and product
            </h2>
          </div>
          <div className="space-y-4 leading-relaxed text-slate-400">
            <p>{profile.summary}</p>
            <p>
              I specialize in taking models from research to production —
              designing APIs, frontends, and infrastructure that teams can
              ship and maintain. My background spans banking compliance,
              healthcare privacy, and high-scale SaaS delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
