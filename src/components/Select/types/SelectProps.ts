import { ComboboxItemCheckProps } from "@ariakit/react";
import { ReactElement } from "react";

interface SelectProps {
    options: string[];
    label?: string;
    emptyMessage?: string;
    placeholder?: string;
}

export interface SingleSelectProps extends SelectProps {
    onSelectChange(selectedValue: string): void;
}

export interface MultiSelectProps extends SelectProps {
    onSelectChange(selectedValue: string[]): void;
}

export interface CommonSelectProps extends SelectProps {
    optionIcon?: ReactElement<ComboboxItemCheckProps>;
}