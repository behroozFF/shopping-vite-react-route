// می خواهم لیست محصولات به ما نشون بده
import { Row, Col } from 'react-bootstrap'

import ProductItem from '../components/ProductItem.jsx'
import {productList} from '../data/items.jsx'

function Shop() {
    return (
        <Row xs={1} md={4} className='g-4'>
           {productList.map((item) => (
            <Col align='center' key={item.id}>
                <ProductItem product={item} />
            </Col>
           ))}
        </Row>
    )
}

export default Shop


{/* <Col align='center'>
<h3>محصول</h3>
</Col>

<Col align='center'>
<h3>محصول</h3>
</Col>

<Col align='center'>
<h3>محصول</h3>
</Col>

<Col align='center'>
<h3>محصول</h3>
</Col> */}