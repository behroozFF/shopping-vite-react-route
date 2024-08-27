// لیست آرایه محصولات 

const productList = [
    {
        id: '1',
        title: 'Product',
        price: 99,
        image: '/images/airpods.jpg'
    },
    {
        id: '2',
        title: 'Product',
        price: 99,
        image: '/images/ipad.jpg'
    },
    {
        id: '3',
        title: 'Product',
        price: 99,
        image: '/images/macbook.jpg'
    },
    {
        id: '4',
        title: 'Product',
        price: 99,
        image: '/images/phone.jpg'
    },
    {
        id: '5',
        title: 'Product',
        price: 99,
        image: '/images/headphone.jpg'
    },
    {
        id: '6',
        title: 'Product',
        price: 99,
        image: '/images/mouse.jpg'
    },
    {
        id: '7',
        title: 'Product',
        price: 99,
        image: '/images/watch.jpg'
    },
    {
        id: '8',
        title: 'Product',
        price: 99,
        image: '/images/mic.jpg'
    }
]

function GetProductData(id) {

    let productData = productList.find((item) => item.id === id)

    return GetProductData 
}

export { productList, GetProductData }