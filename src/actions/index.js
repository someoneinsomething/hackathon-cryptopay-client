// Page navigation actions
export const NAVIGATION = {
  CHANGE_ACTIVE_PATH: 'NAVIGATION.CHANGE_ACTIVE_PATH',
  SET_PAGE_LOADING: 'NAVIGATION.SET_PAGE_LOADING',
  SET_QUERY: 'NAVIGATION.SET_QUERY',
  SET_LINK_BEFORE_AUTH: 'NAVIGATION.SET_LINK_BEFORE_AUTH',
};

// Filter actions
export const FILTER = {
  SET_FILTER_VALUE: 'FILTER.SET_FILTER_VALUE',
};

// User auth token actions
export const AUTH = {
  SET_DATA: 'AUTH.SET_DATA',
};

// Login actions
export const LOGIN = {
  LOAD_SUCCESS: 'LOGIN.LOAD_SUCCESS',
  LOAD_PENDING: 'LOGIN.LOAD_PENDING',
  RESET: 'LOGIN.RESET',
  FAIL: 'LOGIN.FAIL',
};

// Signup actions
export const SIGNUP = {
  LOAD_SUCCESS: 'SIGNUP.LOAD_SUCCESS',
  LOAD_PENDING: 'SIGNUP.LOAD_PENDING',
  RESET: 'SIGNUP.RESET',
  FAIL: 'SIGNUP.FAIL',
};

// Signup actions
export const PGP_CONFIRM = {
  LOAD_SUCCESS: 'PGP_CONFIRM.LOAD_SUCCESS',
  LOAD_PENDING: 'PGP_CONFIRM.LOAD_PENDING',
  LOAD_FAIL: 'PGP_CONFIRM.LOAD_FAIL',
  SET_DATA: 'PGP_CONFIRM.SET_DATA',
};

// Send recovery account data for reset
export const RECOVERY_ACCOUNT_RESET = {
  LOAD_SUCCESS: 'RECOVERY_ACCOUNT_RESET.LOAD_SUCCESS',
  LOAD_PENDING: 'RECOVERY_ACCOUNT_RESET.LOAD_PENDING',
  LOAD_FAIL: 'RECOVERY_ACCOUNT_RESET.LOAD_FAIL',
  SET_DATA: 'RECOVERY_ACCOUNT_RESET.SET_DATA',
};

// Update data for recovery account
export const RECOVERY_ACCOUNT_UPDATE = {
  LOAD_SUCCESS: 'RECOVERY_ACCOUNT_UPDATE.LOAD_SUCCESS',
  LOAD_PENDING: 'RECOVERY_ACCOUNT_UPDATE.LOAD_PENDING',
  LOAD_FAIL: 'RECOVERY_ACCOUNT_UPDATE.LOAD_FAIL',
};

// Settings update email
export const SETTINGS_UPDATE_EMAIL = {
  UPDATE_SUCCESS: 'SETTINGS_UPDATE_EMAIL.UPDATE_SUCCESS',
  UPDATE_PENDING: 'SETTINGS_UPDATE_EMAIL.UPDATE_PENDING',
  UPDATE_FAIL: 'SETTINGS_UPDATE_EMAIL.UPDATE_FAIL',
  LOAD_SUCCESS: 'SETTINGS_UPDATE_EMAIL.LOAD_SUCCESS',
  RESET_STATUS: 'SETTINGS_UPDATE_EMAIL.RESET_STATUS',
};

// Settings update password
export const SETTINGS_UPDATE_PASSWORD = {
  UPDATE_SUCCESS: 'SETTINGS_UPDATE_PASSWORD.UPDATE_SUCCESS',
  UPDATE_PENDING: 'SETTINGS_UPDATE_PASSWORD.UPDATE_PENDING',
  UPDATE_FAIL: 'SETTINGS_UPDATE_PASSWORD.UPDATE_FAIL',
  LOAD_SUCCESS: 'SETTINGS_UPDATE_PASSWORD.LOAD_SUCCESS',
  RESET_STATUS: 'SETTINGS_UPDATE_PASSWORD.RESET_STATUS',
};

// Settings update Pgp confirm key
export const SETTINGS_UPDATE_PGP = {
  UPDATE_SUCCESS: 'SETTINGS_UPDATE_PGP.UPDATE_SUCCESS',
  UPDATE_PENDING: 'SETTINGS_UPDATE_PGP.UPDATE_PENDING',
  UPDATE_FAIL: 'SETTINGS_UPDATE_PGP.UPDATE_FAIL',
  RESET_STATUS: 'SETTINGS_UPDATE_PGP.RESET_STATUS',
};

// Language
export const LANGUAGE = {
  UPDATE_ACTIVE_LANG: 'LANGUAGE.UPDATE_ACTIVE_LANG',
};

