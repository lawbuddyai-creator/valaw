function showToast(msg){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 900);
}

function copyFromId(id){
  const el = document.getElementById(id);
  if(!el) return;
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(()=>showToast("Copied!"));
}