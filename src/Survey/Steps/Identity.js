import React from 'react';

const Identity = ({ onFieldChange, fieldsValues }) => {

    return (
        <>
            <label htmlFor="name" className="label">Name:</label>
            <input type="text" placeholder="Name" name="name" value={fieldsValues.name} onChange={onFieldChange('name')} />
            <label htmlFor="email" className="label">E-mail:</label>
            <input type="text" placeholder="E-mail" name="email" value={fieldsValues.email} onChange={onFieldChange('email')} />
        </>
    )
}

export default Identity