// Currency
export const CURRENCY = {
  UPDATE_ACTIVE_CURRENCY: 'CURRENCY.UPDATE_ACTIVE_CURRENCY',
  RESET_STATUS: 'RESET_STATUS',
};

// Account info data
export const ACCOUNT_INFO = {
  LOAD_SUCCESS: 'ACCOUNT_INFO.LOAD_SUCCESS',
  LOAD_PENDING: 'ACCOUNT_INFO.LOAD_PENDING',
  LOAD_FAIL: 'ACCOUNT_INFO.LOAD_FAIL',
  SET_DATA: 'ACCOUNT_INFO.SET_DATA',
};

// Captcha actions
export const CAPTCHA = {
  LOAD_SUCCESS: 'CAPTCHA.LOAD_SUCCESS',
  LOAD_FAIL: 'CAPTCHA.LOAD_FAIL',
  LOAD_PENDING: 'CAPTCHA.LOAD_PENDING',
};

// Account balance actions
export const ACCOUNT_BALANCE = {
  LOAD_FAIL: 'ACCOUNT_BALANCE.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_BALANCE.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_BALANCE.LOAD_SUCCESS',
  UPDATE_DATA: 'ACCOUNT_BALANCE.UPDATE_DATA',
};

// Account payment history
export const ACCOUNT_PAYMENT_HISTORY = {
  LOAD_FAIL: 'ACCOUNT_PAYMENT_HISTORY.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_PAYMENT_HISTORY.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_PAYMENT_HISTORY.LOAD_SUCCESS',
  UPDATE_SUCCESS: 'ACCOUNT_PAYMENT_HISTORY.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_PAYMENT_HISTORY.UPDATE_PENDING',
};

// Account shop purchase history
export const ACCOUNT_SHOP_PURCHASE_HISTORY = {
  LOAD_FAIL: 'ACCOUNT_SHOP_PURCHASE_HISTORY.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_SHOP_PURCHASE_HISTORY.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PURCHASE_HISTORY.LOAD_SUCCESS',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PURCHASE_HISTORY.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_SHOP_PURCHASE_HISTORY.UPDATE_PENDING',
};

// Account shop purchase info
export const ACCOUNT_SHOP_PURCHASE_INFO = {
  LOAD_FAIL: 'ACCOUNT_SHOP_PURCHASE_INFO.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_SHOP_PURCHASE_INFO.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PURCHASE_INFO.LOAD_SUCCESS',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PURCHASE_INFO.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_SHOP_PURCHASE_INFO.UPDATE_PENDING',
};

// Account payment address
export const ACCOUNT_PAYMENT_ADDRESS = {
  LOAD_FAIL: 'ACCOUNT_PAYMENT_ADDRESS.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_PAYMENT_ADDRESS.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_PAYMENT_ADDRESS.LOAD_SUCCESS',
  UPDATE_SUCCESS: 'ACCOUNT_PAYMENT_ADDRESS.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_PAYMENT_ADDRESS.UPDATE_PENDING',
};

export const SHOP_CREATE = {
  SEND_SUCCESS: 'SHOP_CREATE.SEND_SUCCESS',
  SEND_FAIL: 'SHOP_CREATE.SEND_FAIL',
  SEND_PENDING: 'SHOP_CREATE.SEND_PENDING',
  RESET_STATUS: 'SHOP_CREATE.RESET_STATUS',
};

export const SHOP_UPDATE_BASE = {
  LOAD_SUCCESS: 'SHOP_UPDATE_BASE.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_UPDATE_BASE.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_UPDATE_BASE.LOAD_PENDING',
  UPDATE_PENDING: 'SHOP_UPDATE_BASE.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_BASE.UPDATE_SUCCESS',
  CHANGE_PENDING: 'SHOP_UPDATE_BASE.CHANGE_PENDING',
  CHANGE_SUCCESS: 'SHOP_UPDATE_BASE.CHANGE_SUCCESS',
  RESET_STATUS: 'SHOP_UPDATE_BASE.RESET_STATUS',
  RESET_DATA: 'SHOP_UPDATE_BASE.RESET_DATA',
};

export const SHOP_DELETE = {
  LOAD_SUCCESS: 'SHOP_DELETE.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_DELETE.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_DELETE.LOAD_PENDING',
};

export const SHOP_UPDATE_PURCHASE_INFO = {
  LOAD_SUCCESS: 'SHOP_UPDATE_PURCHASE_INFO.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_UPDATE_PURCHASE_INFO.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_UPDATE_PURCHASE_INFO.LOAD_PENDING',
  UPDATE_PENDING: 'SHOP_UPDATE_PURCHASE_INFO.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_PURCHASE_INFO.UPDATE_SUCCESS',
  CHANGE_PENDING: 'SHOP_UPDATE_PURCHASE_INFO.CHANGE_PENDING',
  CHANGE_SUCCESS: 'SHOP_UPDATE_PURCHASE_INFO.CHANGE_SUCCESS',
  RESET_DATA: 'SHOP_UPDATE_PURCHASE_INFO.RESET_DATA',
  RESET_STATUS: 'SHOP_UPDATE_PURCHASE_INFO.RESET_STATUS',
};

