import * as Ariakit from "@ariakit/react";
import list from "./list";
import React, { FC, useEffect, useMemo, useState, useTransition } from "react";
import clsx from 'clsx';
import cls from './Select.module.css';
import { Input } from "../Input/Input";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconsMapping";

interface SelectProps {
    
}
 
export const Select: FC<SelectProps> = () => {
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const matches = useMemo(() => list.filter(option => option.toLowerCase().includes(searchValue)), [searchValue]);

    useEffect(() => {
      console.log(selectedValue);
    }, [selectedValue])

    return (
        <Ariakit.ComboboxProvider
          setValue={(value) => {
            startTransition(() => setSearchValue(value));
          }}
          setSelectedValue={(val) => setSelectedValue(val)}
          selectedValue={selectedValue}
        >
      <Ariakit.ComboboxLabel>
        Your favorite food
      </Ariakit.ComboboxLabel>
      <div className={cls.comboboxWrapper}>
        <Ariakit.Combobox placeholder="e.g., Pizza" 
        render={<Input
            size="L"
            className={cls.comboboxInput}
          />} />
        <Ariakit.ComboboxDisclosure className={cls.comboboxDisclosure}
         render={<Icon type={IconType.ArrowDown_20} width={20} height={20}/>} />
      </div>
      <Ariakit.ComboboxPopover gutter={4} sameWidth>
      {matches.length ? (
          matches.map((value) => (
            <Ariakit.ComboboxItem
              key={value}
              value={value}
            />
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
    );
}
 