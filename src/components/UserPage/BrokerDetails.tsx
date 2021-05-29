import React, { useState, useEffect } from 'react';
// @ts-ignore
import BrokerCard from './BrokerCard.tsx';
// @ts-ignore
import LeadMetrics from './LeadMetrics.tsx';
// @ts-ignore
import MessageMetrics from './MessageMetrics.tsx';
// @ts-ignore
import ProducerMetrics from './producerMetrics.tsx';
// @ts-ignore
import ConsumerMetrics from './consumerMetrics.tsx';

//topicData.topicData.quantityOfDataInEachPartition

const BrokerDetails = () => {
  const [leadMet, setLeadMet] = useState(false);
  const [messageMet, setMessageMet] = useState(false);
  const [producerMet, setProducerMet] = useState(false);
  const [consumerMet, setConsumerMet] = useState(false);

  //function
  //condiitonal if param === leadMet
    //
  function handleClick(buttonId) {
    setLeadMet(false);
    setMessageMet(false);
    setProducerMet(false);
    setConsumerMet(false);

    switch(buttonId) {
      case 'lead':
        setLeadMet(true);
        break;
      case 'message':
        setMessageMet(true);
        break;
      case 'producer':
        setProducerMet(true);
        break;
      case 'consumer':
        setConsumerMet(true);
        break;
      default:
        break;
    }
  };

  let displayMetric = null;
  if (leadMet) displayMetric = <LeadMetrics />;
  if (messageMet) displayMetric = <MessageMetrics />;
  if (producerMet) displayMetric = <ProducerMetrics />;
  if (consumerMet) displayMetric = <ConsumerMetrics />;

  return (
    <div id='broker-wrapper'>
      <h2 className='gallery-header' id='details-header'>Broker: MyKafkaApp</h2>
      <div className='tab-container'>
        <button id='lead-button' onClick={() => {handleClick('lead')}}>Topic</button>
        <button id='message-button' onClick={() => {handleClick('message')}}>Message</button>
        <button id='producer-button' onClick={() => {handleClick('producer')}}>Producer</button>
        <button id='consumer-button' onClick={() => {handleClick('consumer')}}>Consumer</button>
      </div>
      <div id='metric-container'>{displayMetric}</div>
      {/* <LeadMetrics />

      <MessageMetrics />

      <ProducerMetrics />

      <ConsumerMetrics /> */}
    </div>
  )
};


export default BrokerDetails;