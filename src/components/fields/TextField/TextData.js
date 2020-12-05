import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import InputAdornment from '@material-ui/core/InputAdornment';

import { TextAreaField } from '.';

export const TextFieldData = ({ fileName, ...props }) => {
  const downloadData = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(props.value));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <TextAreaField
      endAdornment={
        <InputAdornment position="end">
          <IconButton size="medium" onClick={downloadData}>
            <GetAppIcon fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
