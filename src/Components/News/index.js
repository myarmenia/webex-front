import React from 'react';
import Search from './Search';
import Tags from './Tags';
import Popular from './Popular';
import Main from './main';
import SocialMedia from './socialMedia';
import SinglePost from './singlePost/index';

function Index() {
    return (
        // <section class="ls s-pt-60 s-pb-45 s-py-lg-100">
        //     <div class="container">
        //         <div class="row c-gutter-50">

        //             <Main />

        //             <aside class="col-lg-5 col-xl-4 order-lg-1">

        //                 <div class="widget widget_search ds p-30 rounded">
        //                     <h3 class="widget-title">Search</h3>
        //                     <Search />
        //                 </div>

        //                 <div class="widget widget_tag_cloud">
        //                     <h3 class="widget-title">Tags</h3>
        //                     <Tags />
        //                 </div>

        //                 <div class="widget widget_popular_entries">
        //                     <h3 class="widget-title">Popular Posts</h3>
        //                     <Popular />
        //                 </div>

        //                 <SocialMedia />
        //             </aside>
        //         </div>
        //     </div>
        // </section>
        <>
            <SinglePost />
        </>
    )
}

export default Index;