export const staticPath = (path, { server = false } = { server: false }) => {
  return server ? `${process.env.STATIC}/static/${path.type.toLowerCase()}/${path.path}` : `/static${path}`;
};
