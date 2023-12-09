import supabase from "../components/supabase";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  //   const user = supabase.auth.user();
  //   if (!user) {
  //     navigate("/profile");
  //   }

  return <div>welcome to your profile</div>;
}

export default Profile;
