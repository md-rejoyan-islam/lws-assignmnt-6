import DeliciousnessInbox from "@/components/home/deliciousness-inbox";
import HandPickedCollections from "@/components/home/hand-picked-collections";
import HeroBanner from "@/components/home/hero-banner";
import LatestRecipes from "@/components/home/latest-recipes";
import PopularCategories from "@/components/home/popular-categories";
import SuperDelicious from "@/components/home/super-delicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <HeroBanner />
      <SuperDelicious />
      <PopularCategories />
      <DeliciousnessInbox />
      <HandPickedCollections />
      <LatestRecipes />
    </main>
  );
}
