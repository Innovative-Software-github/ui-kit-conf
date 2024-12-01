import React from 'react';

export type TUseToggleReturn = [boolean, () => void];

export const useToggle = (initialValue: boolean): TUseToggleReturn => {
  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => setValue((prev) => !prev), [value]);

  return [value, toggleValue];
};
