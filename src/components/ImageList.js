import React from 'react';

export const ImageList = ({ record, resource }) => 
{
    const getImgUrl = () => 
    {
        const imageUrl = record.img;
        return imageUrl;
    }

    const returnImg = () => 
    {
        if (resource === 'albums') 
        {
            return <img src={getImgUrl()} width="50px" height="50px" />;
        }
        else 
        {
            return <img src={getImgUrl()} width="100px" height="100px" />;
        }
    }

    return returnImg();
}

ImageList.defaultProps = 
{
    addLabel: false,
}