import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import { TextField } from '.';

export const DynamicSelectField = ({
  label,
  input,
  getDataOnStart,
  getDataOnUpdate,
  multiple,
  groupBy,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [requestLoading, setRequestLoading] = React.useState(false);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      (async () => {
        setRequestLoading(true);
        const data = await getDataOnStart();
        setOptions(data);
        setRequestLoading(false);
      })();
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const getListByValue = async (value) => {
    setRequestLoading(true);
    const data = await getDataOnUpdate(value);
    setOptions(data);
    setRequestLoading(false);
  };

  return (
    <Autocomplete
      open={open}
      multiple={multiple}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      disableCloseOnSelect
      groupBy={groupBy}
      value={!!input.value ? input.value : []}
      onSelect={multiple ? null : input.onChange}
      onChange={multiple ? (e, v) => input.onChange(v) : null}
      name={input.name}
      loading={loading || requestLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          label={label}
          variant="outlined"
          onChange={(e) => getListByValue(e.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading || requestLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};
