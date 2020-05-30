import React from "react"
import './menu-item.styles.scss';
//destructure the title of our props for now
//pupolate the component with that destructure value of title  from props

const MenuItem = ( { title, imageUrl, size } ) => (
    <div
        // if we have size value we can apply, if not we have the normal menu-item css
        className={ `${ size } menu-item` }
    >
        <div
            className='background-image'
            style={ {
                backgroundImage: `url(${ imageUrl })`
            } }
        />
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;