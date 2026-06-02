"use client";

const primary = "#0f766e";

export function ServiceStepCard({
  step,
  title,
  desc,
  icon,
}: {
  step: string;
  title: string;
  desc: string;
  icon: "phone" | "ruler" | "install";
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border border-black/5">
      <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-b from-primary/8 to-primary/5 p-8">
        {icon === "phone" && <IconPhone />}
        {icon === "ruler" && <IconRuler />}
        {icon === "install" && <IconInstall />}
      </div>
      <div className="p-6">
        <span className="text-primary font-bold text-2xl tracking-tight">{step}</span>
        <h3 className="font-semibold text-lg text-black mt-2 mb-2">{title}</h3>
        <p className="text-sm text-black/65 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function IconPhone() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 28h16v4H32z" fill={primary} fillOpacity="0.2" stroke={primary} />
      <path d="M28 32c0-6 5-10 12-10s12 4 12 10v12c0 6-5 10-12 10h-2" />
      <path d="M52 32c0-6-5-10-12-10s-12 4-12 10v12c0 6 5 10 12 10h2" />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="34" width="44" height="12" rx="3" fill="white" stroke={primary} />
      <line x1="22" y1="36" x2="22" y2="44" stroke={primary} strokeOpacity="0.8" />
      <line x1="30" y1="36" x2="30" y2="44" stroke={primary} />
      <line x1="38" y1="36" x2="38" y2="44" stroke={primary} />
      <line x1="46" y1="36" x2="46" y2="44" stroke={primary} />
      <line x1="54" y1="36" x2="54" y2="44" stroke={primary} />
      <path d="M62 40h12" stroke={primary} strokeWidth="2.5" />
      <rect x="14" y="36" width="6" height="8" rx="1" fill={primary} />
    </svg>
  );
}

function IconInstall() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="36" r="14" fill="white" stroke={primary} />
      <path d="M40 28v16M34 34h12" stroke={primary} strokeWidth="2" />
      <path d="M38 34l4 4 4-4" stroke={primary} strokeWidth="1.5" />
      <rect x="32" y="22" width="16" height="8" rx="2" fill={primary} />
      <rect x="34" y="50" width="6" height="14" rx="1" fill={primary} fillOpacity="0.2" stroke={primary} />
      <rect x="40" y="50" width="6" height="14" rx="1" fill={primary} fillOpacity="0.2" stroke={primary} />
      <path d="M24 64h32" stroke={primary} strokeOpacity="0.6" strokeWidth="2" />
    </svg>
  );
}
