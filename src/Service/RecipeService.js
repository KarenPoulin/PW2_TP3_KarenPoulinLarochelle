import { config } from "../config";

class RecipeService {
    constructor() {}

    lookupMeal = "lookup.php?i=";
    baseUrl = config.baseUrl;


    async getMeal(id) {
        const res = await fetch(`${this.baseUrl}${this.lookupMeal}${id}`);
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return await res.json();
    };

}

export default RecipeService;