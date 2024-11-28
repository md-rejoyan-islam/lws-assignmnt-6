import Image from "next/image";
import { RatingIcon } from "../svg";

import recipes from "@/libs/data/recipes.json";

export default function SuperDelicious() {
  const superRecipes = recipes
    ?.sort((a, b) => b.rating?.average_rating - a.rating?.average_rating)
    .slice(0, 3);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {superRecipes?.map((recipe, index) => (
          <div key={index}>
            <Image
              src={`/assets/thumbs/${recipe?.thumbnail}`}
              alt={recipe?.title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {Array.from({
                length: Math.floor(recipe?.average_rating || 5),
              }).map((_, i) => (
                <RatingIcon key={i} />
              ))}
            </div>
            <p className="text-gray-600">{recipe?.cooking_time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
