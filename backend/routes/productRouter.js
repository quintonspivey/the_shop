
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModels.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/name/:name', async (req, res) => {
    const product = await Product.findOne({ name: {$eq: req.params.name} });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

  const pageSize = 3;
  
 

  productRouter.get('/search',expressAsyncHandler(async (req,res)=> {
const {query}= req;
const category = query.category || '';
const searchQuery = query.query || '';
const page = query.page || '1';
const rating = query.rating || ""

const queryFilter =
searchQuery && searchQuery!== 'all'
?{
  name:{
    $regrex:searchQuery,
    $options:"i",

  },
}:
{};

const categoryFilter = category && category != 'all' ? {category}:{};
const priceFilter = price&& price != 'all' ? {
  price:{
    $gte:Number(price.split('-')[0]),
    $lte:Number(price.split('-')[1]),

  

  },

}:{};

const ratingFilter = rating&& rating != 'all' ?{
  rating:{
    $gte:Number(rating),
  },
}: {};

const sortOrder = 
order === 'lowest' ? {price:1}:
order === 'highest' ?{price:-1}:
order ==="toprated" ?{rating:-1}:
order === "newest" ?{createdAt:-1}:
{_id:-1};

const products = Product.find({
  ...queryFilter,
  ...ratingFilter,
  ...priceFilter,
  ...categoryFilter
})
.sort(sortOrder)
.skip(pageSize *(page - 1))
.limit(page);

const countProducts= await Product.countDocuments({
  ...queryFilter,
  ...ratingFilter,
  ...priceFilter,
  ...categoryFilter
});

res.send({
  products,
  countProducts,
  page,
  pages: Math.ceil(countProducts/pageSize)

});

  }))

  export default productRouter;
