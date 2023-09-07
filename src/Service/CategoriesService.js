import { config } from "../config";

class CategoriesService {
    constructor() {}

    categories = "categories.php";
    baseUrl = config.baseUrl;

    async getAllCategories() {
        const res = await fetch(`${this.baseUrl}${this.categories}`);
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return await res.json();
    };

}

export default CategoriesService;