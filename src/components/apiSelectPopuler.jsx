import supabase from "./supabase";
export async function apiSelectPopuler(relatedTo) {
  const { data, error } = await supabase
    .from(`${relatedTo}`)
    .select("title, price, photos")
    .eq("populer", true);

  if (error) {
    console.log("error", error);
  } else {
    return data;
  }
}
