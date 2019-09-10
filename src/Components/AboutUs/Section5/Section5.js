import React from 'react';
import Text from './Text';

function Section5 () {
    return (
        <section className="ls s-pt-60 s-pb-50 s-py-lg-100 partners-section">
            <div className="container">
                <div className="row">
                    
                    {
                        Text.map((item, index) => {
                            return (
                                <div className="col-4 col-md-2" key={index}>
                                    <a href={item.href}>
                                        <img src={require(`../../../img/about_us/partners/${item.img}`)} alt="" />
                                    </a>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Section5;