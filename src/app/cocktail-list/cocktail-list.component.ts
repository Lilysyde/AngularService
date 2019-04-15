import { Component, OnInit, Injectable } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],


})
export class CocktailListComponent implements OnInit {
    
   
   public cocktails = []

  constructor(private Chemin : CocktailService) { 

  }
  
  

  ngOnInit() {
  this.Chemin.getCocktails().subscribe (verre => (this.cocktails = verre))

  }

}
