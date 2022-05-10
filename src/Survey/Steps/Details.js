import React from 'react';

const Details = ({ onFieldChange, fieldsValues }) => {

    return (
        <>
            <label htmlFor="age" className="label">Age:</label>
            <select id="age" name="age" onChange={onFieldChange('age')} defaultValue={fieldsValues.age}>
                <option>Select your age</option>
                <option value="15-20">15-20</option>
                <option value="21-25">21-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36+">36+</option>
            </select>
            <label className="label">Gender:</label>
            <div className="input-list">
                <div className="input-group">
                    <input type="radio" id="male" name="gender" value="Male" onChange={onFieldChange('gender')} checked={fieldsValues.gender === 'Male' ? 'checked' : ''} />
                    <label>Male</label>
                </div>
                <div className="input-group">
                    <input type="radio" id="female" name="gender" value="Female" onChange={onFieldChange('gender')} checked={fieldsValues.gender === 'Female' ? 'checked' : ''} />
                    <label>Female</label>
                </div>
                <div className="input-group">
                    <input type="radio" id="other" name="gender" value="Other" onChange={onFieldChange('gender')}  checked={fieldsValues.gender === 'Other' ? 'checked' : ''} />
                    <label>Other</label>
                </div>
            </div>
        </>
    )
}

export default Details