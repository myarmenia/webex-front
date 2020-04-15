import React from 'react';
import Search from './Search';
import Tags from './Tags';
import Popular from './Popular';
import Main from './main';
import SocialMedia from './socialMedia';
import SinglePost from './singlePost/index';

function Index() {
    return (
        <section className="ls s-pt-60 s-pb-45 s-py-lg-100">
            <div className="container">
                <div className="row c-gutter-50">

                    <Main />

                    <aside className="col-lg-5 col-xl-4 order-lg-1">

                        <div className="widget widget_search ds p-30 rounded">
                            <h3 className="widget-title">Search</h3>
                            <Search />
                        </div>

                        <div className="widget widget_tag_cloud">
                            <h3 className="widget-title">Tags</h3>
                            <Tags />
                        </div>

                        <div className="widget widget_popular_entries">
                            <h3 className="widget-title">Popular Posts</h3>
                            <Popular />
                        </div>

                        <SocialMedia />
                    </aside>
                </div>
            </div>
        </section>
        // <>
        //     <SinglePost />
        // </>
    )
}

export default Index;