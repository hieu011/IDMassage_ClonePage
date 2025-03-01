import { Header } from "@/components/layout/header";
import ServicesIntroduction from "./home/services-introduction";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'vi' | 'ko' }>
}) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)
  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict.header.navbar} />
      <main>
        <ServicesIntroduction/>
      </main>
    </div>
  );
}
