export const setLocalData = (key, value) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  return localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalData = (key) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const setSessionData = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const getSessionData = (key, defaultValue = null) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return defaultValue;
};

// Initital state

const defaultData = {
  pending: null,
  success: null,
  error: null,
  errorMessage: null,
  updating: null,
  updated: null,
};

export const initRequestState = () => ({
  pending: null,
  success: null,
  error: null,
  errorMessage: null,
});

export const initRequestWithDataState = (subData = null, additional = null) => ({
  ...defaultData,
  data: {},
  ...(subData ? { data: subData } : null),
  ...(additional ? { additional } : null),
});

export const setRequestPending = (state) => {
  state.error = defaultData.error;
  state.errorMessage = defaultData.errorMessage;
  state.success = defaultData.success;
  state.pending = true;
  return state;
};

export const setRequestSuccess = (state, data = null) => {
  state.error = false;
  state.errorMessage = false;
  state.success = true;
  state.pending = false;

  if (data) {
    state.data = data;
  }

  return state;
};

export const setRequestError = (state, message = null) => {
  state.error = true;
  state.errorMessage = message;
  state.updated = false;
  state.updating = false;
  state.success = false;
  state.pending = false;
  return state;
};

export const setUpdatePending = (state) => {
  state.error = defaultData.error;
  state.errorMessage = defaultData.errorMessage;
  state.updating = true;
  state.updated = false;
  return state;
};

export const resetRequestStatus = (state) => {
  state.error = null;
  state.errorMessage = null;
  state.success = null;
  state.updated = null;

  return state;
};
export const resetErrorStatus = (state) => {
  state.error = null;
  state.errorMessage = null;

  return state;
};
export const updatePaginationData = (state, data) => {
  state.pagination = data.pagination;

  if (data.pagination.skip === 0) {
    state.list = data.list;
  } else {
    state.list = [...state.list, ...data.list];
  }

  return state;
};

export const updateData = (state, data) => {
  if (data.pagination) {
    state = updatePaginationData(state, data);
    const { list, pagination, ...dataAlso } = data;
    state = { ...state, ...dataAlso };
  } else {
    state = data;
  }

  return state;
};

export const setUpdateSuccess = (state, data = null) => {
  state.updating = false;
  state.updated = true;

  if (data) {
    state.data = updateData(state.data, data);
  }

  return state;
};

export const editData = (state, fn) => {
  state.data = fn(state.data);
  return state;
};

export const isRequestPending = (state = {}) => !!state.pending;
export const isRequestSuccess = (state = {}) => !!state.success;
export const isRequestError = (state = {}) => !!state.error;
export const isUpdatePending = (state = {}) => !!state.updating;
export const isUpdateSuccess = (state = {}) => !!state.updated;
export const getData = (state = {}, defaultValue = {}) => state.data || defaultValue;
export const getErrorMessage = (state = {}) => state.errorMessage || null;

// DEPRICATED FUNC

export const getLoadingState = (state = {}, type) => ({
  ...state,
  isLoading: true,
  isLoaded: false,
  isError: false,
  ...(type ? { data: type } : null),
});

export const getLoadedState = (state) => ({
  ...state,
  isLoading: false,
  isLoaded: false,
  isError: false,
});

export const getUpdatingState = (state) => ({
  ...state,
  isLoading: true,
  isLoaded: false,
  isError: false,
});

export const getUpdatedState = (state, data) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
  isError: false,
  data: { ...state.data, ...data },
});

export const getErrorUpdateState = (state) => ({
  ...state,
  isLoading: false,
  isLoaded: false,
  isError: true,
});

export const getReadyState = (data, type) => ({
  ...(data || type ? { data: data || type } : null),
  isLoading: false,
  isLoaded: true,
  isError: false,
});

export const filterDataState = (dataState, data, fn) => {
  dataState.data = data.filter(fn);
  return dataState;
};

export const getErrorState = (data, type) => ({
  ...(data || type ? { data: data || type } : null),
  isLoading: false,
  isLoaded: false,
  isError: true,
});

export const isLoading = (state = {}) => !!state.isLoading;
export const isLoaded = (state = {}) => !!state.isLoaded;

export const hasData = (state = {}) => !!state.data;
export const shouldLoad = (state = {}) => !state.isLoaded && !state.isLoading;
