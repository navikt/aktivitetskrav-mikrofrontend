import { QuestionmarkDiamondIcon } from "@navikt/aksel-icons";
import { InfoBox } from "../infobox/InfoBox";
import React from "react";

export const NyttTidStedBoks = () => {
  return (
    <InfoBox
      text="Du ønsker å endre tid eller sted"
      icon={<QuestionmarkDiamondIcon title="Du har svart at du ønsker å endre tid eller sted" fontSize="1.5rem" />}
      background={"var(--surface-warning-subtle-hover, #FFD799);"}
    />
  );
};
