/**
 У вас есть информация о различных рецептах. Вам дают рецепты массива струн и ингредиенты двухмерного массива. Рецепт ITH имеет рецепты имени [i], и вы можете создать его, если у вас есть все необходимые ингредиенты от ингредиентов [i]. Рецепт также может быть ингредиентом для других рецептов, то есть ингредиенты [i] могут содержать строку, которая находится в рецептах. Вам также дают поставки в струнном массиве, содержащие все ингредиенты, которые у вас есть, и у вас есть бесконечная поставка всех из них. Верните список всех рецептов, которые вы можете создать. Вы можете вернуть ответ в любом порядке. Обратите внимание, что два рецепта могут содержать друг друга в их ингредиентах.
 */

function findAllRecipes(
    recipes: string[],
    ingredients: string[][],
    supplies: string[],
): string[] {
    const availableRecipes: string[] = [];
    const graph: Map<string, string[]> = new Map();
    const inDegree: Map<string, number> = new Map();
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const deps = ingredients[i];
        graph.set(recipe, deps);
        inDegree.set(recipe, deps.length);
    }
    const queue: string[] = [...supplies];
    while (queue.length > 0) {
        const current = queue.shift()!;
        if (graph.has(current)) {
            availableRecipes.push(current);
        }
        for (const [recipe, deps] of graph.entries()) {
            if (deps.includes(current)) {
                inDegree.set(recipe, (inDegree.get(recipe) || 0) - 1);
                if (inDegree.get(recipe) === 0) {
                    queue.push(recipe);
                }
            }
        }
    }
    return availableRecipes;
}
