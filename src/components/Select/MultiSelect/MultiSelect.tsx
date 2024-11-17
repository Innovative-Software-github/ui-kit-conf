import * as Ariakit from '@ariakit/react';
import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { CommonSelect } from '../CommonSelect';
import { SelectProps } from '../types/SelectProps';
import { matchSorter } from 'match-sorter';

interface MultiSelectProps extends SelectProps {
  onSelectChange(selectedValue: string[]): void;
}

export const MultiSelect: FC<MultiSelectProps> = ({
  onSelectChange,
  options,
  label,
  emptyMessage,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);

  const matches = useMemo(() => matchSorter(options, searchValue), [searchValue]);

  useEffect(() => {
    onSelectChange(selectedValues);
  }, [selectedValues]);

  return (
    <Ariakit.ComboboxProvider
      setValue={(value) => setSearchValue(value)}
      setSelectedValue={(val) => setSelectedValues(val)}
      selectedValue={selectedValues}
    >
      <CommonSelect
        options={matches}
        optionIcon={<Ariakit.ComboboxItemCheck />}
        label={label}
        emptyMessage={emptyMessage}
        placeholder={placeholder}
      />
    </Ariakit.ComboboxProvider>
  );
};
