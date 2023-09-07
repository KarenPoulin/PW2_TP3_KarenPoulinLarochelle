import { config } from "../config";

class CategoryService {
    constructor() {}

    filterCategory = "filter.php?c=";
    baseUrl = config.baseUrl;


    async getCategory(category) {
        const res = await fetch(`${this.baseUrl}${this.filterCategory}${category}`);
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return await res.json();
    };


}

export default CategoryService;