import categories from "@/libs/data/categories.json";
import recipes from "@/libs/data/recipes.json";
import Image from "next/image";
import Link from "next/link";

export default function LatestRecipes() {
  const latestRecipes = recipes
    ?.sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4)
    ?.map((recipe) => ({
      ...recipe,
      categoryName: categories?.find(
        (category) => category.id === recipe?.category_id
      )?.name,
    }));

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes?.map((recipe, index) => (
          <Link href={`/${recipe?.categoryName}/${recipe?.title}`} key={index}>
            <Image
              width={600}
              height={400}
              src={`/assets/thumbs/${recipe?.thumbnail}`}
              alt={recipe?.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{recipe?.title}</h3>
            <p className="text-gray-600">Dessert</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// git remote add origin https://github.com/Learn-with-Sumit/batch-2-assignment-6-lws-kitchen-md-rejoyan-islam.git
// git branch -M main
// git push -u origin main
