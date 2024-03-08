import { ImageList } from "@/app/ui/components/image-list";

const Home = () => {
  return (
    <main className="max-w-xl grid grid-cols-3 gap-4 mx-auto p-4">
      <ImageList />
    </main>
  );
};

export default Home;
