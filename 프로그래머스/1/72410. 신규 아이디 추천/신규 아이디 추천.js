function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9._-]/g, "");
  new_id = new_id.replace(/\.{2,}/g, ".");
  new_id = new_id.replace(/^\./, "").replace(/\.$/, "");
  if (new_id === "") {
    return "aaa"
  }
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, "");
  }
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }
  return new_id;
}