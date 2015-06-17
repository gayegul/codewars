var paginationText = function(pageNumber, pageSize, totalProducts) {
  var totalNumberOfPages = Math.round(totalProducts / pageSize);
  var lastItem = pageNumber * pageSize > totalProducts ? totalProducts : pageNumber * pageSize;
  var firstItem = 1 + pageSize * (pageNumber - 1);

  return 'Showing ' + firstItem + ' to ' + lastItem + ' of ' + totalProducts + ' Products.';
};
