import supabase from "./supabase";

export async function apiMibiProducts(
  currentCategory,
  setIsLoading,
  colorArray = ["all"],
  categoryArray = ["all"]
) {
  try {
    setIsLoading(true);
    let query = supabase.from(`${currentCategory}`).select("*");

    if (colorArray.at(0) !== "all" && colorArray.length > 0) {
      query.in("color", colorArray);
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
