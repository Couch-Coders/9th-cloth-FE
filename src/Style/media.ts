import { css } from "styled-components";

export const Breakpoints = {
  Mobile: 425,
  TabletM: 768,
  TabletL: 1024,
  DesktopS: 1280,
  DesktopM: 1366,
  DesktopL: 1920,
};

const mobile = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.Mobile}px) {
      ${content}
    }
  `;

const tabletM = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.TabletM}px) {
      ${content}
    }
  `;

const tabletL = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.TabletL}px) {
      ${content}
    }
  `;

const desktopS = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.DesktopS}px) {
      ${content}
    }
  `;

const desktopM = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.DesktopM}px) {
      ${content}
    }
  `;

const desktopL = (content: any) =>
  css`
    @media only screen and (min-width: ${Breakpoints.DesktopL}px) {
      ${content}
    }
  `;

export const media = {
  mobile,
  tabletM,
  tabletL,
  desktopS,
  desktopM,
  desktopL,
};
