export const fetchAllPokemon = function() {
  return $.ajax({
    method: "GET",
    url: 'http://localhost:3000/api/pokemon'
  });
};

// export const fetchAPokemon = function(id) {
//   return $.ajax({
//     method: "GET",
//     url: `http://localhost:3000/api/pokemon/`
//   });
// };
