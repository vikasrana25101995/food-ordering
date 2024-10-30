import React, { ReactNode } from 'react'
import Card from '@mui/material/Card';

export default function card({cardContent}:{cardContent: ReactNode}) {
  return (
    <Card>{cardContent}</Card>
  )
}
