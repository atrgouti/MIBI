import supabase from "./supabase";
export async function apiSelectProduct(id, category) {
  let { data, error } = await supabase
    .from(`${category}`)
    .select("*")
    .eq("id", id);
  if (error) {
    console.log("error", error);
  } else {
    return data;
  }
}
