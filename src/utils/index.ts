import { Metadata } from "next";
import { siteConfig } from "./site";

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("en-US", { month: "2-digit" });
  const year = newDate.getFullYear();

  return { month, year };
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Software Agency",
      "Web Design",
      "Web Development",
      "App Development",
      "AI Solutions",
      "Data Analytics",
      "Devnixx",
      "devnixx.",
    ],
    authors: [
      {
        name: "devnixx.",
      },
    ],
    creator: "devnixx.",
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
