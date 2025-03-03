import Container from "@/components/layout/container";
import { IntroductionBanner } from "./introduction-banner";
import { LanguageButton } from "./language-button";
import { PriceRandomEmployee } from "./price-random-employee";
import { PricePickEmployee } from "./price-pick-employee";
import { Recruitment } from "./recruitment";
import { ListButtonService } from "./list-button-service";


export default function ServicesIntroduction({dict,lang} : any) {
  const introductionBanner = dict?.bannerUrl?.introductionBanner;
  const priceRandomEmployee = {
    bannerUrl: dict?.bannerUrl?.randomEmployeeBanner,
    bannerButton: dict?.bannerButton?.randomEmployeeButton,
    bannerText: dict?.bannerButton?.bannerButtonText
  };
  
  const pricePickEmployee = {
    bannerUrl: dict?.bannerUrl?.pickEmployeeBanner,
    bannerButton: dict?.bannerButton?.pickEmployeeButton,
    bannerText: dict?.bannerButton?.bannerButtonText
  };
  const listButtonService = dict?.listButtonService;
  return (
    <Container>
      <IntroductionBanner introductionBanner = {introductionBanner}/>
      <LanguageButton/>
      <PriceRandomEmployee priceRandomEmployee = {priceRandomEmployee} lang = {lang}/>
      <PricePickEmployee  pricePickEmployee = {pricePickEmployee}/>
      <ListButtonService listButtonService = {listButtonService}/>
      <Recruitment lang={lang}/>
    </Container>
  );
}
