import "./SpecHelper";
import { CustomerDetailsComponent } from "CustomerDetailsComponent";
import td from "testdouble/dist/testdouble";

var component = null;

describe("CustomerDetailsComponent", function() {
  describe("initial state", function() {
    beforeEach(function() {
      component = new CustomerDetailsComponent();
    });
    it("sets customer to null", function() {
      expect(component.customer).toBe(null);
    });
  });
  
  describe("ngOnInit", function() {
    
    var customer = {
      id: 1,
      created_at: (new Date()).toString(),
      first_name: "Pat",
      last_name: "Jones",
      username: "pj",
      email: "pjones@somewhere.net"
    }
    
    var createMockHttp = function(customer) {
      var response = td.object(["json"]);
      td.when(response.json()).thenReturn({ customer: customer });
      
      var observable = td.object(["subscribe"]);
      td.when(observable.subscribe(
        td.callback(response),
        td.matchers.isA(Function))).thenReturn();
      
      var mockHttp = td.object(["get"]);
      
      td.when(
        mockHttp.get("/customers/" + customer.id + ".json")
      ).thenReturn(observable);
      
      return mockHttp;
    }
    
    var createMockRoute = function(id) {
      var observable = td.object(["subscribe"]);
      var routeParams = { "id": id };
      var mockActivatedRoute = { "params": observable };
      
      td.when(observable.subscribe(
        td.callback(routeParams),
        td.matchers.isA(Function))).thenReturn();
      
      return mockActivatedRoute;
    }
    
    beforeEach(function() {
      var route = createMockRoute(customer.id);
      var http = createMockHttp(customer);
      
      component = new CustomerDetailsComponent(route, http);
    });
    it("fetches the customer from the back-end", function() {
      component.ngOnInit();
      expect(component.customer).toBe(customer);
    });
  });
});