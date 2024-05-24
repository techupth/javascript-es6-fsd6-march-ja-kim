let height = undefined;

function checkNull(height) {
  return height ?? "Height is not defined";
}

let result = checkNull(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
