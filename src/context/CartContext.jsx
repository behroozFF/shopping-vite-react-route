import {createContext} from 'react'
// می خواهیم لیست محصولاتم به شکل آرایه که توی سبد خرید قرار می گیر جزو کانتکس ما باشند

// export const CardContext  تابتونیم در فایل های دیگه هم از شون استفاده کنیم
export const CartContext =  ({  
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
    const ContextValue = {
        
         /* اینجا همون جای که بالا در کارت کانتکس به عنوان مقدار اولیه گفتیم */
         // [] مقدار اولیه آرایه خالی
         items: [],
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