import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Sản phẩm</span><span data-lang="en">Products</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Sản phẩm</span><span data-lang="en">Products</span></>}
      />
      <div className="section techwix-blog-grid-section section-padding">
        <div className="container">
          <div className="techwix-blog-grid-wrap">
            <div className="row">
              {PRODUCTS.map((p, i) => (
                <div key={p.slug} className="col-lg-4 col-md-6">
                  <div className="single-blog">
                    <div className="blog-image">
                      <Link href={`/product-details/${p.slug}`}>
                        <img src={`/assets/images/${p.img}`} alt="" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="title">
                        <Link href={`/product-details/${p.slug}`}>
                          <span data-lang="vi">{p.titleVi}</span><span data-lang="en">{p.titleEn}</span>
                        </Link>
                      </h3>
                      <p className="text">
                        <span data-lang="vi">{p.shortVi}</span><span data-lang="en">{p.shortEn}</span>
                      </p>
                      <div className="blog-btn">
                        <Link className="blog-btn-link" href={`/product-details/${p.slug}`}>
                          <span data-lang="vi">Xem chi tiết</span><span data-lang="en">Read Full</span> <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
