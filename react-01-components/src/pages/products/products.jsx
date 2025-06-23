import { ProductCard } from "../../components/productCard/productCard";
// Esto puede ser un json o nuestra base de datos 
const products = [
    {
        id: 100,
        title: "Jabón Zote",
        price: 25
    },
    {
        id: 101,
        title: "Suavitel",
        price: 55
    },
    {
        id: 102,
        title: "Jabón Roma",
        price: 35
    },
    {
        id: 103,
        title: "Jabón Foca",
        price: 38
    },
]

const Products = () => {
    return (
        <>
            <h2>Productos</h2>
            {/* map me trae cada elemento del arreglo de acuerdo a cada interacción */}
            { products.map( ({id, title, price})=> <ProductCard key={id} title={title} price={price} />)} 
        </>
    );
}

export {Products};