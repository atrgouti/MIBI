import supabase from "./supabase";

export async function apiMibiProducts(
  currentCategory,
  setIsLoading,
  colorArray = ["all"]
) {
  try {
    setIsLoading(true);
    let query = supabase.from(`${currentCategory}`).select("*");

    if (colorArray.at(0) !== "all") {
      query.in("color", colorArray);
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