export const SHOP_UPDATE_PURCHASE_GUARANTEE = {
  LOAD_SUCCESS: 'SHOP_UPDATE_PURCHASE_GUARANTEE.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_UPDATE_PURCHASE_GUARANTEE.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_UPDATE_PURCHASE_GUARANTEE.LOAD_PENDING',
  CHANGE_PENDING: 'SHOP_UPDATE_PURCHASE_GUARANTEE.CHANGE_PENDING',
  CHANGE_SUCCESS: 'SHOP_UPDATE_PURCHASE_GUARANTEE.CHANGE_SUCCESS',
  UPDATE_PENDING: 'SHOP_UPDATE_PURCHASE_GUARANTEE.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_PURCHASE_GUARANTEE.UPDATE_SUCCESS',
  RESET_STATUS: 'SHOP_UPDATE_PURCHASE_GUARANTEE.RESET_STATUS',
};

export const PRODUCT_UPDATE_STATUS = {
  LOAD_SUCCESS: 'PRODUCT_UPDATE_STATUS.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_UPDATE_STATUS.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_UPDATE_STATUS.LOAD_PENDING',
  UPDATE_PENDING: 'PRODUCT_UPDATE_STATUS.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_STATUS.UPDATE_SUCCESS',
  RESET_STATUS: 'PRODUCT_UPDATE_STATUS.RESET_STATUS',
};

export const SHOP_UPDATE_RULES = {
  LOAD_SUCCESS: 'SHOP_UPDATE_RULES.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_UPDATE_RULES.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_UPDATE_RULES.LOAD_PENDING',
  UPDATE_PENDING: 'SHOP_UPDATE_RULES.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_RULES.UPDATE_SUCCESS',
  CHANGE_PENDING: 'SHOP_UPDATE_RULES.CHANGE_PENDING',
  CHANGE_SUCCESS: 'SHOP_UPDATE_RULES.CHANGE_SUCCESS',
  RESET_STATUS: 'SHOP_UPDATE_RULES.RESET_STATUS',
  RESET_DATA: 'SHOP_UPDATE_RULES.RESET_DATA',
};

export const CREATE_PRODUCT = {
  SEND_SUCCESS: 'CREATE_PRODUCT.SEND_SUCCESS',
  SEND_FAIL: 'CREATE_PRODUCT.SEND_FAIL',
  SEND_PENDING: 'CREATE_PRODUCT.SEND_PENDING',
  RESET_STATUS: 'CREATE_PRODUCT.RESET_STATUS',
};

export const PRODUCT_UPDATE_INFO = {
  LOAD_SUCCESS: 'PRODUCT_UPDATE_INFO.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_UPDATE_INFO.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_UPDATE_INFO.LOAD_PENDING',
  UPDATE_PENDING: 'PRODUCT_UPDATE_INFO.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_INFO.UPDATE_SUCCESS',
  CHANGE_PENDING: 'PRODUCT_UPDATE_INFO.CHANGE_PENDING',
  CHANGE_SUCCESS: 'PRODUCT_UPDATE_INFO.CHANGE_SUCCESS',
  RESET_STATUS: 'PRODUCT_UPDATE_INFO.RESET_STATUS',
  RESET_DATA: 'PRODUCT_UPDATE_INFO.RESET_DATA',
};

export const CREATE_PRODUCT_ITEM = {
  SEND_SUCCESS: 'CREATE_PRODUCT_ITEM.SEND_SUCCESS',
  SEND_FAIL: 'CREATE_PRODUCT_ITEM.SEND_FAIL',
  SEND_PENDING: 'CREATE_PRODUCT_ITEM.SEND_PENDING',
  RESET_STATUS: 'CREATE_PRODUCT_ITEM.RESET_STATUS',
};

export const PRODUCT_UPDATE_ITEM = {
  LOAD_SUCCESS: 'PRODUCT_UPDATE_ITEM.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_UPDATE_ITEM.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_UPDATE_ITEM.LOAD_PENDING',
  UPDATE_PENDING: 'PRODUCT_UPDATE_ITEM.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_ITEM.UPDATE_SUCCESS',
  CHANGE_PENDING: 'PRODUCT_UPDATE_ITEM.CHANGE_PENDING',
  CHANGE_SUCCESS: 'PRODUCT_UPDATE_ITEM.CHANGE_SUCCESS',
  RESET_STATUS: 'PRODUCT_UPDATE_ITEM.RESET_STATUS',
  RESET_DATA: 'PRODUCT_UPDATE_ITEM.RESET_DATA',
};

