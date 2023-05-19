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

export type PeopleOptions = {
  managerId?: string | null;
  count?: number;
  startIndex?: number;
};

export type PeopleResults = {
  people: Person[];
  hierarchyLevelSize: number;
};

export const usePagedPeople: (options?: PeopleOptions) => PeopleResults = (
  options?
) => {
  const allPeople = [...peopleWithImages];

  let people = [...allPeople];

  if (options?.managerId !== undefined) {
    people = people.filter((person) => person.managerId === options?.managerId);
  }

  const hierarchyLevelSize = people.length;
  const startIndex = options?.startIndex ?? 0;
  const count = options?.count ? startIndex + options.count : undefined;

  people = people.slice(startIndex, count);
  people = people.map((person, index) => ({
    ...person,
    pictureUrl: peopleImages[index % peopleImages.length],
    manager: allPeople.some((p) => p.managerId === person.id),
  }));
  return {
    people,
    hierarchyLevelSize,
  };
};
