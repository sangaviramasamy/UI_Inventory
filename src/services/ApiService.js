const url = 'http://127.0.0.1:8086/httpmethod/getAllProduct';
const url2 = 'http://127.0.0.1:8086/httpmethod/addProduct';

const getAllProduct = () =>{
    return fetch(url)
}

const getProductId = (prodId) =>{
    console.log("proid in api services " + prodId)
    return fetch("http://localhost:8086/httpmethod/getProduct/" + prodId)
}

const createOrder = (orderDetails) => {
   return fetch("http://127.0.0.1:8082/httpmethod/placeOrder",{
        method:"POST",
        body:JSON.stringify(orderDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
 
    })
}

const addProduct = (productDetails) => {
    return fetch("http://127.0.0.1:8086/httpmethod/addProduct",{
        method:"POST",
        body:JSON.stringify(productDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
 
    })
}
const updateProduct = (productDetails) => {
    return fetch("http://localhost:8086/httpmethod/updateProduct",{
        method:"PUT",
        body:JSON.stringify(productDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'
 
    })
}

export default { 
    getAllProduct,
    createOrder,
    addProduct,
    updateProduct,
    getProductId
}