export const PRODUCT_UPDATE_ITEM_PURCHASE = {
  LOAD_SUCCESS: 'PRODUCT_UPDATE_ITEM_PURCHASE.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_UPDATE_ITEM_PURCHASE.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_UPDATE_ITEM_PURCHASE.LOAD_PENDING',
  UPDATE_PENDING: 'PRODUCT_UPDATE_ITEM_PURCHASE.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_ITEM_PURCHASE.UPDATE_SUCCESS',
  CHANGE_PENDING: 'PRODUCT_UPDATE_ITEM_PURCHASE.CHANGE_PENDING',
  CHANGE_SUCCESS: 'PRODUCT_UPDATE_ITEM_PURCHASE.CHANGE_SUCCESS',
  RESET_STATUS: 'PRODUCT_UPDATE_ITEM_PURCHASE.RESET_STATUS',
  RESET_DATA: 'PRODUCT_UPDATE_ITEM_PURCHASE.RESET_DATA',
};

export const CREATE_SHOP_CHAT = {
  SEND_SUCCESS: 'CREATE_SHOP_CHAT.SEND_SUCCESS',
  SEND_FAIL: 'CREATE_SHOP_CHAT.SEND_FAIL',
  SEND_PENDING: 'CREATE_SHOP_CHAT.SEND_PENDING',
  RESET_STATUS: 'CREATE_SHOP_CHAT.RESET_STATUS',
};

export const CREATE_PRODUCT_REVIEW = {
  SEND_SUCCESS: 'CREATE_PRODUCT_REVIEW.SEND_SUCCESS',
  SEND_FAIL: 'CREATE_PRODUCT_REVIEW.SEND_FAIL',
  SEND_PENDING: 'CREATE_PRODUCT_REVIEW.SEND_PENDING',
  RESET_STATUS: 'CREATE_PRODUCT_REVIEW.RESET_STATUS',
};

export const CREATE_PRODUCT_REPORT = {
  SEND_SUCCESS: 'CREATE_PRODUCT_REPORT.SEND_SUCCESS',
  SEND_FAIL: 'CREATE_PRODUCT_REPORT.SEND_FAIL',
  SEND_PENDING: 'CREATE_PRODUCT_REPORT.SEND_PENDING',
  RESET_STATUS: 'CREATE_PRODUCT_REPORT.RESET_STATUS',
};

export const SHOP_GET_DESIGN = {
  LOAD_PENDING: 'SHOP_GET_DESIGN.LOAD_PENDING',
  LOAD_SUCCESS: 'SHOP_GET_DESIGN.LOAD_SUCCESS',
  LOAD_ERROR: 'SHOP_GET_DESIGN.LOAD_ERROR',
  UPDATE_PENDING: 'SHOP_GET_DESIGN.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_GET_DESIGN.UPDATE_SUCCESS',
  RESET_STATUS: 'SHOP_GET_DESIGN.RESET_STATUS',
};

export const SHOP_UPDATE_AVATAR = {
  UPDATE_PENDING: 'SHOP_UPDATE_AVATAR.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_AVATAR.UPDATE_SUCCESS',
  UPDATE_ERROR: 'SHOP_UPDATE_AVATAR.UPDATE_ERROR',
};

export const SHOP_UPDATE_LOGO = {
  UPDATE_PENDING: 'SHOP_UPDATE_LOGO.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_LOGO.UPDATE_SUCCESS',
  UPDATE_ERROR: 'SHOP_UPDATE_LOGO.UPDATE_ERROR',
};

export const SHOP_UPDATE_BACKGROUND = {
  UPDATE_PENDING: 'SHOP_UPDATE_BACKGROUND.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_UPDATE_BACKGROUND.UPDATE_SUCCESS',
  UPDATE_ERROR: 'SHOP_UPDATE_BACKGROUND.UPDATE_ERROR',
};

export const PRODUCT_GET_DESIGN = {
  LOAD_PENDING: 'PRODUCT_GET_DESIGN.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_GET_DESIGN.LOAD_SUCCESS',
  UPDATE_PENDING: 'PRODUCT_GET_DESIGN.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_GET_DESIGN.UPDATE_SUCCESS',
  LOAD_ERROR: 'PRODUCT_GET_DESIGN.LOAD_ERROR',
  RESET_STATUS: 'PRODUCT_GET_DESIGN.RESET_STATUS',
};

export const PRODUCT_ITEM_GET_FILES = {
  LOAD_PENDING: 'PRODUCT_ITEM_GET_FILES.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_ITEM_GET_FILES.LOAD_SUCCESS',
  LOAD_ERROR: 'PRODUCT_ITEM_GET_FILES.LOAD_ERROR',
};

export const PRODUCT_UPDATE_AVATAR = {
  UPDATE_PENDING: 'PRODUCT_UPDATE_AVATAR.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_AVATAR.UPDATE_SUCCESS',
  UPDATE_ERROR: 'PRODUCT_UPDATE_AVATAR.UPDATE_ERROR',
};

