import PracticeClient from "@/components/latihan-bicara/practiceClient";

export default async function Page({ params }: { params: { level: string } }) {
  const { level } = await params;
  return <PracticeClient level={level} />;
}
