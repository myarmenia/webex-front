import React from 'react';

function Options() {
    return (
        <div className="tagcloud">
            <a href="#" className="tag-cloud-link">
                Science <span className="remove" aria-label="Remove this item">×</span>
            </a>
            <a href="#" className="tag-cloud-link">
                Business <span className="remove" aria-label="Remove this item">×</span>
            </a>
        </div>
    )
}

export default Options;