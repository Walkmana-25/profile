import { notFound } from "next/navigation";
import { getWorkBySlug, getAllWorkSlugs } from "@/lib/works";
import { WorkDetail } from "@/components/work";

export async function generateStaticParams() {
  const slugs = getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex justify-center py-20 px-4">
      <WorkDetail work={work} />
    </main>
  );
}
