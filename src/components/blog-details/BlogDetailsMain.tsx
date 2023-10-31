"use client";
import { blogDataTwo } from "@/data/blog-data-two";
import { blogDataTwoType, idType } from "@/interFace/interFace";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import BlogContent from "./BlogContent";

const BlogDetailsMain = ({ id }: idType) => {
  const fillterData: blogDataTwoType | any = blogDataTwo.find(
    (item) => item.id == id
  );
  return (
    <>
      <Breadcrumb pageTitle={fillterData?.title} />
      <BlogContent singleBlog={fillterData}/>
    </>
  );
};

export default BlogDetailsMain;
