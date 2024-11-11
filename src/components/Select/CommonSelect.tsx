import React, { ReactElement, ReactNode } from "react";
import { FC } from "react";
import * as Ariakit from "@ariakit/react";
import cls from './Select.module.css';
import { Input } from "../Input/Input";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconsMapping";

interface CommonSelectProps {
    options: string[];
    optionIcon?: ReactElement;
}
 
export const CommonSelect: FC<CommonSelectProps> = ({
    options,
    optionIcon
}: CommonSelectProps) => {
    return ( 
        <>
            <Ariakit.ComboboxLabel>
            Your favorite food
            </Ariakit.ComboboxLabel>
            <div className={cls.comboboxWrapper}>
            <Ariakit.Combobox placeholder="e.g., Pizza" 
            render={<Input
                className={cls.comboboxInput}
                />} />
            <Ariakit.ComboboxDisclosure className={cls.comboboxDisclosure}
            render={<Icon type={IconType.ArrowDown_20} width={20} height={20}/>} />
            </div>
            <Ariakit.ComboboxPopover className={cls.comboboxPopover} gutter={4} sameWidth>
            {options.length ? (
                options.map((value) => (
                    <Ariakit.ComboboxItem
                        className={cls.comboboxOption}
                        key={value}
                        value={value}
                        data-hoverable={true}
                    >
                        {value}
                        {optionIcon}
                    </Ariakit.ComboboxItem>
                ))
            ) : (
                <div className={cls.comboboxOption}>Не найдено</div>
            )}
            </Ariakit.ComboboxPopover>
        </>
     );
}