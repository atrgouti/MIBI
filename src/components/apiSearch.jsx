import supabase from "./supabase";
export async function apiSearch(input) {
  const { data, error } = await supabase
    .from(`men`)
    .select("id, title, price, photos")
    .ilike("title", `%${input}%`); // Using ilike for a case-insensitive partial match

  if (error) {
    console.log("error", error);
  } else {
    return data;
  }
}
