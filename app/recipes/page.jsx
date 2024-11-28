"use client";
import recipes from "@/libs/data/recipes.json";
import Image from "next/image";
import Link from "next/link";

export default function Recipe() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {"All Recipes"}
            <span className="text-gray-500 text-2xl font-normal">
              ({recipes?.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes?.map((recipe, index) => (
          <Link
            href={`/recipes/${recipe.title}`}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={index}
          >
            <Image
              src={`/assets/thumbs/${recipe?.thumbnail}`}
              alt={recipe.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{recipe?.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
