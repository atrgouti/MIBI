import supabase from "./supabase";

export async function apiMenProducts(currentCategory, setIsLoading) {
  try {
    setIsLoading(true);
    const { data, error } = await supabase
      .from(`${currentCategory}`)
      .select("*");
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
