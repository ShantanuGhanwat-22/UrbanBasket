import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import { Link } from 'react-router-dom'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <Link to={`/product/undefined}`}>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
        
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      </Link>
      <Link to={`/product}`}>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      </Link>
      <Link to={`/product}`}>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      </Link>
      <Link to={`/product}`}>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default HomeCategories

// const HomeCategories = () => {
//   return (
//     <div className='homecategories'>
//       <div className='container'>
//         <a href="/vegetables">
//           <div>
//             <img src={img1} alt='img1' />
//             <div className='content'>
//               <h1 style={{ margin: 0, padding: 0 }}>
//                 1 Vegetables at your doorstep</h1>
//               <p>Shop vegetables now</p>
//             </div>
//           </div>
//         </a>
//       </div>
//       <div className='container'>
//         <a href="/fruits">
//           <div>
//             <img src={img2} alt='img2' />
//             <div className='content'>
//               <h1 style={{ margin: 0, padding: 0 }}>Fresh Fruits at your doorstep</h1>
//               <p>Shop fruits now</p>
//             </div>
//           </div>
//         </a>
//       </div>
//       <div className='container'>
//         <a href="/dairy">
//           <div>
//             <img src={img3} alt='img3' />
//             <div className='content'>
//               <h1 style={{ margin: 0, padding: 0 }}>Dairy products at your doorstep</h1>
//               <p>Shop dairy now</p>
//             </div>
//           </div>
//         </a>
//       </div>
//       <div className='container'>
//         <a href="/meat">
//           <div>
//             <img src={img4} alt='img4' />
//             <div className='content'>
//               <h1 style={{ margin: 0, padding: 0 }}>Fresh Meat at your doorstep</h1>
//               <p>Shop meat now</p>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HomeCategories;