export const PRODUCT_UPDATE_IMAGES = {
  UPDATE_PENDING: 'PRODUCT_UPDATE_IMAGES.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_UPDATE_IMAGES.UPDATE_SUCCESS',
  UPDATE_ERROR: 'PRODUCT_UPDATE_IMAGES.UPDATE_ERROR',
};

export const PRODUCT_ITEM_UPDATE_FILES = {
  UPDATE_PENDING: 'PRODUCT_ITEM_UPDATE_FILES.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_ITEM_UPDATE_FILES.UPDATE_SUCCESS',
  UPDATE_ERROR: 'PRODUCT_ITEM_UPDATE_FILES.UPDATE_ERROR',
};

export const PRODUCT_INFO = {
  LOAD_SUCCESS: 'PRODUCT_INFO.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_INFO.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_INFO.LOAD_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_INFO.UPDATE_SUCCESS',
  UPDATE_PENDING: 'PRODUCT_INFO.UPDATE_PENDING',
  UPDATE_DATA: 'PRODUCT_INFO.UPDATE_DATA',
};

export const SHOP_INFO = {
  LOAD_SUCCESS: 'SHOP_INFO.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_INFO.LOAD_FAIL',
  LOAD_PENDING: 'SHOP_INFO.LOAD_PENDING',
  UPDATE_SUCCESS: 'SHOP_INFO.UPDATE_SUCCESS',
  UPDATE_PENDING: 'SHOP_INFO.UPDATE_PENDING',
};

export const SHOP_REVIEWS = {
  LOAD_PENDING: 'SHOP_REVIEWS.LOAD_PENDING',
  LOAD_SUCCESS: 'SHOP_REVIEWS.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_REVIEWS.LOAD_FAIL',
  UPDATE_PENDING: 'SHOP_REVIEWS.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_REVIEWS.UPDATE_SUCCESS',
};

export const ACCOUNT_SHOP_REVIEWS = {
  LOAD_PENDING: 'ACCOUNT_SHOP_REVIEWS.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_REVIEWS.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_SHOP_REVIEWS.LOAD_FAIL',
  UPDATE_DATA: 'ACCOUNT_SHOP_REVIEWS.UPDATE_DATA',
};

export const SHOP_CATALOG = {
  LOAD_PENDING: 'SHOP_CATALOG.LOAD_PENDING',
  LOAD_SUCCESS: 'SHOP_CATALOG.LOAD_SUCCESS',
  LOAD_FAIL: 'SHOP_CATALOG.LOAD_FAIL',
  UPDATE_PENDING: 'SHOP_CATALOG.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_CATALOG.UPDATE_SUCCESS',
};

export const SHOP_RULES = {
  LOAD_PENDING: 'SHOP_RULES.LOAD_PENDING',
  LOAD_SUCCESS: 'SHOP_RULES.LOAD_SUCCESS',
  UPDATE_PENDING: 'SHOP_RULES.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_RULES.UPDATE_SUCCESS',
  LOAD_FAIL: 'SHOP_RULES.LOAD_FAIL',
};

export const PRODUCT_ITEM_LIST = {
  LOAD_PENDING: 'PRODUCT_ITEM_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_ITEM_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_ITEM_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'PRODUCT_ITEM_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'PRODUCT_ITEM_LIST.UPDATE_PENDING',
};

export const PRODUCT_REVIEWS = {
  LOAD_PENDING: 'PRODUCT_REVIEWS.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_REVIEWS.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_REVIEWS.LOAD_FAIL',
  UPDATE_SUCCESS: 'PRODUCT_REVIEWS.UPDATE_SUCCESS',
  UPDATE_PENDING: 'PRODUCT_REVIEWS.UPDATE_PENDING',
};

export const ACCOUNT_SHOP_LIST = {
  LOAD_PENDING: 'ACCOUNT_SHOP_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_SHOP_LIST.LOAD_FAIL',
  UPDATE_PENDING: 'ACCOUNT_SHOP_LIST.UPDATE_PENDING',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_LIST.UPDATE_SUCCESS',
};

export const ACCOUNT_CHAT_DIALOGUES = {
  LOAD_PENDING: 'ACCOUNT_CHAT_DIALOGUES.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_CHAT_DIALOGUES.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_CHAT_DIALOGUES.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_CHAT_DIALOGUES.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_CHAT_DIALOGUES.UPDATE_PENDING',
};

export const ACCOUNT_CHAT = {
  LOAD_PENDING: 'ACCOUNT_CHAT.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_CHAT.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_CHAT.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_CHAT.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_CHAT.UPDATE_PENDING',
};

export const ARBITRAGE_CHAT = {
  LOAD_PENDING: 'ARBITRAGE_CHAT.LOAD_PENDING',
  LOAD_SUCCESS: 'ARBITRAGE_CHAT.LOAD_SUCCESS',
  LOAD_FAIL: 'ARBITRAGE_CHAT.LOAD_FAIL',
  UPDATE_SUCCESS: 'ARBITRAGE_CHAT.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ARBITRAGE_CHAT.UPDATE_PENDING',
};

