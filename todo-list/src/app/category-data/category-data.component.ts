import { Component } from '@angular/core';

interface Card {
  image: string;
  link:string;
  price: number;
  title: string;
  description: string;
  dressingOptions: string[];
  proteinPrice: number;
  elements?: string[];
  drizzleOptions?: string[];
}

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrls: ['./category-data.component.scss']
})
export class CategoryDataComponent {
  cards: Card[] = [
    {
      image: 'https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg',
      price: 9,
      title: 'Dairy & Breakfast',
      description: 'Nutritious dairy products and breakfast essentials. From creamy yogurts to farm-fresh eggs, start your day with wholesome goodness. Rise and shine with us',
      dressingOptions: [  "Milk (whole milk, skim milk, low-fat milk)",  "Yogurt (plain, flavored, Greek yogurt)",  "Cheese (cheddar, mozzarella, Swiss, feta, etc.)",  "Butter (salted, unsalted)",  "Eggs",  "Cream (heavy cream, whipping cream)",  "Margarine",  "Breakfast cereals (corn flakes, wheat flakes, muesli, granola, etc.)",  "Oatmeal",  "Bread (white bread, whole wheat bread, multigrain bread)",  "Bagels",  "Croissants",  "English muffins",  "Pancake mix",  "Maple syrup",  "Honey",  "Jam and preserves",  "Peanut butter",  "Fruit spreads",  "Breakfast bars",  "Fresh fruit juices",  "Flavored milk (chocolate milk, strawberry milk)",  "Coffee creamer",  "Non-dairy alternatives (soy milk, almond milk, oat milk, etc.)",  "Breakfast drinks and shakes"],
      proteinPrice: 2,
      link:"./dairy-breakfast"
    },
  ];
}
