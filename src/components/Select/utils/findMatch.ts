export function findMatch(options: string[], searchValue: string): string[] {
  const loweredSearchValue = searchValue.toLowerCase();

  return options.filter((option) => option.toLowerCase().includes(loweredSearchValue));
}
