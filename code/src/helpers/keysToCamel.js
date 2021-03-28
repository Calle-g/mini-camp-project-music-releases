const toCamel = (s) => {
  return s.replace(/([_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('_', '');
  });
}

function isArray(a) {
  return Array.isArray(a);
}

function isObject(o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
}

export function keysToCamel(o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
}
