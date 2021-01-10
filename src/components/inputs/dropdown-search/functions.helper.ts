export const searchOptions = (
  searchValue: string,
  options: string[]
): string[] =>
  options.filter((option: string) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );
