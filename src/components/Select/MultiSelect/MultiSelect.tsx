import * as Ariakit from "@ariakit/react";
import list from "../list";
import React, { FC, useMemo, useState, useTransition } from "react";
import cls from '../Select.module.css';
import { Input } from "../../Input/Input";
import { Icon } from "../../Icon/Icon";
import { IconType } from "../../Icon/IconsMapping";
import { CommonSelect } from "../CommonSelect";

interface SelectProps {
    
}
 
export const MultiSelect: FC<SelectProps> = () => {
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState("");
    const [selectedValues, setSelectedValues] = useState([]);

    const matches = useMemo(() => list.filter(option => option.toLowerCase().includes(searchValue)), [searchValue]);

    return (
      <Ariakit.ComboboxProvider
        setValue={(value) => {
          startTransition(() => setSearchValue(value));
        }}
        setSelectedValue={(val) => setSelectedValues(val)}
        selectedValue={selectedValues}
      >
        <CommonSelect options={matches} optionIcon={<Ariakit.ComboboxItemCheck />} />
    </Ariakit.ComboboxProvider>
    );
}
 