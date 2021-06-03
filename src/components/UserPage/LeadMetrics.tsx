import React, { useState, useEffect } from 'react';
// @ts-ignore
import BrokerCard from './BrokerCard.tsx';
// @ts-ignore
import Vis from '../Vis.tsx';
// @ts-ignore
import Vis2 from '../Vis2.tsx';
// @ts-ignore
import Testing from '../Testing.tsx'

const LeadMetrics = (props) => {
    console.log('props.data:')
    console.log(props.data)
    if (!props.data) {
        return (
            <div className='metrics-overview-box'>
                <h3>Key metrics at a glance</h3>
                <div>Loading Topics...</div>
            </div>
        )
    } else {
        
        const topicsArray = [];
        for (let index in props.data.partitionQuantity) {
            console.log(index)
            console.log(props.data.partitionQuantity)
            topicsArray.push(
                <div className='single-topic'>
                    <p><strong>Topic:</strong> {props.data.partitionQuantity[index].name}</p>
                    <p><strong>Partitions:</strong> {props.data.partitionQuantity[index].partitionQuantity}</p>
                </div>
            );
        }
        return (
            <div id='lead-metrics-container'>
                <div className='metrics-overview-box'>
                    <h3>Topics and partitions</h3>
                    <hr />
                    <div>{topicsArray}</div>
                </div>

                <div className='metric-panel'>
                    <h3>Quantity of messages per partition</h3>
                    <div className='visualization-panel'>
                        <Vis dataa={props.data.quantityOfDataInEachPartition} /></div>
                </div>
            </div>
        )
    }
}

export default LeadMetrics;