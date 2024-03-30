import { memo } from 'react'
import './Divider.css'

const Divider = ({children, variant, fullWidth, height}) => {
  return (
    <div className={"Divider"} style={{backgroundColor: `var(--color-${variant})`, width: fullWidth ? "100%" : "", height: height ? height : "1px" }}>
      {children}
    </div>
  )
}

export default memo(Divider)