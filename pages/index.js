import RestaurantList from "@/components/RestaurantList";

export default function Home({ restaurants }) {
  return (
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://restaurant-api.dicoding.dev/list");
  const responseJson = await response.json();
  const { restaurants } = responseJson;
  return {
    props: {
      restaurants,
    },
  };
}
