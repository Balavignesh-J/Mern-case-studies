import { Router, Request, Response } from "express";
const router = Router();

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

let products: Product[] = [
  { id: "1", name: "Bananas", price: 1.5, inStock: true },
  { id: "2", name: "Apples", price: 2.0, inStock: false },
];

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(products);
});

router.patch('/:id/instock',(req:Request,res:Response)=>{
    const {inStock} = req.body;
    const id = req.params.id
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    if (typeof inStock !== "boolean") {
        return res.status(400).json({ error: "Missing or invalid inStock status" });
    }

    product.inStock=inStock;
    return res.status(202).json(product)    
})

export default router;