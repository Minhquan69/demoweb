import { redirect } from "next/navigation";
import { PRODUCTS } from "../data/products";

export default function ProductDetailsIndexPage() {
  redirect(`/product-details/${PRODUCTS[0].slug}`);
}
