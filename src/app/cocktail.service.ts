import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
    getVerre=[
    {name: "mojitos", prices: 20, img : "https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg" },
    {name: "bloodyMary", prices: 25, img : "http://adminet.gl/wp-content/uploads/2011/01/bloody-mary.jpg" },
    {name: "whiskySour", prices: 30, img : "http://www.comptoir-irlandais.com/img/cms/blog/2017/04-avril/Cocktails%20Whisky%20/Whisky-sour.jpg" }
  ]
    
  
  public cocktail(){
  }

  constructor() { }

getCocktails(){
  return this.getVerre
}
}