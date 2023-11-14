import React from "react";
import { MikrofrontendLinkPanel } from "./common/MikrofrontendLinkPanel";
import { TagMeta } from "./common/MikrofrontendPanel";
import { getShortDateFormat } from "../../utils/dateUtils";
import { vurdererHeadingText } from "../../commonTexts";

interface Props {
  journalpostId?: string;
  fristDato: string;
}

export const ForhaandsvarselPanel = ({ journalpostId, fristDato }: Props) => {
  const tagInfo: TagMeta | undefined = fristDato
    ? {
        variant: new Date() > new Date(fristDato) ? "error-moderate" : "warning-moderate",
        text: `Svarfrist: ${getShortDateFormat(fristDato)}`,
      }
    : undefined;

  if (!journalpostId) {
    return (
      //Ikke mange som vil få denne, da det er en mellomstate der vi ikke enda har mottatt dokumentet. Det blir batch-sendt til oss hvert 10 min.
      <MikrofrontendLinkPanel
        headingText={vurdererHeadingText}
        bodyText="Les mer om aktivitetsplikten og hva den betyr for deg"
        alertStyle="info"
      />
    );
  }

  return (
    <MikrofrontendLinkPanel
      headingText={vurdererHeadingText}
      bodyText="NAV vurderer å stanse sykepengene dine"
      alertStyle="warning"
      tag={tagInfo}
    />
  );
};