export const PURCHASE_PRODUCT_CONFIRM = {
  LOAD_PENDING: 'PURCHASE_PRODUCT_CONFIRM.LOAD_PENDING',
  LOAD_SUCCESS: 'PURCHASE_PRODUCT_CONFIRM.LOAD_SUCCESS',
  LOAD_FAIL: 'PURCHASE_PRODUCT_CONFIRM.LOAD_FAIL',
  UPDATE_SUCCESS: 'PURCHASE_PRODUCT_CONFIRM.UPDATE_SUCCESS',
  UPDATE_PENDING: 'PURCHASE_PRODUCT_CONFIRM.UPDATE_PENDING',
  PURCHASE_SUCCESS: 'PURCHASE_PRODUCT_CONFIRM.PURCHASE_SUCCESS',
  PURCHASE_PENDING: 'PURCHASE_PRODUCT_CONFIRM.PURCHASE_PENDING',
};

export const PURCHASE_PRODUCT_INFO = {
  LOAD_PENDING: 'PURCHASE_PRODUCT_INFO.LOAD_PENDING',
  LOAD_SUCCESS: 'PURCHASE_PRODUCT_INFO.LOAD_SUCCESS',
  LOAD_FAIL: 'PURCHASE_PRODUCT_INFO.LOAD_FAIL',
  UPDATE_PENDING: 'PURCHASE_PRODUCT_INFO.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PURCHASE_PRODUCT_INFO.UPDATE_SUCCESS',
};

export const ACCOUNT_SHOP_PRODUCT_LIST = {
  LOAD_PENDING: 'ACCOUNT_SHOP_PRODUCT_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_SHOP_PRODUCT_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_SHOP_PRODUCT_LIST.UPDATE_PENDING',
};

export const SHOP_OPERATORS = {
  LOAD_PENDING: 'SHOP_OPERATORS.LOAD_PENDING',
  LOAD_SUCCESS: 'SHOP_OPERATORS.LOAD_SUCCESS',
  LOAD_ERROR: 'SHOP_OPERATORS.LOAD_ERROR',

  UPDATE_PENDING: 'SHOP_OPERATORS.UPDATE_PENDING',
  UPDATE_SUCCESS: 'SHOP_OPERATORS.UPDATE_SUCCESS',

  ADD_PENDING: 'SHOP_OPERATORS.ADD_PENDING',
  ADD_SUCCESS: 'SHOP_OPERATORS.ADD_SUCCESS',
  ADD_FAIL: 'SHOP_OPERATORS.ADD_FAIL',
  ADD_RESET: 'SHOP_OPERATORS.ADD_RESET',

  DELETE_PENDING: 'SHOP_OPERATORS.DELETE_PENDING',
  DELETE_SUCCESS: 'SHOP_OPERATORS.DELETE_SUCCESS',
  DELETE_FAIL: 'SHOP_OPERATORS.DELETE_FAIL',
  DELETE_RESET: 'SHOP_OPERATORS.DELETE_RESET',

  UPDATE_DATA: 'SHOP_OPERATORS.UPDATE_DATA',
  RESET_STATUS: 'SHOP_OPERATORS.RESET_STATUS',
};

export const ACCOUNT_SHOP_PRODUCT_INFO = {
  LOAD_PENDING: 'ACCOUNT_SHOP_PRODUCT_INFO.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_INFO.LOAD_SUCCESS',
  LOAD_ERROR: 'ACCOUNT_SHOP_PRODUCT_INFO.LOAD_ERROR',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_INFO.UPDATE_SUCCESS',
  EDIT_DATA: 'ACCOUNT_SHOP_PRODUCT_INFO.EDIT_DATA',
};

export const ACCOUNT_SHOP_PRODUCT_ITEM_INFO = {
  LOAD_PENDING: 'ACCOUNT_SHOP_PRODUCT_ITEM_INFO.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_ITEM_INFO.LOAD_SUCCESS',
  LOAD_ERROR: 'ACCOUNT_SHOP_PRODUCT_ITEM_INFO.LOAD_ERROR',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_ITEM_INFO.UPDATE_SUCCESS',
};

export const ACCOUNT_PURCHASE_LIST = {
  LOAD_PENDING: 'ACCOUNT_PURCHASE_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_PURCHASE_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_PURCHASE_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_PURCHASE_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_PURCHASE_LIST.UPDATE_PENDING',
};

export const ACCOUNT_ARBITRAGE_LIST = {
  LOAD_PENDING: 'ACCOUNT_ARBITRAGE_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_ARBITRAGE_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_ARBITRAGE_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_ARBITRAGE_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_ARBITRAGE_LIST.UPDATE_PENDING',
};

