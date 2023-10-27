(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const d = document.querySelectorAll(".year"),
  c = document.querySelector(".hammberger"),
  s = document.querySelector("#mobileNavMenu");
function a() {
  c.children[0].classList.contains("bi-list")
    ? (c.children[0].classList.replace("bi-list", "bi-x-lg"),
      s.classList.remove("hidden"),
      s.classList.add(
        "absolute",
        "top-16",
        "bg-slate-800",
        "h-screen",
        "w-full",
        "m-0",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "text-white"
      ))
    : (s.classList.add("hidden"),
      c.children[0].classList.replace("bi-x-lg", "bi-list"));
}
c.addEventListener("click", (r) => {
  r.preventDefault(), u(), a();
});
function u() {
  const r = s.children;
  for (let o = 0; o < r.length; o++)
    r[o].children[0].addEventListener("click", a);
}
const f = new Date();
d.forEach((r) => {
  r.textContent = f.getFullYear() + ".";
});
const m = document.querySelectorAll("section"),
  h = document.querySelectorAll("nav ol li a"),
  p = document.querySelector("nav");
window.onscroll = () => {
  m.forEach((r) => {
    let o = p.offsetHeight,
      n = window.scrollY,
      i = r.offsetTop,
      e = r.offsetHeight,
      t = r.getAttribute("id");
    n >= i - o &&
      n < i - o + e &&
      h.forEach((l) => {
        l.classList.remove("active"),
          document
            .querySelector(`nav ol li a[href*= "#${t}"]`)
            .classList.add("active");
      });
  });
};
