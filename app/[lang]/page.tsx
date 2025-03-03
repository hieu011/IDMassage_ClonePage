import { Header } from "@/components/layout/header";
import ServicesIntroduction from "../../components/home/services-introduction";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <ServicesIntroduction />
      </main>
    </div>
  );
}
