export function animDelayTemplate(i: number, items: number, duration: number): string {
  return `
    &:nth-child(${i + 1}) {
      animation-delay: ${`${(duration / items) * i}s`}
    }
  `;
}

export function getAnimations(items: number, duration: number): string {
  let str = '';
  for (let i = 0; i < items; i += 1) str += animDelayTemplate(i, items, duration);

  return str;
}
