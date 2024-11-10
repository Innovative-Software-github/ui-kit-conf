import React, { useEffect, useState } from "react";
import { FC } from "react";
import { ISelectOption } from "../Select";

interface MultiOptionProps {
    option: ISelectOption;
    onOptionChange(chosenOptions: ISelectOption[]): void;
}
 
const MultiOption: FC<MultiOptionProps> = ({
    option,
    onOptionChange
}) => {

    const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>([]);

    useEffect(() => {
        onOptionChange(selectedOptions);
    }, [selectedOptions])

    return ( 
        <li 
            key={option.value}
            onClick={() => { setSelectedOptions(prevOptions => [...prevOptions, option]) }}
        >
            {option.title}
        </li>
     );
}
 
export default MultiOption;