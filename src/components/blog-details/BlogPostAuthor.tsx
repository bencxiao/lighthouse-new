import Link from "next/link";
import React from "react";
import authorImg from "../../../public/assets/img/blog/details/author.png"
import Image from "next/image";
const BlogPostAuthor = () => {
  return (
    <>
      <div className="author mt-80 mb-40">
        <div className="author-img text-center">
          <Image src={authorImg} alt="author-img" />
        </div>
        <div className="author-text text-center">
          <h3>MD. Salim Rana</h3>
          <div className="author-icon">
            <Link href="">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa aute irure dolor.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostAuthor;
