"use client";
import { SaveButton, ShareIcon } from "@/components/svg";
import categories from "@/libs/data/categories.json";
import recipes from "@/libs/data/recipes.json";
import { formatDate } from "@/libs/helper/helper";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function RecipeDetailsPgae() {
  const { category, recipe } = useParams();

  const selectedCategory = categories.find((item) => item?.name === category);

  const selectedRecipe = recipes.find(
    (item) =>
      item?.title === decodeURIComponent(recipe) &&
      item?.category_id === selectedCategory?.id
  );

  const relatedRecipes = recipes
    .filter((item) => item?.category_id === selectedCategory?.id)
    .slice(0, 4);

  return (
    <main className="container mx-auto px-4 mt-20 py-8">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {selectedRecipe?.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            width={32}
            height={32}
            src="/assets/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">{selectedRecipe?.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{selectedRecipe?.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            {formatDate(selectedRecipe?.published_date)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <ShareIcon />
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <SaveButton />
              Save
            </button>
          </div>
        </div>
        <Image
          width={600}
          height={400}
          src={`/assets/thumbs/${selectedRecipe?.thumbnail}`}
          alt={selectedRecipe?.title}
          className="w-full h-auto mb-8 rounded-lg"
        />
        <p className="text-gray-600 mb-8">{selectedRecipe?.description}</p>
        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>
        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          &quot;One cannot think well, love well, sleep well, if one has not
          dined well.&quot;
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One&apos;s Own
        </p>
        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>
        <Image
          width={600}
          height={400}
          src="/assets/thumbs/thumb-15.jpg"
          alt="Cooking in kitchen"
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
        />
        <p className="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
      </article>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedRecipes.map((recipe, index) => (
            <Link
              href={`/${selectedCategory?.name}/${recipe?.title}`}
              key={index}
            >
              <Image
                src={`/assets/thumbs/${recipe?.thumbnail}`}
                width={600}
                height={400}
                alt={recipe?.title}
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{recipe?.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
