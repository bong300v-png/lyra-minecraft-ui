import { notFound } from "next/navigation";
import { getPlayPage, PLAY_PAGES } from "@/data/play-pages";
import { PlayGuide } from "@/components/play/PlayGuide";

export function generateStaticParams() {
  return Object.keys(PLAY_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPlayPage(slug);
  if (!page) return { title: "Play | Lyra" };
  return { title: page.title, description: `${page.heading} — ${page.ip}` };
}

export default async function PlaySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPlayPage(slug);
  if (!page) notFound();
  return <PlayGuide page={page} />;
}
