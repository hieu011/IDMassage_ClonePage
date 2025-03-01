import Container from "@/components/layout/container";
import { IntroductionBanner } from "./introduction-banner";
import { LanguageButton } from "./language-button";
import { PriceRandomEmployee } from "./price-random-employee";
import { PricePickEmployee } from "./price-pick-employee";
import { Recruitment } from "./recruitment";
import { ListButtonService } from "./list-button-service";


export default function ServicesIntroduction() {
  return (
    <Container>
      <IntroductionBanner/>
      <LanguageButton/>
      <PriceRandomEmployee/>
      <PricePickEmployee/>
      <ListButtonService/>
      <Recruitment/>
    </Container>
  );
}
