import Link from "next/link";

export default function MealDetails({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>
        You're try to access{" "}
        <span style={{ color: "red" }}>{params.mealSlug}</span> which is not yet
        active on this page click <Link href="/meals">here</Link> To navigate
        back to home
      </p>
    </>
  );
}
