import supabase from "./supabase";

export async function apiMibiProducts(
  currentCategory,
  setIsLoading,
  colorArray = ["all"],
  categoryArray = ["all"],
  instock = "default",
  outOfStock = "default",
  orderBy = "default",
  pagination = "notAvaliable"
) {
  try {
    setIsLoading(true);
    let pageSize = 3;
    const offSet = (pagination - 1) * pageSize;

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

    if (orderBy === "price_ASC") {
      query.order("price", { ascending: true });
    }
    if (orderBy === "price_DESC") {
      query.order("price", { ascending: false });
    }
    if (orderBy === "title_ASC") {
      query.order("title", { ascending: true });
    }
    if (orderBy === "title_DESK") {
      query.order("title", { ascending: false });
    }
    if (orderBy === "date_ASC") {
      query.order("created_at", { ascending: true });
    }
    if (orderBy === "date_DESC") {
      query.order("created_at", { ascending: false });
    }
    if (pagination !== "notAvaliable") {
      query.range(offSet, offSet + (pageSize - 1));
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
