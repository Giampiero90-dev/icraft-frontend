export function selectCreations(reduxStore) {
  return reduxStore.creations.allCreations;
}

export const selectSortedCreations = (sortingMethod) => {
  return (reduxStore) => {
    const creations = [...reduxStore.creations.allCreations];
    return creations.sort((creationA, creationB) => {
      if (sortingMethod === "recent") {
        return creationA.createdAt - creationB.createdAt;
      } else if (sortingMethod === "difficult") {
        return creationB.difficulty - creationA.difficulty;
      } else if (sortingMethod === "easy") {
        return creationA.difficulty - creationB.difficulty;
      } else if (sortingMethod === "AZ") {
        return creationA.title.localeCompare(creationB.title);
      } else if (sortingMethod === "ZA") {
        return creationB.title.localeCompare(creationA.title);
      }
    });
  };
};
