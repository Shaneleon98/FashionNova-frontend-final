import React, { useState } from 'react'
import { useEffect } from 'react';
import { getBaseUrl } from '../utils/baseUrl';
import TimelineStep from './TimelineStep';


const PaymentSuccess = () => {
    const[order, setOrder] = useState(null)
    useEffect(()=> {
       const query = new URLSearchParams(window.location.search);
       const sessionId = query.get('session_id');
       console.log(sessionId);
       if(sessionId){
        fetch(`${getBaseUrl()}/api/orders/confirm-payment`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({session_id:sessionId})
        })
        .then((res)=> res.json()) 
        .then((data) => setOrder(data.order))
        .catch((err) => console.error("Error Confirming Payment",err))
       }
    }, [])

    console.log(order);
    

    if(!order){return <div>Loading...</div>}

    const isCompleted = (status) => {
      const status_01 = ["pending", "processing", "shipped", "completed"];
      return status_01.indexOf(status) < status_01.indexOf(order.status)
    }

    const isCurrent = (status) => order.status === status;
    const steps = [
      {
        status: 'pending',
        label: 'pending',
        description: 'Congragulations your order has been created and is waiting to process further.',
        icon: {iconName: 'time-line', bgColor: 'red-500', textColor: 'gray-800'},
      },
      {
        status: 'processing',
        label: 'processing',
        description: 'Your order is currently being processed.',
        icon: {iconName: 'time-line', bgColor: 'yellow-800', textColor: 'yellow-800'},
      },
      {
        status: 'shipped',
        label: 'shipped',
        description: 'Your order has been shipped',
        icon: {iconName: 'time-line', bgColor: 'blue-800', textColor: 'blue-800'},
      },
      {
        status: 'completed',
        label: 'completed',
        description: 'Congrats your order has been successfully completed',
        icon: {iconName: 'time-line', bgColor: 'green-900', textColor: 'green-900'},
      },
    ];

    return(
      <section className='section__container rounded p-4'> 
           <h2 className='text-2xl font-semibold mb-4'>Payment {order?.status}</h2>
           <p className='mb-4'>Order Id: {order?.orderId}</p>
           <p className='mb-8'>Status: {order?.status}</p>
    
      <ol className='sm:flex items-center relative'>
          {
            steps.map((step, index) => (
              <TimelineStep
               key={index}
               step={step}
               order= {order}
               isCompleted = {isCompleted(step.status)}
               isCurrent = {isCurrent(step.status)}
               isLastStep = {index === steps.length - 1}
               icon = {step.icon}
               description = {step.description}
              />
            ))
          }
      </ol>
    
      </section>
      // <h1>SUCCESS</h1>
    )
   
  
}

export default PaymentSuccess