export const ACCOUNT_SHOP_PRODUCT_ITEM_LIST = {
  LOAD_PENDING: 'ACCOUNT_SHOP_PRODUCT_ITEM_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_ITEM_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_SHOP_PRODUCT_ITEM_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_SHOP_PRODUCT_ITEM_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_SHOP_PRODUCT_ITEM_LIST.UPDATE_PENDING',
};

export const SHOP_CATEGORY_CREATE = {
  SEND_SUCCESS: 'SHOP_CATEGORY_CREATE.SEND_SUCCESS',
  SEND_FAIL: 'SHOP_CATEGORY_CREATE.SEND_FAIL',
  SEND_PENDING: 'SHOP_CATEGORY_CREATE.SEND_PENDING',
};

export const ACCOUNT_PRODUCT_ORDER_EDIT = {
  EDIT_PENDING: 'ACCOUNT_PRODUCT_ORDER_EDIT.EDIT_PENDING',
  EDIT_SUCCESS: 'ACCOUNT_PRODUCT_ORDER_EDIT.EDIT_SUCCESS',
  EDIT_FAIL: 'ACCOUNT_PRODUCT_ORDER_EDIT.EDIT_FAIL',
  RESET_STATUS: 'ACCOUNT_PRODUCT_ORDER_EDIT.RESET_STATUS',
};

export const PRODUCT_DELETE = {
  LOAD_SUCCESS: 'PRODUCT_DELETE.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_DELETE.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_DELETE.LOAD_PENDING',
};

export const PRODUCT_ITEM_DELETE = {
  LOAD_SUCCESS: 'PRODUCT_ITEM_DELETE.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_ITEM_DELETE.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_ITEM_DELETE.LOAD_PENDING',
};

export const PRODUCT_ITEM_UPDATE_ORDER = {
  EDIT_PENDING: 'PRODUCT_ITEM_UPDATE_ORDER.EDIT_PENDING',
  EDIT_SUCCESS: 'PRODUCT_ITEM_UPDATE_ORDER.EDIT_SUCCESS',
  EDIT_FAIL: 'PRODUCT_ITEM_UPDATE_ORDER.EDIT_FAIL',
  RESET_STATUS: 'ACCOUNT_PRODUCT_ORDER_EDIT.RESET_STATUS',
};

export const SHOP_SUBCATEGORY_CREATE = {
  SEND_SUCCESS: 'SHOP_SUBCATEGORY_CREATE.SEND_SUCCESS',
  SEND_FAIL: 'SHOP_SUBCATEGORY_CREATE.SEND_FAIL',
  SEND_PENDING: 'SHOP_SUBCATEGORY_CREATE.SEND_PENDING',
  SET_CATEGORY_LIST: 'SHOP_SUBCATEGORY_CREATE.SET_CATEGORY_LIST',
};

export const PRODUCT_ADD_CATEGORY = {
  SEND_SUCCESS: 'PRODUCT_ADD_CATEGORY.SEND_SUCCESS',
  SEND_FAIL: 'PRODUCT_ADD_CATEGORY.SEND_FAIL',
  SEND_PENDING: 'PRODUCT_ADD_CATEGORY.SEND_PENDING',
  SET_CATEGORY_LIST: 'PRODUCT_ADD_CATEGORY.SET_CATEGORY_LIST',
  RESET_STORE: 'PRODUCT_ADD_CATEGORY.RESET_STORE',
};

export const PRODUCT_DELETE_CATEGORY = {
  LOAD_SUCCESS: 'PRODUCT_DELETE_CATEGORY.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_DELETE_CATEGORY.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_DELETE_CATEGORY.LOAD_PENDING',

  SEND_SUCCESS: 'PRODUCT_DELETE_CATEGORY.SEND_SUCCESS',
  SEND_FAIL: 'PRODUCT_DELETE_CATEGORY.SEND_FAIL',
  SEND_PENDING: 'PRODUCT_DELETE_CATEGORY.SEND_PENDING',

  UPDATE_PENDING: 'PRODUCT_DELETE_CATEGORY.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_DELETE_CATEGORY.UPDATE_SUCCESS',
  RESET_STORE: 'PRODUCT_DELETE_CATEGORY.RESET_STORE',
};

export const PRODUCT_ADD_SUBCATEGORY = {
  SEND_SUCCESS: 'PRODUCT_ADD_SUBCATEGORY.SEND_SUCCESS',
  SEND_FAIL: 'PRODUCT_ADD_SUBCATEGORY.SEND_FAIL',
  SEND_PENDING: 'PRODUCT_ADD_SUBCATEGORY.SEND_PENDING',
  SET_SUBCATEGORY_LIST: 'PRODUCT_ADD_SUBCATEGORY.SET_SUBCATEGORY_LIST',
  RESET_STORE: 'PRODUCT_ADD_SUBCATEGORY.RESET_STORE',
};

