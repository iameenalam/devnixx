const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://devnixx.vercel.app";

export const siteConfig = {
  name: "devnixx. | Empowering Growth Through Smart Digital Solutions",
  description:
    "devnixx. is a leading software agency offering web design, web development, app development, AI solutions, and data analytics to help businesses grow smarter.",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    instagram: "https://instagram.com/devnixx.pk",
    linkedin: "https://www.linkedin.com/in/devnixx",
  },
};
