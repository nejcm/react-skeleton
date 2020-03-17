/**
 *  Convert measure value to valid css
 * @param {String|Number} value Measure value
 * @returns {String} Css value
 */
export const measure2Css = (value) => {
  return value ? (typeof value === 'string' ? value : `${value}px`) : undefined;
};
