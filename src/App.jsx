import { useEffect, useState } from "react";
import Card from "./components/Card";
import CardSkeleton from "./skeletons/Card";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <main className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 container mx-auto p-4 gap-4">
        {Array.from({ length: 6 }).map((_, i) =>
          isLoading ? (
            <CardSkeleton key={i} />
          ) : (
            <Card
              key={i}
              title={"Some site"}
              url={"https://some.site"}
              poster={"http://fakeimg.pl/200x150?font=bebas"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non molestias nesciunt vitae."
              }
            />
          )
        )}
      </main>
    </div>
  );
}
