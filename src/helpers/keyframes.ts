import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const coding1 = keyframes`
  0%,
  100% {
    opacity: 0;
  }

  9%,
  91% {
    opacity: 0;
  }

  10%,
  90% {
    opacity: 1;
  }
`;

export const coding2 = keyframes`
  0%,
  100% {
    opacity: 0;
  }

  19%,
  81% {
    opacity: 0;
  }

  20%,
  80% {
    opacity: 1;
  }
`;

export const coding3 = keyframes`
  0%,
  100% {
    opacity: 0;
  }

  29%,
  71% {
    opacity: 0;
  }

  30%,
  70% {
    opacity: 1;
  }
`;

export const appearScaling = keyframes`
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }

  5%,
  85% {
    transform: scale(1.1);
    opacity: 1;
  }

  10%,
  80% {
    transform: scale(1);
  }

  2%,
  90% {
    opacity: 0;
  }
`;
