describe('search logic - ', function() {
  var formView;
  var searchResultView;
  var SearchService;

  beforeEach(function() {
    formView = jasmine.createSpyObj('SearchLocationView', ['getLocation']);
    searchResultView = jasmine.createSpyObj('SearchResultView', ['render', 'renderError']);
    searchService = jasmine.createSpyObj('SearchService', ['search']);
  });

  it('do search logic', function() {
    var logic = new SearchLocationLogic(formView, searchResultView, searchService);
    logic.updateSearchResults();

    expect(formView.getLocation).toHaveBeenCalled();
  });

  it('search for something', function() {
    formView = jasmine.createSpy('SearchLocationView');
    formView.getLocation = jasmine.createSpy('getLocation').and.callFake(function() {
      return "Melbourne";
    });
    var logic = new SearchLocationLogic(formView, searchResultView, searchService);
    logic.updateSearchResults();

    expect(searchService.search).toHaveBeenCalled();
    expect(searchService.search.calls.mostRecent().args[0]).toEqual("Melbourne");
    expect(searchService.search.calls.mostRecent().args[1]).toEqual(searchResultView.render);
    expect(searchService.search.calls.mostRecent().args[2]).toEqual(searchResultView.renderError);
  });
  
})
