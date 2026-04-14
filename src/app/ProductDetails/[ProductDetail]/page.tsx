import { getSpecificProduct } from "@/app/home.services";
import ProductDetailsClient from "@/components/ProductDetailsClient/ProductDetailsClient";

interface PageProps {
  params: Promise<{ ProductDetail: string }>;
}

export default async function Page({ params }: PageProps) {
  const { ProductDetail } = await params;
  
  const productDetails = await getSpecificProduct(ProductDetail);

  return <ProductDetailsClient productDetails={productDetails} />;
}
