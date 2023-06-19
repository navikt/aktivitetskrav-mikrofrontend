import { dialogmoteUrl } from "../../../api/urls";
import React from "react";
import { BasePanel } from "../BasePanel";
import { logEvent } from "../../../amplitude/amplitude";

export const MotebehovPanel = () => {
  return (
    <BasePanel
      href={`${dialogmoteUrl}/motebehov/svar`}
      onClick={() => logEvent("Navigerer til svar møtebehov")}
      heading={{ text: "Har du behov for dialogmøte?", icon: "warning" }}
      mainContent={{
        text: "NAV ønsker din vurdering om du trenger et dialogmøte",
        textFormat: "text",
        tag: {
          text: "Du har ikke svart",
          variant: "warning-moderate",
        },
      }}
    />
  );
};
