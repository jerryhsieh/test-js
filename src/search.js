$(function() {
  var searchResult = new SearchResultView("$searchResults ul");
  var searchLocation = new SearchLocationView();
  var searchService = new SearchService("http://localhost:9292/locations/");
  var searchLogic = new SearchLocationLogic(searchLocation, searchResult, searchService);

  searchLogic.launch();

  var liked = new LikeView("#liked ul");
  $(document).on('like', function(e, log) {
    liked.render(loc);
  })
})
