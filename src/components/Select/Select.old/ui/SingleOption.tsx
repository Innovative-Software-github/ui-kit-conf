import React, { useEffect, useState } from "react";
import { FC } from "react";
import { ISelectOption } from "../Select";

// mb extract externally
interface SingleOptionProps {
    option: ISelectOption;
    onOptionChange(chosenOption: ISelectOption): void;
}
 
const SingleOption: FC<SingleOptionProps> = ({
    option,
    onOptionChange
}) => {

    const [selectedOptions, setSelectedOptions] = useState<ISelectOption | undefined>();

    useEffect(() => {
        onOptionChange(selectedOptions);
    }, [selectedOptions])

    return ( 
        <li 
            key={option.value}
            onClick={() => { setSelectedOptions({...option}) }}
        >
            {option.title}
        </li>
     );
}
 
export default SingleOption;