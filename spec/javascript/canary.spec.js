import td from "testdouble/dist/testdouble";

describe("JavaScript testing", function() {
  it("works as expected", function() {
    var mockFunction = td.function();
    
    td.when(mockFunction(42)).thenReturn("Function Called!");
    
    expect(mockFunction(42)).toBe("Function Called!");
  });
});