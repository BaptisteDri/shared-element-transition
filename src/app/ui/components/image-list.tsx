import Image from "next/image";

type Movie = {
  poster: string;
  title: string;
};

const IMAGES_SRC: Movie[] = [
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/rL1YQLqUtHK3HdQyenHvuOCuWzO.jpg",
    title: "Les Évadés",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/wnDNKCeBQzioXYQrXcSyrmRHVxf.jpg",
    title: "Le Parrain",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/chMfGLOf5EMz0o10Duukmb9oj0P.jpg",
    title: "Le Parrain 2",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/vHgf8NE7tXV4DJPEnqVLZDof8fT.jpg",
    title: "La Liste De Schindler",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/bPImGSvZtG2tvsJ9bVLrIECRDnB.jpg",
    title: "12 Hommes En Colère",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/12TAqK0AUgdcYE9ZYZ9r7ASbH5Q.jpg",
    title: "Le Voyage De Chihiro",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg",
    title: "Batman: The Dark Knight",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg",
    title: "Parasite",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/mVGSetYx6kmJCf4T8YOYs1z6M00.jpg",
    title: "La Ligne Verte",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg",
    title: "Pulp Fiction",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/A0Th0x8QIzP0njrFAJnYQ5ouIoB.jpg",
    title: "Forrest Gump",
  },
  {
    poster:
      "https://www.themoviedb.org/t/p/w1280/v4c6WMVqUlSJHMyjHNj72iTFGhm.jpg",
    title: "Les Affranchis",
  },
];

export const ImageList = () => {
  return IMAGES_SRC.map((src, i) => (
    <div
      className="relative aspect-[458/688] rounded-md overflow-hidden"
      key={i}
    >
      <Image src={src.poster} alt="movie poster" fill />
    </div>
  ));
};
