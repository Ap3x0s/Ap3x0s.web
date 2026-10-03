import { useEffect, useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

interface Labels {
  menu: string;
  close: string;
  systemStatus: string;
  online: string;
  build: string;
}

interface Props {
  items: MenuItem[];
  labels: Labels;
}

export default function MobileMenu({ items, labels }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("astro:before-swap", close);
    return () => document.removeEventListener("astro:before-swap", close);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-white font-mono uppercase text-sm tracking-widest hover:text-gold transition-colors"
      >
        [ {labels.menu} ]
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col">
          <div className="flex justify-between items-center container-page py-5 border-b border-line">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              AP3X0<span className="text-gold">_</span>WEB
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gold font-mono uppercase text-sm tracking-widest hover:text-white transition-colors"
            >
              [ {labels.close} ]
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center container-page">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-6 py-4 border-b border-line hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs text-neutral-600 group-hover:text-gold transition-colors">
                  {item.id}
                </span>
                <span className="font-display text-4xl uppercase text-white group-hover:text-gold group-hover:translate-x-2 transition-all duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="container-page py-6 border-t border-line flex justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            <span>
              {labels.systemStatus}:{" "}
              <span className="text-gold animate-signal-pulse">
                {labels.online}
              </span>
            </span>
            <span>
              {labels.build} v1.0
            </span>
          </div>
        </div>
      )}
    </>
  );
}
