// یک کمپوننت برای محصول میسازم  
//بتونیم هر محصول اضافه کنیم به سبد خرید
// و در صفحه فراخوانی میکنم pages/Shop.jsx

//import { useContext }  تا بتونیم از کانتکسی که ساختیم استفاده کنیم
import { Card, Button } from 'react-bootstrap'
/* import profilePic from '../../public/images/speaker.jpg' */


                    //prop
function ProductItem({ product }){

  // وقتی برای ما فراخوانی میشه مقدار بازگشتی خواهد داشت اسمش میزارم کارت 
   

    // این تابع بازگشتی زمانی که کلیک روی دکمه سبد خرید می کنیم استفاده می کنیم
    

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
          <Card.Text align='right' className='text-light' dir='rtl'>
            {product.price} تومان
          </Card.Text>
      
    
              <Button  variant='btn btn-outline-secondary' className='text-white'>
              افزودن به سبد خرید
                </Button>
        

        </Card.Body>
    </Card>
  )
}

export default ProductItem