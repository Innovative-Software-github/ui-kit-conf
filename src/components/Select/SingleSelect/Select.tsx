import * as Ariakit from '@ariakit/react';
import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { matchSorter } from 'match-sorter';
import { CommonSelect } from '../CommonSelect';
import { SelectProps } from '../types/SelectProps';

export interface SingleSelectProps extends SelectProps {
  onSelectChange(selectedValue: string): void;
}

export const Select: FC<SingleSelectProps> = ({
  onSelectChange,
  options,
  label,
  emptyMessage,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const matches = useMemo(() => matchSorter(options, searchValue), [searchValue]);

  useEffect(() => {
    onSelectChange(selectedValue);
  }, [selectedValue]);

  return (
    <Ariakit.ComboboxProvider
      setValue={(value) => setSearchValue(value)}
      setSelectedValue={(val) => setSelectedValue(val)}
      selectedValue={selectedValue}
    >
      <CommonSelect
        options={matches}
        label={label}
        emptyMessage={emptyMessage}
        placeholder={placeholder}
      />
    </Ariakit.ComboboxProvider>
  );
};
