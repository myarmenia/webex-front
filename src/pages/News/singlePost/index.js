import React from 'react';
import Search from '../Search';
import Tags from '../Tags';
import Popular from '../Popular';
import SocialMedia from '../socialMedia';
import LeaveComment from './leaveComment';

function singlePost () {
    return (
        <>
        <section className="ls s-pt-60 s-pb-30 s-pt-lg-100 s-pb-lg-50 c-gutter-0">
            <div className="container">
                <div className="col-12">
                    <div className="item-media rounded post-thumbnail">
                        <img src={require(`../../../img/news/newMain.jpg`)} alt="" />
                    </div>
                </div>
            </div>
		</section>
        
        <section class="ls s-pb-50 s-pb-lg-100 c-gutter-50">
				<div class="container">
					<div class="row">
						<main class="col-lg-7 col-xl-8">
							<article class="vertical-item post type-post status-publish format-standard has-post-thumbnail single-post">

								<div class="item-content">
									<header class="entry-header">
										<h2>Skills for Speaking Effectively</h2>
										<span class="author vcard fs-18">
											<span>By:</span>
											<a class="url fn n" href="blog-right.html">Keith M. Jordan</a>
										</span>
										<div class="entry-meta">
											<span class="byline">
												<span class="posted-on">
													<a class="grey-link" href="#">
														<i class="color-main icon-m-calendar-alt"></i>
														<time class="entry-date published updated" datetime="2018-01-03T10:11:37+00:00">June 11, 2019</time>
													</a>
												</span>
												<span>
													<i class="color-main fa fa-eye"></i>
													500
												</span>
												<span class="comment-count">
													<a class="grey-link" href="#comments">
														<i class="color-main icon-m-comment-alt"></i>
														5
													</a>
												</span>
											</span>
										</div>
										<div class="tagcloud">
											<a href="#" class="tag-cloud-link">
												Technology
											</a>

											<a href="#" class="tag-cloud-link">
												Humanities
											</a>
										</div>
									</header>

									<div class="entry-content">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
										</p>

										<p>
											Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
											</p><p>
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
											</p>
											<p>
												Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
											</p>
									</div>
								</div>
							</article>


							<div id="comments" class="comments-area rounded">
								<h5 id="reply-title" class="comment-reply-title text-center">Leave a comment</h5>

								<LeaveComment />
                                
								{/* <Comments /> */}
							
                            </div>

						</main>

						<aside class="col-lg-5 col-xl-4">

                            {/* <Search /> */}

							<div class="widget widget_tag_cloud">
								<h3 class="widget-title">Tags</h3>
                                <Tags />
							</div>

							<div class="widget widget_popular_entries">
								<h3 class="widget-title">Popular Posts</h3>
                                <Popular />
							</div>

							<SocialMedia />

						</aside>
					</div>
				</div>
			</section>

        </>
    )
}

export default singlePost;