const express = require("express")
const router = express.Router()
const {getAllProduct, getSingleProduct, createProduct, updateProduct, deleteProduct} = require(".././controllers/productController")


// get all products
// router.get(`/products`, getAllProduct)

// get a single products
// router.get(`/products/:id`, getSingleProduct)

// create a product
// router.post(`/products`, createProduct)

// update a product
// router.put(`/products/:id`, updateProduct)

// delete a product
// router.delete(`/products/:id`, deleteProduct)



router.route(`/products`)
.get(getAllProduct)
.post(createProduct)

router.route(`/products/:id`)
.get(getSingleProduct)
.put(updateProduct)
.delete(deleteProduct)


// Export the router object
module.exports = router;