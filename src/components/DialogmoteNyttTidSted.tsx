import React from "react";
import { getFormattedMonth, getFormattedTime } from "../utils/dateUtils";
import { DialogmotePanel } from "./DialogmotePanel";
import { Brev } from "../types/shared/brev";

interface Props {
  brev: Brev;
}

export const DialogmoteNyttTidSted = ({ brev }: Props) => {
  return (
    <DialogmotePanel
      header={"Dialogmøtet er flyttet"}
      attending={brev.svar?.svarType || null}
      place={brev.sted}
      date={getFormattedMonth(brev.tid)}
      time={getFormattedTime(brev.tid)}
    />
  );
};
