/**
 * Created by thram on 18/12/14.
 */
window.$ = function (selector) {
  var query = document.querySelectorAll(selector);
  return query.length === 1 ? query[0] : query;
};
window.getBounds = function (selector) {
  return $(selector).getBoundingClientRect();
};
NodeList.prototype.forEach = Array.prototype.forEach;

