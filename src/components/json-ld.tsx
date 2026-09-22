import { featuredProject, site } from "@/content/site";

export function JsonLd() {
  const sameAs = [site.socials.github, featuredProject.repo];
  if (site.socials.linkedin) sameAs.unshift(site.socials.linkedin);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs,
    knowsAbout: site.seeking,
    description: site.oneLiner,
    ...(site.email ? { email: site.email } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
