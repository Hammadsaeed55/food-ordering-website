import React from 'react'
import FoodCards from './FoodCards'
import FoodData from '../data/FoodData.js'
import { Toaster, toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state)=> state.category.category);
  const search = useSelector((state)=>state.search.search);
  const handleToast=(name)=>{toast.success(`${name} Added`);
  }
  return (
   <>

   <Toaster position='top-center' reverseOrder={false}/>

     <div className='flex flex-wrap gap-10  justify-center lg:justify-between mx-10 my-10'>
     {
      FoodData.filter((food)=>{
        if (category === "All"){
          return food.name.toLowerCase().includes(search.toLowerCase());
        }else{
          return (
            category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food)=>(
      <FoodCards 
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          rating={food.rating}
          img={food.img}
          desc={food.desc.slice(0, 50)}
          handleToast={handleToast}
           />
      ))
     }
      {/* <FoodCards/> */}
    </div>
   </>
  )
}

export default FoodItem
