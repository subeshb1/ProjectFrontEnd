import React from 'react';
import { Card, CardContent } from '@material-ui/core';

export default function Result({ marks }) {
    return (
        <>
        <Card style={{width:'80vw',minWidth:300}}>
            <CardContent>
                Marks: {marks}
            </CardContent>
        </Card>
        </>
    )
}