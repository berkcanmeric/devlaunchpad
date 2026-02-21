import Link from "next/link";

const sections = [
  {
    title: "Navigate",
    links: [
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "AI Tools", href: "/ai-tools" },
      { label: "Libraries", href: "/libraries" },
      { label: "Mobile SDKs", href: "/mobile-sdks" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Prompts & Skills", href: "/prompts" },
      { label: "Claude MCPs", href: "/mcps" },
      { label: "Mac Tools", href: "/mac-tools" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/berkcanmeric/devlaunchpad" },
      { label: "Issues", href: "https://github.com/berkcanmeric/devlaunchpad/issues" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-bold text-fore mb-2">DevLaunchpad</p>
            <p className="text-xs text-muted leading-relaxed">
              Ship web & mobile apps at warp speed.
            </p>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
                {s.title}
              </p>
              <ul className="space-y-2">
                {s.links.map((l) =>
                  l.href.startsWith("http") ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-fore transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-secondary hover:text-fore transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-edge">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} DevLaunchpad. Built with Next.js, Tailwind & Claude.
          </p>
        </div>
      </div>
    </footer>
  );
}
