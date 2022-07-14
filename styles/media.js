import { Breakpoints } from './theme';
import { css } from 'styled-components';

const mobile = (content) =>
    css`
        @media only screen and (min-width: ${Breakpoints.Mobile}px) {
            ${content}
        }
    `;

const tabletM = (content) =>
    css`
        @media only screen and (min-width: ${Breakpoints.TabletM}px) {
            ${content}
        }
    `;

const tabletL = (content) =>
    css`
        @media only screen and (min-width: ${Breakpoints.TabletL}px) {
            ${content}
        }
    `;

const desktopS = (content) =>
    css`
        @media only screen and (min-width: ${Breakpoints.DesktopS}px) {
            ${content}
        }
    `;

const desktopM = (content) =>
    css`
        @media only screen and (min-width: ${Breakpoints.DesktopM}px) {
            ${content}
        }
    `;

const desktopL = (content) =>
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
