import * as Ariakit from "@ariakit/react";
import list from "./list";
import React, { FC, useEffect, useMemo, useState, useTransition } from "react";

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
      <Ariakit.ComboboxLabel className="label">
        Your favorite food
      </Ariakit.ComboboxLabel>
      <div className="combobox-wrapper">
        <Ariakit.Combobox placeholder="e.g., Pizza" className="combobox" />
        <Ariakit.ComboboxDisclosure className="button secondary disclosure" />
      </div>
      <Ariakit.ComboboxPopover gutter={4} sameWidth className="popover">
      {matches.length ? (
          matches.map((value) => (
            <Ariakit.ComboboxItem
              key={value}
              value={value}
              className="combobox-item"
            />
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
    );
}
 