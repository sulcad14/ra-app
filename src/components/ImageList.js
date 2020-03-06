import React from 'react';

export const ImageList = ({ record }) => 
{
    const getImgUrl = () => 
    {
        const imageUrl = record.img;
        return imageUrl;
    }

    return (
        <img src={getImgUrl()} width="50px" height="50px" />
    );
} 