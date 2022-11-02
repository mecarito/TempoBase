import { categoryColors } from '../constants';

export function calculateBackgroundColor(categoryName: string) {
  const name = categoryName.toLocaleLowerCase();
  let color = '#148A08';
  const alphabetGroups = [
    'ab',
    'cd',
    'ef',
    'gh',
    'ij',
    'kl',
    'mn',
    'op',
    'qr',
    'st',
    'uv',
    'wx',
    'yz',
  ];
  alphabetGroups.forEach((group) => {
    if (group.includes(name.charAt(0))) {
      color = categoryColors[group as keyof typeof categoryColors];
    }
  });
  return color;
}
