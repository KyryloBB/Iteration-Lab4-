'use strict';

const ages = (persons) => {
  const result = {}
  for(const person in persons){
    const age = persons[person].died - persons[person].born
    result[person] = age 
  }
  return result
};

module.exports = { ages };
