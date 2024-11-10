import * as Ariakit from "@ariakit/react";
import list from "./list";
import React, { FC, useEffect, useMemo, useState, useTransition } from "react";

interface SelectProps {
    
}
 
export const MultiSelect: FC<SelectProps> = () => {
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState("");
    const [selectedValues, setSelectedValues] = useState<string[]>(["Bacon"]);

    const matches = useMemo(() => list.filter(option => option.toLowerCase().includes(searchValue)), [searchValue]);

    useEffect(() => {
      console.log(selectedValues);
    }, [selectedValues])

    return (
        <Ariakit.ComboboxProvider
          setValue={(value) => {
            startTransition(() => setSearchValue(value));
          }}
          setSelectedValue={(val) => setSelectedValues(val)}
          selectedValue={selectedValues}
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
            >
              <Ariakit.ComboboxItemCheck />
              {value}
            </Ariakit.ComboboxItem>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
    );
}
 