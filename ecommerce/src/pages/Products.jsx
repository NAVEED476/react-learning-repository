import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { fetchdata } from '../redux/products/action'
import Filtercomponents from './Filtercomponents'

const Products = () => {

  const products = useSelector((store)=>store.ecommercedata.products)
  console.log(products)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(products?.length===0){
      dispatch(fetchdata());
    }
  })

  return (
    <>
    <Box>
        <Box>
            <Filtercomponents/>
        </Box>
        <Box>
          
        </Box>
        
    </Box>
    </>
  )
}

export default Products