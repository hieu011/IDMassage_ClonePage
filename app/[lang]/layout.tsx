import { Header } from "@/components/layout/header";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'vi' | 'ko' }>
}>) {
  const lang = (await params).lang
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict.header.navbar} />
      {children}
    </>
  );
}
