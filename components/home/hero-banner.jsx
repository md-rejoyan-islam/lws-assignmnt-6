import Image from "next/image";

import categories from "@/libs/data/categories.json";
import recipes from "@/libs/data/recipes.json";
import Link from "next/link";

export default function HeroBanner() {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  const recipeCategry = categories.find(
    (category) => category.id === randomRecipe?.category_id
  );

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${randomRecipe?.thumbnail}`}
            alt={randomRecipe?.title}
            width={600}
            height={400}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{randomRecipe?.title}</h1>
          <p className="text-gray-600 mb-4">{randomRecipe?.description}</p>
          <Link
            href={`/${recipeCategry?.name}/${randomRecipe?.title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
