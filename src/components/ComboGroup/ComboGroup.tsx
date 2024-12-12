import React from 'react';
import clsx from 'clsx';

import { ComboCheckbox } from './ComboCheckbox/ComboCheckbox';

import cls from './ComboGroup.module.css';

const DISPLAY_NAME = 'ComboGroup';

export interface IComboGroupProps extends React.PropsWithChildren {
  defaultIds?: string[];
  className?: string;
  isSorted?: boolean;
  onChange?: (selectedIds: string[]) => void;
}

export interface IComboCheckboxComposition {
  Checkbox: typeof ComboCheckbox;
}

export interface IComboGroupContext {
  selectedIds: string[];
  onChange: (id: string) => void;
}

export const ComboGroupContext = React.createContext<IComboGroupContext | undefined>(undefined);

export const ComboGroup: React.FC<IComboGroupProps> & IComboCheckboxComposition = ({
  defaultIds = [],
  children,
  className,
  isSorted = false,
  onChange,
  ...props
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(defaultIds || []);

  const handleChange = (id: string) => {
    setSelectedIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(id);
      let newSelectedIds: string[];

      if (isSelected) {
        newSelectedIds = prevSelectedIds.filter((itemId) => itemId !== id);
      } else {
        newSelectedIds = [...prevSelectedIds, id];
      }

      if (onChange) {
        onChange(newSelectedIds);
      }

      return newSelectedIds;
    });
  };

  const contextValue = React.useMemo(
    () => ({
      selectedIds,
      onChange: handleChange,
    }),
    [selectedIds, onChange],
  );

  const orderedChildren = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);

    const validChildren = childrenArray.filter(
      (child): child is React.ReactElement => React
        .isValidElement(child) && child.type === ComboCheckbox,
    );

    if (isSorted) {
      return validChildren.sort((a, b) => {
        const aSelected = selectedIds.includes(a.props.id);
        const bSelected = selectedIds.includes(b.props.id);

        if (aSelected === bSelected) {
          return 0;
        }

        return aSelected ? -1 : 1;
      });
    }

    return validChildren;
  }, [children, selectedIds, isSorted]);

  return (
    <ComboGroupContext.Provider value={contextValue}>
      <div className={clsx(cls.comboGroup, className)} {...props}>
        {orderedChildren}
      </div>
    </ComboGroupContext.Provider>
  );
};

ComboGroup.Checkbox = ComboCheckbox;
ComboGroup.displayName = DISPLAY_NAME;
