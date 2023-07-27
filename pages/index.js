import React from 'react'
import { MenuProvider } from '../context/MenuProvider'

const index = ({children}) => {
  return (
    <MenuProvider>
    <div>{children}</div>
    </MenuProvider>
  )
}
export default index
