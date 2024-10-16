// // import React from 'react'
// // import Cards from "./Cards";
// import list from "../../public/list.json";

// function Cards({ item }) {

  

//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//         <figure>
//             <img
//             src={item.image}
//             alt="Shoes" />
//         </figure>
//         <div className="card-body">
//             <h2 className="card-title">
//                 {item.name}
//                 <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  badge badge-outline hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
//             </div>
//         </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cards;

function Cards({ item }) {
  return (
    <div className="mt-4 my-4 p-2">
      <div className="card bg-base-100 mx-4 my-4 w-85 h-[500px] shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        {/* Card Image */}
        <figure className="h-1/2 w-full overflow-hidden">
          <img
            src={item.image || 'https://via.placeholder.com/150'}
            alt={item.name || 'Product Image'}
            className="object-fill w-full h-full"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body h-1/4 p-4 flex flex-col justify-between">
          <h2 className="card-title text-lg font-bold">
            {item.name || 'Product Name'}
            {item.category && <div className="badge badge-secondary ml-2">{item.category}</div>}
          </h2>
          <p className="text-xl">{item.title || 'No description available'}</p>

          {/* Card Actions */}
          <div className="card-actions flex justify-center items-center mt-4">
            <a
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-4 py-2 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
