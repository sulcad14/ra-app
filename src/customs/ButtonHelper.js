import React from 'react';
import { IconButton } from '@material-ui/core';

export const ButtonHelper = ({ icon, ...rest }) => <IconButton component="div" {...rest}>{icon}</IconButton>;
