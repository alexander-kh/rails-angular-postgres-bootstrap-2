import 'polyfills';

import { Component, NgModule    } from "@angular/core";
import { BrowserModule          } from "@angular/platform-browser";
import { FormsModule            } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule             } from "@angular/http";
import { RouterModule           } from "@angular/router";

import { CustomerSearchComponent  } from "CustomerSearchComponent";
import { CustomerDetailsComponent } from "CustomerDetailsComponent";

var AppComponent = Component({
  selector: "shine-customers-app",
  template: "<router-outlet></router-outlet>"
}).Class({
  constructor: [
    function() {}
  ]
});

var RESULTS = [
  {
    first_name: "Pat",
    last_name: "Smith",
    username: "psmith",
    email: "pat.smith@example.com",
    created_at: "2016-02-05",
  },
  {
    first_name: "Patrick",
    last_name: "Jones",
    username: "pjpj",
    email: "jones.p@business.net",
    created_at: "2014-03-05",
  },
  {
    first_name: "Patricia",
    last_name: "Benjamin",
    username: "pattyb",
    email: "benjie@aol.info",
    created_at: "2016-01-02",
  },
  {
    first_name: "Patty",
    last_name: "Patrickson",
    username: "ppat",
    email: "pppp@freemail.computer",
    created_at: "2016-02-05",
  },
  {
    first_name: "Jane",
    last_name: "Patrick",
    username: "janesays",
    email: "janep@company.net",
    created_at: "2013-01-05",
  },
];

var routing = RouterModule.forRoot(
  [
    {
      path: "",
      component: CustomerSearchComponent
    },
    {
      path: ":id",
      component: CustomerDetailsComponent
    }
  ]
);

var CustomerAppModule = NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    CustomerSearchComponent,
    CustomerDetailsComponent,
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
}).Class({
  constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(CustomerAppModule);