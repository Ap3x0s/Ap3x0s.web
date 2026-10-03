import { useMemo } from "react";

interface Props {
  className?: string;
}

const CODE_LINES: { n: string; text: string; accent?: boolean }[] = [
  { n: "01", text: "import { Agent, Skill } from '@ap3x0/kernel/local';" },
  { n: "02", text: "import { memory } from '@engram/palace';" },
  { n: "03", text: "" },
  { n: "04", text: "// SYSTEM_MANIFEST: PROJECT AP3X0_WEB", accent: true },
  { n: "05", text: "// STATUS: LOCAL_FIRST || TELEMETRY: ZERO" },
  { n: "06", text: "const PHILOSOPHY = {" },
  { n: "07", text: "  aesthetic: 'BRUTALISM'," },
  { n: "08", text: "  borders: '0px', // ROUNDED CORNERS ARE FORBIDDEN" },
  { n: "09", text: "  accent: '#FFC800' // signal gold frequency", accent: true },
  { n: "10", text: "};" },
  { n: "11", text: "" },
  { n: "12", text: "async function ship(user: Entity): Promise<Void> {" },
  { n: "13", text: "  const reality = await fetch('http://localhost/truth');" },
  { n: "14", text: "  if (!reality.ok) throw new SimulationError('Sector 7');" },
  { n: "15", text: "" },
  { n: "16", text: "  // TODO: refactor the cloud. Local-first is better." },
  { n: "17", text: "  const mind = await user.getBuffer();" },
  { n: "18", text: "  mind.write('System online. No telemetry sent.');" },
  { n: "19", text: "" },
  { n: "20", text: "  return user.upgrade({" },
  { n: "21", text: "    curiosity: Infinity," },
  { n: "22", text: "    vendorLockIn: 0," },
  { n: "23", text: "    stackOverflow: false" },
  { n: "24", text: "  });" },
  { n: "25", text: "}" },
  { n: "26", text: "" },
  { n: "27", text: "// CRITICAL: the void is friendly. prove it with tests." },
  { n: "28", text: "/* SYSTEM LOG: agent paired. skill loaded. hooks armed. */" },
  { n: "29", text: "class Builder extends Human implements Developer {" },
  { n: "30", text: "  constructor() {" },
  { n: "31", text: "    super();" },
  { n: "32", text: "    this.caffeineLevel = 'CRITICAL';" },
  { n: "33", text: "    this.cloudDependence = 0;" },
  { n: "34", text: "    this.theme = 'DARK_MODE_ONLY';" },
  { n: "35", text: "  }" },
  { n: "36", text: "}" },
  { n: "37", text: "" },
  { n: "38", text: "while (true) {" },
  { n: "39", text: "  createSomethingBeautiful();" },
  { n: "40", text: "  await new Promise(resolve => setTimeout(resolve, 0));" },
  { n: "41", text: "}" },
  { n: "42", text: "// EOF" },
];

function CodeBlock() {
  return (
    <div className="flex flex-col gap-1 pb-4" aria-hidden="true">
      {CODE_LINES.map((line) => (
        <div
          key={line.n}
          className="font-mono text-xs whitespace-nowrap px-4 leading-relaxed"
        >
          <span className="text-neutral-700 mr-4">{line.n}</span>
          <span className={line.accent ? "text-gold/70" : "text-neutral-600"}>
            {line.text || "\u00A0"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function GhostTerminal({ className = "" }: Props) {
  const blocks = useMemo(() => [0, 1], []);

  return (
    <div
      className={`relative overflow-hidden select-none pointer-events-none ${className}`}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      <div className="animate-ghost-scroll flex flex-col">
        {blocks.map((i) => (
          <CodeBlock key={i} />
        ))}
      </div>
    </div>
  );
}
