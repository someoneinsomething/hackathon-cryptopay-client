export const API = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  RECOVERY_ACCOUNT_UPDATE: ({ key }) => `/auth/reset/${key}`,
  PGP_CONFIRM: ({ key }) => `/auth/reset/${key}`,
  RECOVERY_ACCOUNT_RESET: '/auth/reset',
  UPDATE_PASSWORD: '/auth/settings/password',
  UPDATE_PASSWORD_WITH_CONFIRM: '/auth/settings/password/confirm',
  CONFIRM_PASSWORD_UPDATE: ({ key }) => `/auth/settings/password/confirm/${key}`,
  UPDATE_EMAIL: '/auth/settings/email',
  UPDATE_PGP: '/auth/settings/pgp',
  ACCOUNT_INFO: '/auth/account-data',
  GENERATE_CAPTCHA: '/captcha',
  ACCOUNT_BALANCE: '/payment/balance',
  ACCOUNT_PAYMENT_ADDRESS: '/payment/address',
  CREATE_BITCOIN_ADDRESS: '/payment/address/bitcoin',
  ACCOUNT_PAYMENT_HISTORY: ({ skip, take }) => `/payment/history/bitcoin?skip=${skip}&take=${take}`,
  ACCOUNT_PURCHASE_LIST: ({ skip, take }) => `/purchase/list/user?skip=${skip}&take=${take}`,
  ACCOUNT_PURCHASE_INFO: ({ purchaseId }) => `/purchase/${purchaseId}/user`,
  SHOP_CREATE: '/shop',
  SHOP_BASE: ({ id, lang }) => `/shop/${id}/info?lang=${lang}`,
  SHOP_RULES_EDIT: ({ id, lang }) => `/shop/${id}/rules?lang=${lang}`,
  SHOP_PURCHASE_INFO: ({ id, lang }) => `/shop/${id}/purchase-info?lang=${lang}`,
  SHOP_GUARANTEE: ({ id, lang }) => `/shop/${id}/guarantee?lang=${lang}`,
  SHOP_DELETE: ({ id }) => `/shop/${id}`,
  SHOP_DESIGN: ({ id }) => `/shop/${id}/design`,
  PRODUCT_DESIGN: ({ shopId, productId }) => `/shop/${shopId}/product/${productId}/design`,
  PRODUCT_ITEM_FILES: ({ shopId, productId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/productItem/${productItemId}/files`,
  SHOP_CREATE_PRODUCT: ({ shopId }) => `/shop/${shopId}/product`,
  PRODUCT_UPDATE_INFO: ({ shopId, productId, lang }) =>
    `/shop/${shopId}/product/${productId}/info?lang=${lang}`,
  PRODUCT_DELETE: ({ shopId, productId }) => `/shop/${shopId}/product/${productId}`,
  PRODUCT_ITEM_DELETE: ({ shopId, productId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}`,
  PRODUCT_UPDATE_STATUS: ({ shopId, productId }) => `/shop/${shopId}/product/${productId}/status`,
  SHOP_CREATE_PRODUCT_ITEM: ({ shopId, productId }) => `/shop/${shopId}/product/${productId}/item`,
  PRODUCT_ITEM_UPDATE_INFO: ({ shopId, productId, productItemId, lang }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/info?lang=${lang}`,
  SHOP_DELETE_PRODUCT_ITEM: ({ shopId, productId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}`,
  SHOP_PRODUCT_INFO: ({ shopId, productId, lang }) =>
    `/shop/${shopId}/product/${productId}/data?lang=${lang}`,
  SHOP_RULES_INFO: ({ id, lang }) => `/shop/${id}/rules?lang=${lang}`,
  SHOP_MAIN_INFO: ({ id, lang }) => `/shop/${id}/data?lang=${lang}`,
  ACCOUNT_SHOP_LIST: ({ skip, take }) => `/shop/member?skip=${skip}&take=${take}`,
  SHOP_REVIEWS: ({ id, skip, take }) => `/shop/${id}/review/list?skip=${skip}&take=${take}`,
  PRODUCT_REVIEWS: ({ shopId, productId, skip, take }) =>
    `/shop/${shopId}/product/${productId}/review/list?skip=${skip}&take=${take}`,
  PRODUCT_CATALOG: ({ shopId, productId, skip, take, lang }) =>
    `/shop/${shopId}/product/${productId}/item/catalog?lang=${lang}&skip=${skip}&take=${take}`,
  SHOP_CATALOG: ({ id, lang, skip, take }) =>
    `/shop/${id}/product/catalog?lang=${lang}&skip=${skip}&take=${take}`,
  SHOP_OPERATORS_LIST: ({ shopId, skip, take }) => `/shop/${shopId}/member/list?skip=${skip}&take=${take}`,
  SHOP_OPERATOR: ({ shopId, operator }) => `/shop/${shopId}/member/${operator}`,
  ACCOUNT_SHOP_PRODUCT_INFO: ({ shopId, productId }) => `/shop/${shopId}/product/${productId}/entity`,
  ACCOUNT_SHOP_PRODUCT_ITEM_INFO: ({ shopId, productId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/entity`,
  ACCOUNT_SHOP_PRODUCT_LIST: ({ shopId, skip, take }) =>
    `/shop/${shopId}/product/list?skip=${skip}&take=${take}`,
  ACCOUNT_SHOP_PRODUCT_ITEM_LIST: ({ shopId, productId, skip, take }) =>
    `/shop/${shopId}/product/${productId}/item/list?skip=${skip}&take=${take}`,
  PURCHASE_PRODUCT_CONFIRM_INFO: ({ shopId, productId, productItemId, lang }) =>
    `/purchase/shop/${shopId}/product/${productId}/item/${productItemId}/confirm?lang=${lang}`,
  PURCHASE_PRODUCT_CONFIRM: ({ shopId, productId, productItemId, lang }) =>
    `/purchase/shop/${shopId}/product/${productId}/item/${productItemId}?lang=${lang}`,
  ACCOUNT_SHOP_PURCHASE: ({ skip, take, shopId, lang }) =>
    `/purchase/list/shop/${shopId}?lang=${lang}&skip=${skip}&take=${take}`,
  ACCOUNT_SHOP_PURCHASE_INFO: ({ shopId, purchaseId }) => `/purchase/${purchaseId}/shop/${shopId}`,
  UPDATE_EMAIL_WITH_CONFIRM: '/auth/settings/email/confirm',
  CONFIRM_EMAIL_UPDATE: ({ key }) => `/auth/settings/email/confirm/${key}`,
  SHOP_CATEGORY_CREATE: ({ shopId }) => `/category/shop/${shopId}`,
  PRODUCT_ORDER_EDIT: ({ productId, shopId }) => `/shop/${shopId}/product/${productId}/order`,
  PRODUCT_ITEM_ORDER_EDIT: ({ productId, shopId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/order`,
  PRODUCT_ITEM_UPDATE_PURCHASE_INFO: ({ productId, shopId, productItemId, lang }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/purchase-info?lang=${lang}`,
  SHOP_SUBCATEGORT_CREATE: ({ shopId, categoryId }) => `/category/${categoryId}/shop/${shopId}/subcategory`,
  CATEGORY_LIST: ({ lang, name = null }) => `/category/list?lang=${lang}${name ? `&name=${name}` : ''}`,
  ACCOUNT_SHOP_PRODUCT_CATEGORY_ADD: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/category`,
  ACCOUNT_SHOP_PRODUCT_CATEGORY_LIST: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/category`,
  ACCOUNT_SHOP_PRODUCT_CATEGORY_DELETE: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/category`,
  ACCOUNT_SHOP_PRODUCT_SUBCATEGORY_LIST_AVAILABLE: ({ lang, name = null, shopId, productId }) =>
    `/category/subcategory/shop/${shopId}/product/${productId}/available?lang=${lang}${
      name ? `&name=${name}` : ''
    }`,
  ACCOUNT_SHOP_PRODUCT_SUBCATEGORY_ADD: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/subcategory`,
  ACCOUNT_SHOP_PRODUCT_SUBCATEGORY_LIST: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/subcategory`,
  ACCOUNT_SHOP_PRODUCT_SUBCATEGORY_DELETE: ({ shopId, productId }) =>
    `/shop/${shopId}/product/${productId}/subcategory`,
  PRODUCT_ITEM_PRICE_EDIT: ({ productId, shopId, productItemId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/price`,
  PRODUCT_ITEM_FILE_LIST: ({ shopId, productId, productItemId, skip, take, filter }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/file/list?skip=${skip}&take=${take}&filter=${filter}`,
  PRODUCT_ITEM_FILE_INFO: ({ shopId, productId, productItemId, productItemFileId }) =>
    `/shop/${shopId}/product/${productId}/item/${productItemId}/file/${productItemFileId}`,
  ACCOUNT_SHOP_BALANCE: ({ shopId }) => `/payment/balance/shop/${shopId}`,
};

const STATIC_SERVER = process.env.STATIC;

export const STATIC = {
  UPDATE_SHOP_AVATAR: ({ shopId }) => `${STATIC_SERVER}/file/shop/${shopId}/avatar`,
  UPDATE_SHOP_LOGO: ({ shopId }) => `${STATIC_SERVER}/file/shop/${shopId}/logo`,
  UPDATE_SHOP_BACKGROUND: ({ shopId }) => `${STATIC_SERVER}/file/shop/${shopId}/background`,
  UPDATE_PRODUCT_AVATAR: ({ shopId, productId }) =>
    `${STATIC_SERVER}/file/shop/${shopId}/product/${productId}/avatar`,
  UPDATE_PRODUCT_IMAGE: ({ shopId, productId }) =>
    `${STATIC_SERVER}/file/shop/${shopId}/product/${productId}/image`,
  DELETE_PRODUCT_IMAGE: ({ shopId, productId, fileId }) =>
    `${STATIC_SERVER}/file/shop/${shopId}/product/${productId}/image/${fileId}`,
  UPDATE_PRODUCT_ITEM_FILES: ({ shopId, productId, productItemId }) =>
    `${STATIC_SERVER}/file/shop/${shopId}/product/${productId}/productItem/${productItemId}/files`,
  DELETE_PRODUCT_ITEM_FILE: ({ shopId, productId, productItemId, productItemFileId }) =>
    `${STATIC_SERVER}/purchase/shop/${shopId}/product/${productId}/item/${productItemId}/file/${productItemFileId}/data`,
  CREATE_PRODUCT_ITEM_FILE_TEXT: ({ shopId, productId, productItemId }) =>
    `${STATIC_SERVER}/purchase/shop/${shopId}/product/${productId}/item/${productItemId}/text`,
  CREATE_PRODUCT_ITEM_FILE_DATA: ({ shopId, productId, productItemId }) =>
    `${STATIC_SERVER}/purchase/shop/${shopId}/product/${productId}/item/${productItemId}/data`,
  GET_PRODUCT_ITEM_FILE_DATA: ({ shopId, productId, productItemId, productItemFileId }) =>
    `${STATIC_SERVER}/purchase/shop/${shopId}/product/${productId}/item/${productItemId}/file/${productItemFileId}/data`,
  GET_SHOP_PURCHASE_FILE_DATA: ({ shopId, purchaseId }) =>
    `${STATIC_SERVER}/purchase/${purchaseId}/shop/${shopId}/data`,
  GET_USER_PURCHASE_FILE_DATA: ({ purchaseId }) => `${STATIC_SERVER}/purchase/${purchaseId}/user/data`,
};
