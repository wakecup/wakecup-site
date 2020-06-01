export function animDelayTemplate(i, items, duration) {
  return `
    &:nth-child(${i + 1}) {
      animation-delay: ${`${(duration / items) * i}s`}
    }
  `;
}

export function getAnimations(items, duration) {
  let str = '';
  for (let i = 0; i < items; i += 1) str += animDelayTemplate(i, items, duration);

  return str;
}
