import { Button } from '@mui/material'
import React from 'react'
import { buttonProps } from './buttonProps'

export function FormButton(props:buttonProps) {
 const {title} = {...props};
  return (
    <Button {...props} >{title}</Button>
  )
}
