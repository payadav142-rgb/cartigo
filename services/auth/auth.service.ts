import { supabase } from "@/lib/supabase/client";

export async function signUp(
  name: string,
  email: string,
  password: string
) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    console.log("========== SIGN UP ==========");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("=============================");

    return { data, error };
  } catch (err) {
    console.error("Unexpected Signup Error:", err);
    throw err;
  }
}

export async function signIn(
  email: string,
  password: string
) {
  try {
    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    console.log("========== SIGN IN ==========");
    console.log("Email:", email);
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("=============================");

    return { data, error };
  } catch (err) {
    console.error("Unexpected Login Error:", err);
    throw err;
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  console.log("========== SIGN OUT ==========");
  console.log("Error:", error);
  console.log("==============================");

  return { error };
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  console.log("========== CURRENT USER ==========");
  console.log("Data:", data);
  console.log("Error:", error);
  console.log("=================================");

  return { data, error };
}