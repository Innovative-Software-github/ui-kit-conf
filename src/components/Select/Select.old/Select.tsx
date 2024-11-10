import { IconType } from "../../Icon/IconsMapping";
import { Icon } from "../../Icon/Icon";
import { Input } from "../../Input/Input";
import React, { useEffect, useState } from "react";
import MultiOption from "./ui/MultiOption";
import SingleOption from "./ui/SingleOption";

interface ISelectProps<T> {
    options: ISelectOption[];   
    mode: 'multi' | 'single';
    onSelectChange(selectedOptions: T): void;
}

export interface ISelectOption {
    title: string;
    value: string;
}
 
export function Select<T extends ISelectOption>({
    options,
    mode,
    onSelectChange
} : ISelectProps<T>) {
    const [inputVal, setInputVal] = useState("");
    const [satisfyingOptions, setSatisfyingOptions] = useState<ISelectOption[]>([]);
    // const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>([]);
    const [isOptionsOpened, setIsOptionsOpened] = useState(false);

    // useEffect(() => {
    //     onSelectChange(selectedOption);
    //     setIsOptionsOpened(false);
    //     setInputVal(selectedOption ? selectedOption.title : '');
    // }, [selectedOption]) 

    function handleOptionChange(selectedOptions: ISelectOption[]): void {
        onSelectChange(selectedOptions);
        setIsOptionsOpened(false);
        setInputVal('');
    }

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
                mode === 'multi' ? <MultiOption option={option} onOptionChange={selectedOptions => { onSelectChange(selectedOptions) }} />
                : <SingleOption option={option} onOptionChange={selectedOption => {  }} />)}
            </ul>}
        </div>
    );
}
