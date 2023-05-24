import { style } from "@angular/animations";
import { Component } from "@angular/core";



@Component({
    selector: 'app-property-card',
    //template: '<h1>Hi I am a card!</h1>'
    templateUrl: 'property-card.component.html',
    //style
    styleUrls:['property-card.component.css']

  }
)
export class PropertyCardComponent{

  Property : any = {
    "Id" : 1,
    "Type" : "House",
    "Price" : 12000,
    "Name" : "Sushi House"
  }

}
