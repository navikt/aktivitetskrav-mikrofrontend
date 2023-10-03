import { HeadingSpacing } from "../../typography/typography";
import { Column } from "../../columns/Column";
import React from "react";
import {
  AlertContainer,
  ChevronPanel,
  ChevronSection,
  ContainedTag,
  ErrorIcon,
  HeadingRow,
  InfoIcon,
  MainContentRow,
  MainContentText,
  SuccessIcon,
  YellowWarningIcon,
} from "./PanelComponents";
import { aktivitetskravUrl } from "../../../api/urls";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { TagMeta } from "./MikrofrontendPanel";

interface Props {
  href?: string;
  headingText: string;
  alertStyle: "info" | "success" | "warning" | "error";
  bodyText: string;
  tag?: TagMeta;
}

export const MikrofrontendLinkPanel = ({ href, headingText, alertStyle, bodyText, tag }: Props) => {
  return (
    <ChevronPanel
      id="mikrofrontend__linkPanel"
      onClick={() => {
        window.location.href = href || aktivitetskravUrl;
      }}
    >
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"} className="aktivitetskrav__title">
          {headingText}
        </HeadingSpacing>
        <ChevronSection>
          <AlertContainer>
            {alertStyle === "info" && <InfoIcon />}
            {alertStyle === "warning" && <YellowWarningIcon />}
            {alertStyle === "success" && <SuccessIcon />}
            {alertStyle === "error" && <ErrorIcon />}
          </AlertContainer>
          <ChevronRightIcon className="navds-link-panel__chevron" aria-hidden />
        </ChevronSection>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size="medium" level={"3"}>
            {bodyText}
          </MainContentText>
          {tag && (
            <ContainedTag size={"small"} variant={tag.variant}>
              {tag.text}
            </ContainedTag>
          )}
        </Column>
      </MainContentRow>
    </ChevronPanel>
  );
};