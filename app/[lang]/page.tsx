import { Header } from "@/components/layout/header";
import ServicesIntroduction from "../../components/home/services-introduction";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function Home(
  {
    params,
  }: Readonly<{
    params: Promise<{ lang: 'en' | 'vi' | 'ko' }>
  }>
) {
  const lang = (await params).lang
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <ServicesIntroduction dict={dict} lang = {lang} />
      </main>
    </div>
  );
}
