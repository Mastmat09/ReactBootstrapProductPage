
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/Header";
import { Product } from "./components/main/ProductSection";
import { RelatedProducts } from "./components/main/RelatedProducts";
import { ResponsiveGrid } from "./components/main/ResponsiveGrid";
import { Footer } from "./components/footer/Footer";

function Container() {
  return (
    <>
      <Header />
      <Product />
      <RelatedProducts />
      <ResponsiveGrid />    
      <Footer />
    </>
  );
}

export default Container;
