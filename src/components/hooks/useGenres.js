//it will take array and return a string

const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const genreIds = selectedGenres
    .map((item) => item.id)
    .reduce((acc, curr) => acc + "," + curr);

  return genreIds;
};

export default useGenres;
