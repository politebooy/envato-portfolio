import { Card } from '@material-ui/core'
import React from 'react'

export default function MyCard({ children }) {
    return (
        <div style={{ padding: '10px', width: '100%' }}>
            <Card style={{ padding: '10px' }} elevation={3}>
                {children}
            </Card>
        </div>
    )
}
