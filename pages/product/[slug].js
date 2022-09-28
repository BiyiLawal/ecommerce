import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, price, details } = product;
  const [index, setIndex] = useState(0);
  const {addQty, remQty, qty, onAdd} = useStateContext();

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <picture>
            <img src={urlFor(image && image[index])} className="product-detail-image" key={product._id} alt=''/>
            </picture>
          </div>
          <div className="small-images-container">
            {image?.map(function (item, i) {
                return (
                    <picture>
                    <img key={i} src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)} alt='' />
                    </picture>
                );
            })}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">₦{price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={remQty}><AiOutlineMinus/></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={addQty}><AiOutlinePlus/></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="buy-now" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            {/* <button type="button" className="buy-now" onClick="">Buy Now</button> */}
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>E fit enter ur eye too</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
