import Link from "next/link";
import { Rocket, Github, ExternalLink } from "lucide-react";

const footerSections = [
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
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/berkcanmeric/devlaunchpad", external: true },
      { label: "Contribute", href: "https://github.com/berkcanmeric/devlaunchpad/issues", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-edge">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-neon via-violet to-coral flex items-center justify-center">
                <Rocket className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display font-bold text-sm tracking-tight">
                Dev<span className="text-neon">Launchpad</span>
              </span>
            </Link>
            <p className="text-sm text-fore-muted leading-relaxed max-w-xs">
              Ship web & mobile apps at warp speed. Everything you need, all in one place.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-fore-muted mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-fore-dim hover:text-fore transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-fore-dim hover:text-fore transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fore-muted">
            &copy; {new Date().getFullYear()} DevLaunchpad. Built with Next.js, Tailwind & Claude.
          </p>
          <div className="flex items-center gap-1 text-xs text-fore-muted">
            <span>Made for developers who ship</span>
            <Rocket className="w-3 h-3 text-neon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
