import { useState } from 'react'
// از یوز ستیت استفاده کردم برای کنترل مودال

import { Navbar as NavbarBS, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'


function Navbar(){
     // false مقدار پیش فرض مودال من بسته باشه
     // ما می خواهیم وقتی مودال کلیک میشه تبدیل به ترو
     const [showModal, setShowModel] = useState(false)

     const handleShow = () => {setShowModel(true)}
     const handleClose = () => {setShowModel(false)}
     
    return(
        <>
        <NavbarBS className='border-bottom border-secondary'>
            <NavbarBS.Collapse className='justify-content-end'>
                  {/* آنکلیک ام پوینت کردم فراخوانی نکردم */}
                 <button onClick={handleShow} className='btn btn-outline-secondary text-white'>
                 <BsCart className='mx-5'></BsCart> سبد خرید
                 </button>

            </NavbarBS.Collapse>
        </NavbarBS>

        <Modal show={showModal} onHide={handleClose} 
         backdrop="static" 
         keyboard={false}
         contentClassName='card-bg' dir='rtl'>
           
        <Modal.Header closeButton closeVariant='white'>
        <Modal.Title>سبد خرید</Modal.Title>
        <Modal.Body>محصول</Modal.Body>
        </Modal.Header>
        
        </Modal>
        </>
    )
}

export default Navbar