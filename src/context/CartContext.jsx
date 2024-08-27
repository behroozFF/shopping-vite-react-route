import {createContext, useState} from 'react'
// add  new something
// می خواهیم لیست محصولاتم به شکل آرایه که توی سبد خرید قرار می گیر جزو کانتکس ما باشند

// export const CardContext  تابتونیم در فایل های دیگه هم از شون استفاده کنیم
export const CartContext = createContext({
    // مقدار اولیه رو خالی نگه میدارم [] 
    items: [],
    // از طریق این تابع می خواهیم بفهمیم تعداد محصول چند تا هست
    getProductQuantity: () => {},

    // این تابع محصول به سبد خرید اضافه میکنه
    addItemToCard: () => {},
    // این تابع میاد یک مقدار حذف میکنه
    removeItemFromCard: () => {},
    
    // این تابع حذف داشته باشم اما به شکل دیگه ای
    deleteFromCard: () => {},

    // تابعی که کل مبلغ توی سبد خرید داریم بتونم محاسبه کنم
    getTotalAmount: () => {}
})

// مرحله بعد باید تعریف کنیم کانتکس مون بتون برای یک سری کامپوننت  اعمال بشه 
// به کمک تابع کارت پرووایدر
// می تونیم تعیین کنیم کانتکسی که داریم ازش استفاده میکنیم شامل کدوم کمپوننت ها میتون باشه
// پس آرگومانش مقدار چیلدرن باشه
// بخاطر اینکه ما می خواهیم جلوتر بگیم که هر چیزی که نستت این بود بتونه از کانتکس ما استفاده نه
// با استفاده از مقدار ولیو
// children کانپوننت زیر مجموعه هست
 export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    ///_____________________________________________________
    //تابع محاسبه تعداد محصول 
    //quantity کوانتیتی استفاده می کنیم چون تعداد می خواهیم محاسبه کنیم
    // ? علامت سوال و نقطه خیلی شبیه به دات هست 
    // با این تفاوت که اگر نتونه این مقدار خاص را برای ما پیدا کنه ارور بر نمی گردونه
    //  بجاش مقدار اندیفاین بر می گردونه  undefined
    // در نتیجه مدیریت فرایند برای ما ساده تر می شود
   function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id )?.quantity
    
    if (quantity === undefined){
        return 0  // یعنی از این تعداد محصول صفر هستش
    }
     return quantity  // در غیر این صورت تعداد محصول را برای ما برگردان 
   }

   //___________________________________________
    //فانکشن اضافه کردن سبد خرید
   // ما برای اضافه کردن به سبد خرید ما  دو مقدار اصلی باید بهش توجه کنیم
   //  یکی کانسپت محصول  و یکی هم تعداد محصول
   function addItemToCart(id){
     const quantity = getProductQuantity(id)
     if(quantity === 0){
        //... spread operator
        //این به این معنی که استیت قبلی که دارم هموم مقدار بمون و تغییری نکنه
        // چون تغییر استیت توی ریکت میتونه تاثیر بزار توی رندر شد برنامه مون و این برای پرفرمنس خوب نیست
        // پس من با این دستور دارم میگم هر مقداری که از قبل داریم رو بزار سرجاش بمونه
        // ولی بهش یک آبجکت جدید بهش اضافه کن
        // ,{id: id}
        // آبجکت جدید همین محصولی  که می خوام اضافه بشه قطعا یک آیدی دار برابر ایدی
        setCartProducts([...cartProducts, {id: id, quantity: 1}])
                    //State cartProducts

        }else{
            setCartProducts(
                // ?  علامت سوال  یعنی اینکه اگر وجود داشت یکی اضافه کن به محصول
                // : یعنی در غیر اینصورت
            cartProducts.map((item) => item.id === id ? {...item,
                quantity: item.quantity + 1} : item)
            )
        }                  
   }

   //_______________________________________________________
   // فانکشن پاک کردن محصول
   // پاک کردن یک محصول خاص از سبد خرید
   // میاد اون محصول به شکل کامل از سبد خرید پاک میکنه
   function deleteFromCart(id) {
    setCartProducts((cartProducts) => 
        cartProducts.filter((item) => {
            return item.id != id
        }))
   }


   //________________________________________________
   //
   // میاد یک واحد از اون محصول خاص رو کم میکنه
   function removeItemFromCart(id) {
    const quantity = getProductQuantity(id)

    if(quantity === 1){
        deleteFromCart
    }
   }

    const ContextValue = {
        
         /* اینجا همون جای که بالا در کارت کانتکس به عنوان مقدار اولیه گفتیم */
         // [] مقدار اولیه آرایه خالی
         items: cartProducts,
         getProductQuantity,
         addItemToCart,
         removeItemFromCart,
         deleteFromCart,
         getTotalAmount,
    }
    return (
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>

    )
}