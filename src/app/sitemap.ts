import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sohumfintech.in";
  const lastModified = new Date();

  const routes = [
    "",
    "/loans",
    "/investments",
    "/emi-calculator",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
