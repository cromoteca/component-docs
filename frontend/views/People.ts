import people from "./people.json";
import peopleImages from "./peopleImages.json";

const peopleWithImages = people.map((person, index) => ({
  ...person,
  pictureUrl: peopleImages[index % peopleImages.length],
}));

export const usePeople = () => {
  return peopleWithImages;
};

export type Person = (typeof peopleWithImages)[number];
