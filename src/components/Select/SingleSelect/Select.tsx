import * as Ariakit from '@ariakit/react';
import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { CommonSelect } from '../CommonSelect';
import { SingleSelectProps } from '../types/SelectProps';
import { matchSorter } from 'match-sorter';

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
