//TODO: Finish MixList Base resolvers

// ------ Depedencies
//Import Depenencies

const { ApolloError } = require('apollo-server-errors')


// ------ MixList Resolvers
// export object
module.exports = {
  Query: {
    getAllMixes: () =>{
      return [{
        name: "Trance Mix 1",
        authorDisplay: "Sameghosts",
        tagline: "Hot Trance Bangers for the summer"
      }, {
        name: "Illbient 2021",
        authorDisplay: "Differentghosts",
        tagline: "This is a sample headline for illbient mix"
      }]
    }
  },
  Mutation: {
    createMixList: async (
      _, 
      { newMixList },
      { MixList },
    ) => {
      let result = await MixList.create(newMixList);
      return result;
    }
  }
}
// QUERY Resolvers
// MUTATION Resolvers