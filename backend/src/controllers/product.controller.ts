// backend/src/controllers/product.controller.ts
import { Request, Response } from 'express';
import Product from '../models/product.model';

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, countInStock } = req.body;

  if (!name || !description || price === undefined || countInStock === undefined) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const product = new Product({
    name,
    description,
    price,
    countInStock,
  });

  await product.save();

  res.status(201).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, description, price, countInStock } = req.body;

  if (name) product.name = name;
  if (description) product.description = description;
  if (price !== undefined) product.price = price;
  if (countInStock !== undefined) product.countInStock = countInStock;

  await product.save();

  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  await product.remove();

  res.json({ message: 'Product removed' });
};
