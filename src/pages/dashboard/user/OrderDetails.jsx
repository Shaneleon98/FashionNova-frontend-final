import React from 'react'
// import { useSelector } from 'react-redux'
import { useGetOrderByIdQuery } from '../../../redux/features/orders/orderApi';
import { useParams } from 'react-router-dom';
import TimelineStep from '../../../components/TimelineStep';

const OrderDetails = () => {
    // const {user} = useSelector((state) => state.auth);
    const {orderId} = useParams()
   
    
    const {data: order, error, isLoading} = useGetOrderByIdQuery(orderId);
    // console.log(order);
    
    if(isLoading) return <div>loading...</div>
    if(error) return <div> No Orders!</div>
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
  
   
    

  return (
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
  )
}

export default OrderDetails