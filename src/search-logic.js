function SearchLocationLogic(formView, resultView, service) {
  this.launch = function() {
    formView.addSearchHandler(this.updateSearchResults);
  };

  this.updateSearchResults = function() {
    var location = formView.getLocation();
    if(location) {
      service.search(location, resultView.render, resultView.renderError);
    }
  }
}
