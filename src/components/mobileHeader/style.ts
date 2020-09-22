import styled, { css } from 'styled-components';
import { theme } from '@style';
import { devices } from '@style/constants';

// const cubic = css`cubic-bezier(0.4, 0.01, 0.165, 0.99)`;

/* stylelint-disable value-keyword-case */
/* stylelint-disable declaration-colon-newline-after */
function menuItem() {
  let styles = '';

  for (let i = 0; i < 4; i += 1) {
    styles += `
      &:nth-child(${i}) {
        transition-delay: ${0.56 - i * 0.07}s;
      }
    `;
  }

  return css`
    ${styles}
  `;
}

function menuItemOpen() {
  let styles = '';

  for (let i = 0; i < 4; i += 1) {
    styles += `
      &:nth-child(${i}) {
        transition-delay: ${0.07 * i + 0.2}s;
      }
    `;
  }

  return css`
    ${styles}
  `;
}

// From https://codepen.io/theaftermath87/pen/meZgzM
export const MobileWrapper = styled.div`
  @media ${devices.desktop} {
    display: none;
  }

  .menu {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    height: 50px;
    width: 100%;
    background: rgba(#000, 0.8);
    overflow: hidden;
    transition: all 0.5s ease-out, background 1s ease-out;
    transition-delay: 0.2s;
    z-index: 1;

    .burger-container {
      position: relative;
      display: block;
      height: 45px;
      width: 45px;
      cursor: pointer;
      transform: rotate(0deg);
      transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      margin: 10px 10px 0 auto;

      .burger {
        width: 18px;
        height: 8px;
        position: relative;
        display: block;
        margin: -4px auto 0;
        top: 50%;
        border: 0;

        .bar {
          width: 100%;
          height: 1px;
          display: block;
          position: relative;
          background: ${theme.colors.primary.color};
          transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
          transition-delay: 0s;

          &.topBar {
            transform: translateY(0) rotate(0deg);
          }

          &.btmBar {
            transform: translateY(6px) rotate(0deg);
          }
        }
      }
    }
  }

  .menu-content {
    position: relative;
    display: block;
    padding: 0 48px 0;
    list-style: none;

    &:first-child {
      display: none;
    }

    .menu-item {
      border-bottom: 1px solid #333;
      margin-top: 5px;
      transform: scale(1.15) translateY(-30px);
      opacity: 0;
      width: 93%;
      transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
        opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
        width 1s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      ${menuItem()};

      a {
        display: block;
        position: relative;
        color: ${theme.colors.primary.color};
        text-decoration: none;
        font-size: 22px;
        line-height: 2.35;
        font-weight: 200;
        width: 100%;
      }
    }
  }

  .menu-opened {
    height: 100%;
    background-color: ${theme.colors.pageBackground};
    transition: all 0.3s ease-in, background 0.5s ease-in;
    transition-delay: 0.25s;
    width: 100%;

    .burger-container {
      transform: rotate(90deg);
      margin: 15px 0 0 auto;

      .burger {
        .bar {
          transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
          transition-delay: 0.2s;

          &.topBar {
            transform: translateY(4px) rotate(45deg);
          }

          &.btmBar {
            transform: translateY(3px) rotate(-45deg);
          }
        }
      }
    }

    .menu-content {
      &:first-child {
        display: block;
      }

      .menu-item {
        transform: scale(1) translateY(0);
        opacity: 1;
        width: 100%;
        ${menuItemOpen()}
      }
    }
  }
`;
