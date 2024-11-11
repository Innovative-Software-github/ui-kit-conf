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
 
export const Select: FC<SelectProps> = () => {
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const matches = useMemo(() => list.filter(option => option.toLowerCase().includes(searchValue.toLowerCase())), [searchValue]);

    return (
      <Ariakit.ComboboxProvider
        setValue={(value) => {
          startTransition(() => setSearchValue(value));
        }}
        setSelectedValue={(val) => setSelectedValue(val)}
        selectedValue={selectedValue}
      >
        <CommonSelect options={matches} />
    </Ariakit.ComboboxProvider>
    );
}
 