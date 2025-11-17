import { blog_data } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog/blog-details';
import { PageParamsProps } from '@/types/custom-d-t';
import React from 'react';

// 1️⃣ REQUIRED for static export
export async function generateStaticParams() {
  return blog_data.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// 2️⃣ Metadata (safe for static export)
export async function generateMetadata({ params }: PageParamsProps) {
  const { id } = await params;
  const blog = blog_data.find((item) => item.id == Number(id));

  return {
    title: blog?.title || "Blog Details",
  };
}

// 3️⃣ Page Component
export default async function BlogDetailsPage({ params }: PageParamsProps) {
  const { id } = await params;

  return <BlogDetailsMain id={id} />;
}
