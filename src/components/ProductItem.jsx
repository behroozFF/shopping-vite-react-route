// یک کمپوننت برای محصول میسازم  
//بتونیم هر محصول اضافه کنیم به سبد خرید
// و در صفحه فراخوانی میکنم pages/Shop.jsx
import { useContext } from 'react'
//import { useContext }  تا بتونیم از کانتکسی که ساختیم استفاده کنیم
import { Card, Button } from 'react-bootstrap'
/* import profilePic from '../../public/images/speaker.jpg' */

import { CartContext } from '../context/CartContext'

                    //prop
function ProductItem({ product }){

             // وقتی برای ما فراخوانی میشه مقدار بازگشتی خواهد داشت اسمش میزارم کارت 
    const cart = useContext(CartContext)

  return(
    <Card className='mt-5 card-bg'> 
        <Card.Body>             
          <Card.Img
          variant='top' 
          src={product.image} 
          height='200px'
          style={{ objectFit: 'cover' }}
          />
          <Card.Title align='right' className='text-light pt-4'>
            {product.title}
          </Card.Title>
          <Card.Text align='right' className='text-light'>{product.price}</Card.Text>
                   {/*  anonymous function  () => */} 
                   {/* که مقدار بازگشتیش براساس کانتکس ما باشه */}
                   {/* آیدی همون محصولی که از طریق کارت کانتکس می خوام به سبد خرید اضافه بشه */}
          <Button onClick={() => cart.addItemToCard(product.id) } variant='btn btn-outline-secondary' className='text-white'>
          افزودن به سبد خرید
            </Button>
        </Card.Body>
    </Card>
  )
}

export default ProductItem