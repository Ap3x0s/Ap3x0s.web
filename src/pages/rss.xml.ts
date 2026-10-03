import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "AP3X0_WEB // LOG",
    description:
      "Full-stack products under key. Local-first infrastructure & agent-driven engineering.",
    site: context.site ?? "https://ap3x0s.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace(/^(en|ru)\//, "")}`,
      lang: post.data.lang,
    })),
    customData: "<language>en</language>",
  });
}
