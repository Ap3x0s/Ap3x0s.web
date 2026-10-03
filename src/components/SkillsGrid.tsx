import { useState } from "react";
import type { Skill, SkillCategory } from "../data/skills";
import { skillCategories } from "../data/skills";

interface Labels {
  title: string;
  label: string;
  intro: string;
  all: string;
  items: string;
  version: string;
  empty: string;
}

interface Props {
  items: Skill[];
  lang: "en" | "ru";
  labels: Labels;
}

export default function SkillsGrid({ items, lang, labels }: Props) {
  const [active, setActive] = useState<SkillCategory | "all">("all");

  const filters: (SkillCategory | "all")[] = ["all", ...skillCategories];
  const visible =
    active === "all" ? items : items.filter((s) => s.category === active);

  return (
    <section className="container-page py-16 md:py-24">
      <div className="mb-10">
        <h2 className="font-mono text-gold text-sm mb-6 tracking-widest uppercase">
          {labels.label}
        </h2>
        <h1 className="text-[16vw] md:text-[10vw] font-display uppercase leading-[0.85] tracking-tighter text-white">
          {labels.title}
        </h1>
        <p className="font-mono text-xs text-neutral-500 uppercase mt-6 max-w-md">
          {labels.intro}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 border-t border-line pt-6">
        {filters.map((f) => {
          const count =
            f === "all"
              ? items.length
              : items.filter((s) => s.category === f).length;
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={[
                "font-mono text-xs uppercase tracking-widest px-3 py-2 border transition-colors cursor-pointer",
                isActive
                  ? "border-gold bg-gold text-black"
                  : "border-line text-neutral-400 hover:border-gold hover:text-gold",
              ].join(" ")}
            >
              {f === "all" ? labels.all : f}
              <span className={isActive ? "text-black/60 ml-2" : "text-neutral-600 ml-2"}>
                [{count}]
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line mt-8">
        {visible.map((skill) => (
          <article
            key={skill.slug}
            className="group bg-black p-6 flex flex-col hover:bg-elevated transition-colors min-h-[220px]"
          >
            <div className="flex justify-between items-start gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-line px-2 py-1">
                [{skill.version}]
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-gold transition-colors">
                {skill.category}
              </span>
            </div>

            <h3 className="text-xl font-bold uppercase text-white mt-5 group-hover:text-gold transition-colors leading-tight">
              {skill.title}
            </h3>

            <p className="text-neutral-400 text-sm mt-3 leading-relaxed flex-1">
              {skill.description[lang]}
            </p>

            <div className="flex justify-between items-center mt-5 pt-4 border-t border-line group-hover:border-gold transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                {labels.version} {skill.version}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                {skill.stack}
              </span>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="border border-line p-10 text-center font-mono text-xs uppercase tracking-widest text-neutral-500 mt-8">
          {labels.empty}
        </div>
      )}

      <div className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest mt-10">
        {labels.items}: {visible.length} / {items.length}
      </div>
    </section>
  );
}
