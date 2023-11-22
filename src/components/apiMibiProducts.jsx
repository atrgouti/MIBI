import supabase from "./supabase";

export async function apiMibiProducts(
  currentCategory,
  setIsLoading,
  colorArray = ["all"],
  categoryArray = ["all"],
  instock,
  outOfStock
) {
  try {
    setIsLoading(true);
    let query = supabase.from(`${currentCategory}`).select("*");

    if (colorArray.at(0) !== "all" && colorArray.length > 0) {
      query.in("color", colorArray);
    }
    if (instock === true && outOfStock === false) {
      query.eq("avaliable", "true");
    }

    if (outOfStock === true && instock === false) {
      query.eq("avaliable", "false");
    }
    if (categoryArray.at(0) !== "all" && categoryArray.length > 0) {
      query.in("category", categoryArray);
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
      throw new Error("error");
    }
    setIsLoading(false);
    return data;
  } catch (error) {
    setIsLoading(false);
    throw error;
  }
}
