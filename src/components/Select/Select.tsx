import { IconType } from "../Icon/IconsMapping";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import React, { useEffect, useMemo, useState } from "react";
import { FC } from "react";

interface ISelectProps {
    options: ISelectOption[];   
    onSelectChange(selectedOption: ISelectOption): void;
}

export interface ISelectOption {
    title: string;
    value: string;
}
 
export const Select: FC<ISelectProps> = ({
    options,
    onSelectChange
}) => {
    const [inputVal, setInputVal] = useState("");
    const satisfyingOptions: ISelectOption[] = useMemo(() => {
        return options.filter(option => option.title.includes(inputVal) && inputVal !== '')
    }, [inputVal]);
    const [selectedOption, setSelectedOption] = useState<ISelectOption | undefined>();

    return (
        <div style={{border: '1px black solid', listStyle: "none"}}>
            <Input
                size="M"
                elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
                placeholder="Placeholder" value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} ></Input>

            {satisfyingOptions.length > 0 && 
            <ul  style={{border: '1px black solid'}}>
                {options.map(option => 
                <li 
                    key={option.value}
                    onClick={() => { setInputVal(option.title); setSelectedOption(option); onSelectChange(option); }}
                >
                    {option.title}
                </li>)}
            </ul>}
        </div>
    );
}