export const PRODUCT_DELETE_SUBCATEGORY = {
  LOAD_SUCCESS: 'PRODUCT_DELETE_SUBCATEGORY.LOAD_SUCCESS',
  LOAD_FAIL: 'PRODUCT_DELETE_SUBCATEGORY.LOAD_FAIL',
  LOAD_PENDING: 'PRODUCT_DELETE_SUBCATEGORY.LOAD_PENDING',

  SEND_SUCCESS: 'PRODUCT_DELETE_SUBCATEGORY.SEND_SUCCESS',
  SEND_FAIL: 'PRODUCT_DELETE_SUBCATEGORY.SEND_FAIL',
  SEND_PENDING: 'PRODUCT_DELETE_SUBCATEGORY.SEND_PENDING',

  UPDATE_PENDING: 'PRODUCT_DELETE_SUBCATEGORY.UPDATE_PENDING',
  UPDATE_SUCCESS: 'PRODUCT_DELETE_SUBCATEGORY.UPDATE_SUCCESS',
  RESET_STORE: 'PRODUCT_DELETE_SUBCATEGORY.RESET_STORE',
};

export const PRODUCT_ITEM_UPDATE_PRICE = {
  EDIT_PENDING: 'PRODUCT_ITEM_UPDATE_PRICE.EDIT_PENDING',
  EDIT_SUCCESS: 'PRODUCT_ITEM_UPDATE_PRICE.EDIT_SUCCESS',
  EDIT_FAIL: 'PRODUCT_ITEM_UPDATE_PRICE.EDIT_FAIL',
};

export const ACCOUNT_PRODUCT_ITEM_FILE_LIST = {
  LOAD_PENDING: 'ACCOUNT_PRODUCT_ITEM_FILE_LIST.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_PRODUCT_ITEM_FILE_LIST.LOAD_SUCCESS',
  LOAD_FAIL: 'ACCOUNT_PRODUCT_ITEM_FILE_LIST.LOAD_FAIL',
  UPDATE_SUCCESS: 'ACCOUNT_PRODUCT_ITEM_FILE_LIST.UPDATE_SUCCESS',
  UPDATE_PENDING: 'ACCOUNT_PRODUCT_ITEM_FILE_LIST.UPDATE_PENDING',
};

export const ACCOUNT_PRODUCT_ITEM_FILE_INFO = {
  LOAD_PENDING: 'ACCOUNT_PRODUCT_ITEM_FILE_INFO.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_PRODUCT_ITEM_FILE_INFO.LOAD_SUCCESS',
  LOAD_ERROR: 'ACCOUNT_PRODUCT_ITEM_FILE_INFO.LOAD_ERROR',
  UPDATE_SUCCESS: 'ACCOUNT_PRODUCT_ITEM_FILE_INFO.UPDATE_SUCCESS',
  EDIT_DATA: 'ACCOUNT_PRODUCT_ITEM_FILE_INFO.EDIT_DATA',
};

export const PRODUCT_ITEM_FILE_CREATE = {
  SEND_SUCCESS: 'PRODUCT_ITEM_FILE_CREATE.SEND_SUCCESS',
  SEND_FAIL: 'PRODUCT_ITEM_FILE_CREATE.SEND_FAIL',
  SEND_PENDING: 'PRODUCT_ITEM_FILE_CREATE.SEND_PENDING',
  RESET_STORE: 'PRODUCT_ITEM_FILE_CREATE.RESET_STORE',
};

export const PRODUCT_ITEM_FILE_DATA_VIEW = {
  LOAD_PENDING: 'PRODUCT_ITEM_FILE_DATA_VIEW.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_ITEM_FILE_DATA_VIEW.LOAD_SUCCESS',
  LOAD_ERROR: 'PRODUCT_ITEM_FILE_DATA_VIEW.LOAD_ERROR',
  RESET_STORE: 'PRODUCT_ITEM_FILE_DATA_VIEW.RESET_STORE',
};

export const PRODUCT_ITEM_FILE_DELETE = {
  LOAD_PENDING: 'PRODUCT_ITEM_FILE_DELETE.LOAD_PENDING',
  LOAD_SUCCESS: 'PRODUCT_ITEM_FILE_DELETE.LOAD_SUCCESS',
  LOAD_ERROR: 'PRODUCT_ITEM_FILE_DELETE.LOAD_ERROR',
  RESET_STORE: 'PRODUCT_ITEM_FILE_DELETE.RESET_STORE',
};

export const ACCOUNT_SHOP_BALANCE = {
  LOAD_FAIL: 'ACCOUNT_SHOP_BALANCE.LOAD_FAIL',
  LOAD_PENDING: 'ACCOUNT_SHOP_BALANCE.LOAD_PENDING',
  LOAD_SUCCESS: 'ACCOUNT_SHOP_BALANCE.LOAD_SUCCESS',
  UPDATE_DATA: 'ACCOUNT_SHOP_BALANCE.UPDATE_DATA',
  RESET_STORE: 'ACCOUNT_SHOP_BALANCE.RESET_STORE',
};
