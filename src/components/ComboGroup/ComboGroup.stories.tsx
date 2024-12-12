import React from 'react';
import type { Meta } from '@storybook/react';
import { ComboGroup } from './ComboGroup';

const meta: Meta<typeof ComboGroup> = {
  component: ComboGroup,
};

export default meta;

const data = [
  { id: '1', name: 'Tag-text' },
  { id: '2', name: 'Mobile' },
  { id: '3', name: 'DevOps' },
  { id: '4', name: 'Tag-text' },
  { id: '5', name: 'Аналитика' },
  { id: '6', name: 'HR' },
  { id: '7', name: 'Инфраструктура' },
  { id: '8', name: 'QA' },
  { id: '9', name: 'Backend' },
  { id: '10', name: 'UI/UX' },
  { id: '11', name: 'Data Science' },
  { id: '12', name: 'GameDev' },
  { id: '13', name: 'Безопасность' },
  { id: '14', name: 'Менеджмент' },
  { id: '15', name: 'Железо' },
  { id: '16', name: 'ML' },
];

export const StaticComboGroupStory = () => {
  const [options] = React.useState(data);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = (selectedIds: string[]) => {
    setSelected(selectedIds);
  };

  return (
    <ComboGroup isSorted defaultIds={selected} onChange={handleChange}>
      {options.map((option) => (
        <ComboGroup.Checkbox key={option.id} id={option.id}>
          {option.name}
        </ComboGroup.Checkbox>
      ))}
    </ComboGroup>
  );
};
