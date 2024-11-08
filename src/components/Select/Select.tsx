import { IconType } from "../Icon/IconsMapping";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
    const [satisfyingOptions, setSatisfyingOptions] = useState<ISelectOption[]>([]);
    const [selectedOption, setSelectedOption] = useState<ISelectOption | undefined>();
    const [isOptionsOpened, setIsOptionsOpened] = useState(false);

    useEffect(() => {
        setIsOptionsOpened(false);
        setInputVal(selectedOption ? selectedOption.title : '');
    }, [selectedOption]) 

    useEffect(() => {
        if (satisfyingOptions.length > 0) setIsOptionsOpened(true);
        else setIsOptionsOpened(false);
    }, [satisfyingOptions])

    return (
        <div style={{border: '1px black solid', listStyle: "none"}}>
            <Input
                size="M"
                elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
                placeholder="Выберите опцию..." value={inputVal} onChange={(e) => {
                    const inp = e.target.value;
                    setSatisfyingOptions(options.filter(option => option.title.includes(inp) && inp !== ''));
                    setInputVal(inp);
                 }} ></Input>

            {isOptionsOpened && 
            <ul  style={{border: '1px black solid'}}>
                {satisfyingOptions.map(option => 
                <li 
                    key={option.value}
                    onClick={() => { setSelectedOption({...option}) }}
                >
                    {option.title}
                </li>)}
            </ul>}
        </div>
    );
}