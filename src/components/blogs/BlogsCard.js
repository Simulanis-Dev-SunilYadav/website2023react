import React from 'react'

function BlogsCard() {
  return (
    <>
        <div class="single-article rounded-custom my-3">
            <a href="/blogs-detail" class="article-img position-relative">
                <img src="assets/img/blog/blog-1.jpg" alt="article" class="img-fluid" />
                <div class="usern">
                    <i class="fa fa-eye"></i>
                    <span>20</span>
                </div>
                <div class="article-category d-block">
                    <span class="d-inline-block text-dark badge bg-danger">Pharmaceutical</span>
                </div>
            </a>
            <div class="article-content p-4 position-relative">
                <div class="userflation">
                    <p>5min read</p>
                </div>
                <a href="/blogs-detail">
                    <h2 class="h5 article-title limit-2-line-text">Do you really understand the concept of product value?</h2>
                    <p class="limit-2-line-text">Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.</p>
                </a>
                <div class="d-flex justify-content-between position-relative">
                    <a href="javascript:;">
                        <div class=" d-flex align-items-center">
                            <div class="avatar">
                                <img src="assets/img/testimonial/6.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3" />
                            </div>
                            <div class="avatar-info">
                                <h6 class="mb-0 avatar-name">Jane Martin</h6>
                                <span class="small fw-medium text-muted">April 24, 2021</span>
                            </div>
                        </div>
                    </a>
                    
                    <div class="socialshare d-flex align-items-center">
                        <a href="#"><i class="fa fa-heart"></i></a>
                        <ul class="menu bottomRight">
                            <li class="share top">
                                <i class="fa fa-share-alt"></i>
                                <ul class="submenu">
                                    <li><a href="#" class="facebook"><i class="fa fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" class="twitter"><i class="fa fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#" class="googlePlus"><i class="fa fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#" class="instagram"><i class="fa fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogsCard