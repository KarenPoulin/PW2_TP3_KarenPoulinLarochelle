import { config } from "../config";

class MealService {
    constructor() {}

    categories = "categories.php";
    filterCategory = "filter.php?c=";
    lookupMeal = "lookup.php?i=";
    baseUrl = config.baseUrl;

    async getAllCategories() {
        const res = await fetch(`${this.baseUrl}${this.categories}`);
        if (!res.ok) throw new Error();
        return await res.json();
    };

    async getCategory(category) {
        const res = await fetch(`${this.baseUrl}${this.filterCategory}${category}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }

    async getMeal(id) {
        const res = await fetch(`${this.baseUrl}${this.lookupMeal}${id}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }

}


// all categories
// www.themealdb.com/api/json/v1/1/categories.php

// each category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

// meal id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

export default MealService;