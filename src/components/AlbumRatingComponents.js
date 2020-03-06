import React, { useState } from 'react';
import { addField } from 'ra-core';
import { 
    SelectInput,
} from 'react-admin';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles, createStyles } from '@material-ui/core';
import get from 'lodash/get';
import Rating from 'react-rating';

const styles = theme => createStyles(
{
    
});

const AlbumRating = ({ record, source, input }) => 
{
    /* define states */
    const [value, setValue] = useState(record.rating);

    const handleChange = (rate) => 
    {
        setValue(rate);
    }

    return (
        <div>
            <Rating initialRating={value} fractions={2} onChange={(rate) => handleChange(rate)} fullSymbol={<StarIcon />} emptySymbol={<StarBorderIcon />} />
        </div>
    );
}

export const AlbumRatingInput = addField(props => <AlbumRating {...props} />);

AlbumRatingInput.defaultProps = 
{
    addLabel: false
}

export const AlbumRatingField = ({ record, source }) =>
{
    return (
        <Rating initialRating={record.rating} fullSymbol={<StarIcon />} emptySymbol={<StarBorderIcon />} readonly />
    );
}

AlbumRatingField.defaultProps = 
{
    addLabel: false
}
