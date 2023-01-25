import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss'

BlogItem.propTypes = {
    item: PropTypes.object,
};

function    BlogItem(props) {
    const {item} = props;

    return (
        <div className="post-item">
            <div className="wrap">
                <Link to="#" className="tag">{item.category}</Link>
                <div className="image">
                    <img src={item.img} alt="Crybox" />
                </div>
                <div className="content-item">
                    <div className="content">
                        <div className="meta-post">
                            <a href="/blog">{item.time}</a>
                        </div>
                        <div className="h7 title"><Link to="/blog">{item.title}</Link></div>
                        <p>{item.text}</p>
                        <p>{item.text1}</p>
                        <p>{item.text2}</p>
                        <p>{item.text3}</p>
                        <p>{item.text4}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;