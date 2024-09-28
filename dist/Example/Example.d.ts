import * as React from 'react';
export interface IExample extends React.PropsWithChildren {
    color?: React.CSSProperties['color'];
}
export declare const Example: React.FC<IExample>;
