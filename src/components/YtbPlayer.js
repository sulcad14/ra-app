import React from 'react';
import get from 'lodash/get';
import ReactPlayer from 'react-player';
import { translate } from 'ra-core';
import PropTypes from 'prop-types';

const YtbPlayerBase = ({ record, source }) => 
{    
    const getYtbUrl = () =>
    {
        const videoUrl = get(record, ["url"]);
        return videoUrl;
    }

    return (
        <div>
            {getYtbUrl() !== undefined ?
                <ReactPlayer url={getYtbUrl()} controls={true} width="300px" height="60%"/>
            :
                translate("custom.noVideo")
            }
        </div>
    );
}

export const YtbPlayer = translate(YtbPlayerBase);

YtbPlayer.propTypes =
{
    source: PropTypes.string.isRequired,
};

YtbPlayer.defaultProps =
{
    addLabel: true,
}
