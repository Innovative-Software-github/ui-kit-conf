import * as React from 'react';

import cls from './variables.module.css';
import { colorVariables, copyToClipboard } from './utils';

import '../../../theme/variables.css';

export const Variables = () => (
    <div className={cls.variables}>
      <strong>Нажми на блок чтобы скопировать css переменную</strong> 
      {Object.entries(colorVariables).map(([groupName, colors]) => (
        <div key={groupName} className={cls.colorGroup}>
          <h2>{groupName}</h2>
          <div className={cls.colorGroupContent}>
            {colors.map((color) => (
              <div key={color} className={cls.colorItem}>
                <button
                  type="button"
                  className={cls.colorBlock}
                  style={{
                    background: `var(${color})`,
                  }}
                  onClick={() => copyToClipboard(color)}
                />
                <span className={cls.colorName}>{color}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
);