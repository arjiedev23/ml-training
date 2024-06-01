/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function ConvertEntities(str) {
  let res = "";
  for (var i = 0; i < str.length; i++) { 
    for (var entity in entities) {
      if(str[i].indexOf(entity) >= 0) { 
        // console.log("--> " + entity + " " + str[i].indexOf(entity) + " " + str[i]);
        var result = str[i].replaceAll(entity, entities[entity])
        res += result
      } 
    }
  }
  return res;
}

console.log(ConvertEntities(`&<>"'`));