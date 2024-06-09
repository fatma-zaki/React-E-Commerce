import './filterBtns.css'
import useFetchAxios from '../../fetchAxios/useFetchAxios';


const FilterBtns = ({filterProducts, state}) => {

  const [categories] = useFetchAxios('https://fakestoreapi.com/products/categories')
  return (
    <div className="filter">
       <button onClick={()=> filterProducts('all')} >all</button>
      {
        categories.map((categ)=>(
          <button key={categ} onClick={()=> filterProducts(categ)}>{categ}</button>
        ))
      }
    </div>
  
  )
}

export default FilterBtns