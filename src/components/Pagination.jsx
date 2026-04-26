import React from 'react'

const Pagination = ({pageNumber, paginate, next, prev, currentPage, filterCategory}) => {
  return (
    <div className='flex justify-center'>
<nav aria-label="Page navigation example" className={`${filterCategory.length > 0 ? "block" : "hidden"}`}>
  <ul className="flex flex-wrap -space-x-px text-sm">
     <li className='my-2' onClick={prev}>
      <button className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</button>
    </li>
    {pageNumber.map((item)=>(
    <li key={item} className='my-2' onClick={()=>paginate(item)}>
      <button className={`${currentPage== item ? "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none" : "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none"}`}>{item}</button>
    </li>
    ))}
    <li className='my-2' onClick={next}>
      <button className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</button>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Pagination
