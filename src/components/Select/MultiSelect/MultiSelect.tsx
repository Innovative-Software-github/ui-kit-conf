import * as Ariakit from '@ariakit/react';
import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { CommonSelect } from '../CommonSelect';
import { MultiSelectProps } from '../types/SelectProps';
import { findMatch } from '../utils/findMatch';

export const MultiSelect: FC<MultiSelectProps> = ({
  onSelectChange,
  options,
  label,
  emptyMessage,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);

  const matches = useMemo(() => findMatch(options, searchValue), [searchValue]);

  useEffect(() => {
    onSelectChange(selectedValues);
  }, [selectedValues]);

  return (
    <Ariakit.ComboboxProvider
      setValue={(value) => () => setSearchValue(value)}
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
