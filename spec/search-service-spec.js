describe("search service - ", function() {
  it("call ajax underline", function() {
    var spy = spyOn($, "ajax");
    var service = new SearchService("http://whatsover.service");

    service.search("terms");
    expect($.ajax).toHaveBeenCalled();
   
  });
})
