import React from 'react';

const Favorites = ({ onFieldChange, fieldsValues }) => {

    return (
        <>
            <label htmlFor="fav_book" className="label">Favorite Book:</label>
            <input type="text" placeholder="Favorite Book" name="fav_book" value={fieldsValues.fav_book} onChange={onFieldChange('fav_book')} />
            <label className="label">Favorite Colors:</label>
            <div className="input-list">
                <div className="input-group">
                    <input type="checkbox" id="blue" name="Blue" onChange={onFieldChange('fav_colors')} />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div className="input-group">
                    <input type="checkbox" id="red" name="Red" onChange={onFieldChange('fav_colors')} />
                    <label htmlFor="red">Red</label>
                </div>
                <div className="input-group">
                    <input type="checkbox" id="yello" name="Yellow" onChange={onFieldChange('fav_colors')} />
                    <label htmlFor="yellow">Yellow</label>
                </div>
            </div>
        </>
    )
}

export default Favorites