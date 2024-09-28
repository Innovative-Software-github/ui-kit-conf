import * as React from 'react'

export interface IExample extends React.PropsWithChildren { 
  color?: React.CSSProperties['color'];
}

export const Example:React.FC<IExample> = ({
  children,
  color,
}) => {
  return (
    <div style={{color}}>
      {children}
    </div>
  )
}
