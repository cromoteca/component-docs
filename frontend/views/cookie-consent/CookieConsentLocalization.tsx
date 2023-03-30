import { CookieConsent } from "@hilla/react-components/CookieConsent.js";

export default function CookieConsentLocalization() {
  return (
    <CookieConsent
      message="Tämä sivusto käyttää evästeitä parhaan kokemuksen tarjoamiseksi"
      dismiss="Selvä"
      learnMore="Lue lisää"
      learnMoreLink="https://vaadin.com/terms-of-service"
    />
  );
}
