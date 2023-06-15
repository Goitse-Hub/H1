const Product = require('../models/products');
const User = require('../models/User');
const Purchase = require('../models/purchase');

async function purchaseProduct(req, res) {
  try {
    const { productId } = req.body;
    const { userId } = req.body;

    console.log('Product ID:', productId);
    console.log('User ID:', userId);

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    const purchase = await Purchase.create({
      userId,
      productId,
    });

    console.log('Purchase:', purchase);

    return res.status(201).json(purchase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = {
  purchaseProduct,
};
