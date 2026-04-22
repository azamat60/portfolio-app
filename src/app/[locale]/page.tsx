import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/Terminal/Terminal";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { getLocalizedProjects } from "@/data/projects";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const featured = getLocalizedProjects(locale)
    .toSorted((a, b) => {
      if (a.type === b.type) return 0;
      return a.type === "pet" ? -1 : 1;
    })
    .slice(0, 9);

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <Terminal />
          <div className="hero-below">
            <h1 className="hero-tagline">
              {t("heroTagline0")}
              <span className="accent">{t("heroTagline1")}</span>
              {t("heroTagline2")}
            </h1>
            <p className="hero-sub">{t("heroSub")}</p>
            <div className="hero-cta">
              <Link href={`/${locale}/projects`} className="btn btn-primary">
                {t("viewProjects")}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href={`/${locale}/contact`} className="btn btn-secondary">
                {t("getInTouch")}
              </Link>
            </div>
            <div className="hero-meta">
              <span>
                <span className="status-dot" /> {t("meta0")}
              </span>
              <span>{t("meta1")}</span>
              <span>{t("meta2")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">/featured</div>
              <h2>{t("featuredProjects")}</h2>
              <p>{t("featuredSub")}</p>
            </div>
            <Link href={`/${locale}/projects`} className="btn btn-ghost">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="grid-3-compact">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                locale={locale}
                delay={i * 60}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="about-teaser">
            <div className="avatar-block">
              <Image src="/avatar_square.png" alt="Azamat Altymyshev" fill sizes="(max-width: 900px) 120px, 280px" className="avatar-photo" />
            </div>
            <div>
              <div className="eyebrow">/about</div>
              <h2 style={{ marginBottom: 16 }}>{t("aboutTeaser")}</h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: 20,
                  fontSize: 16,
                }}
              >
                {t("aboutTeaserBody")}
              </p>
              <div className="teaser-stats">
                <div className="teaser-stat">
                  <span className="teaser-stat-value">7+</span>
                  <span className="teaser-stat-label">years exp</span>
                </div>
                <div className="teaser-stat">
                  <span className="teaser-stat-value">20+</span>
                  <span className="teaser-stat-label">projects</span>
                </div>
                <div className="teaser-stat">
                  <span className="teaser-stat-value">∞</span>
                  <span className="teaser-stat-label">Cups of Coffee</span>
                </div>
              </div>
              <div className="teaser-stack">
                {[
                  "Claude Code",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "Tailwind",
                  "PostgreSQL",
                ].map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={`/${locale}/about`} className="btn btn-secondary">
                {t("readMore")} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
