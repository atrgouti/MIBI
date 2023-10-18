import supabase from "./supabase";
export async function mibiProducts() {
  const { data, error } = await supabase.from("mibiProducts").select("*");
  if (error) {
    console.error(error);
    throw new Error("error");
  }

  return data;
}
