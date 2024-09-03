import React from 'react'

function Cards({item}) {
  return (
     <>
     <div className="flex space-x-14 mt-4 my-3">
     <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-300  ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  badge badge-outline hover:bg-pink-500  ">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500  ">Buy Now</div>
    </div>
  </div>
</div>
     </div>
     </>
  )
}

export default Cards
