import React from 'react';

const Summary = ({ content }) => {

    const { name, email, age, gender, fav_book, fav_colors } = content;
    return (
        <table>
            <tbody>
                <tr>
                    <td><strong>Name:</strong></td>
                    <td>{name ? name : ''}</td>
                </tr>
                <tr>
                    <td><strong>E-mail:</strong></td>
                    <td>{email ? email : ''}</td>
                </tr>
                <tr>
                    <td><strong>Age:</strong></td>
                    <td>{age ? age : ''}</td>
                </tr>
                <tr>
                    <td><strong>Gender:</strong></td>
                    <td>{gender ? gender : ''}</td>
                </tr>
                <tr>
                    <td><strong>Favorite Book:</strong></td>
                    <td>{fav_book ? fav_book : ''}</td>
                </tr>
                <tr>
                    <td><strong>Favorite Colors:</strong></td>
                    <td>{fav_colors ? fav_colors : ''}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Summary