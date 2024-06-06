/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const Entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function ConvertEntity(str : string) : any {
  let res = "";
  for (var i = 0; i < str.length; i++) { 
    for (var entity in Entities) {
      if(str[i].indexOf(entity) >= 0) { 
        var result = <any> str[i].replace(entity, Entities[entity])
        res += result
      } 
    }
  }
  return res;
}

console.log(ConvertEntity(`&<>"'`));
