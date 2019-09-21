export const randHex = (len) => {
  const maxlen = 8;
  const min = 16 ** (Math.min(len, maxlen) - 1);
  const max = (16 ** Math.min(len, maxlen)) - 1;
  const n = Math.floor(Math.random() * (max - min + 1)) + min;
  let r = n.toString(16);
  while (r.length < len) {
    r += randHex(len - maxlen);
  }
  return r;
};

export const generateKeyForReact = (str) => {
  const newStr = str.replace(/[^A-Z0-9]+/ig, '_');
  return newStr;
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / (k ** i)).toFixed(dm))} ${sizes[i]}`;
};
