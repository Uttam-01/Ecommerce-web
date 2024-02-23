import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';
const app = express.Router();
// Create New Products - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
// To get all products with filter - /api/v1/product/all
app.get("/all", getAllProducts);
// To Get Last 10 Products - /api/v1/product/latest
app.get("/latest", getLatestProducts);
// To Get All Unique Categories - /api/v1/product/categories
app.get("/categories", getAllCategories);
// To Get All Products - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
// Get, Update, Delete Products
app.route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
