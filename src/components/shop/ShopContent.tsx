"use client"
import { prodcutData } from "@/data/product-data";
import { ProductType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
const ShopContent = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
    console.log(product)
  };
  const handleAddToWishlist = (product: ProductType) => {
    dispatch(wishlist_product(product));
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                {prodcutData.map((item) => (
                  <div key={item._id} className="col-lg-4 col-md-6">
                    <div className="product mb-40">
                      <div className="product__img">
                        <Link href="">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={item.img}
                            alt="item-img"
                          />
                        </Link>
                        <div className="product-action text-center">
                          <Link onClick={() => handleAddToCart(item)} href="#">
                            <i className="fas fa-shopping-cart"> </i>
                          </Link>
                          <Link onClick={() => handleAddToWishlist(item)}  href="">
                            <i className="far fa-heart"> </i>
                          </Link>
                          <Link href="">
                            <i className="fas fa-expand"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product__content text-center pt-35">
                        <span className="pro-cat">
                          <Link href="">{item.categoryName}</Link>
                        </span>
                        <h4 className="pro-title">
                          <Link href=""> {item.productName} </Link>
                        </h4>
                        <div className="price">
                          <span>${item.price}.00 </span>
                          <span className="old-price">${item.oldPrice}.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContent;
