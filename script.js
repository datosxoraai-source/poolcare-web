const IMG = (id, ext = "jpeg", w = 1376, h = 768) =>
  `https://framerusercontent.com/images/${id}.${ext}?width=${w}&height=${h}`;

const work = [
  {
    cat: "Commercial Pool Services", title: "Hotel Pool Recovery",
    after: IMG("yampiNTYsaFrftQJXAyIKVhRNc"), before: IMG("IjEU8nUwiWx3Rv3YfVvVeWyaZpE"),
    text: "Cloudy water, neglected chemistry, algae residue, and deck buildup left this high-traffic hotel pool below guest-ready standards and in need of professional recovery.",
    result: "Crystal-clear water. Balanced chemistry. Cleaner surfaces. Safer guest-ready use.",
    checks: ["Water clarity and chemistry restored", "Pool surfaces and deck buildup cleaned", "Safer, cleaner daily guest use"],
  },
  {
    cat: "Commercial Pool Repairs", title: "Pump Room Rescue",
    after: IMG("1psUAknIGqYWwaVrKP3NNQAFpCU"), before: IMG("h35lZf46VFZVqRr9JmBIMG4q38"),
    text: "Failed circulation and aging filtration were rebuilt after-hours to protect operations and avoid an extended closure.",
    result: "Reliable flow. Quiet equipment. Zero unplanned downtime.",
    checks: ["Primary pump assembly replaced", "Filtration pressure normalized", "Controls tested under full load"],
  },
  {
    cat: "Residential Pool Services", title: "Backyard Water Reset",
    after: IMG("c6vG3BIRaDlu5KCddQOrWrjvpFI"), before: IMG("GqZEYrhEyPTC8rVDK0IVthLGStA"),
    text: "A neglected family pool was deep-cleaned, balanced, and placed on a simple weekly care plan before the season began.",
    result: "Clear water. Clean surfaces. Easy weekly care.",
    checks: ["Leaves and debris fully removed", "Water balance safely restored", "Weekly service plan established"],
  },
  {
    cat: "Residential Pool Repairs", title: "Leak & Equipment Recovery",
    after: IMG("7UJU59MvhKY10AeXKAWgIqS1kYg"), before: IMG("LrqpJEwhIXYALpYNhLTdUqiUU"),
    text: "A persistent leak and weak circulation were diagnosed, repaired, and retested without replacing equipment that still performed.",
    result: "Leak stopped. Flow restored. Energy waste reduced.",
    checks: ["Pressure-side leak sealed", "Pump and filter performance restored", "System retested for efficiency"],
  },
];

const services = [
  {
    img: IMG("KjMFOxvbAYjXX8ALw4bx6BqB68"), title: "Commercial Pool Services",
    text: "Scheduled care for hotels, apartments, fitness clubs, and community pools—kept clear, balanced, and ready for daily use.",
    checks: ["Routine cleaning and chemical balancing", "Health-code monitoring and service logs", "Preventive equipment checks"],
    meta: ["Service coverage", "Flexible weekly plans"],
  },
  {
    img: IMG("QTOXFZRWqs8A0q6Dcfz6soJN8g"), title: "Commercial Pool Repairs",
    text: "Fast diagnostics and durable repairs that reduce downtime across high-use commercial pool systems.",
    checks: ["Pumps, filters, and automation", "Leak detection and plumbing repair", "Priority equipment response"],
    meta: ["Repair response", "Priority scheduling available"],
  },
  {
    img: IMG("29yNBcmVse4DCXbrEEapG4Emstw"), title: "Residential Pool Services",
    text: "Consistent home-pool care that keeps water clear, surfaces protected, and weekends worry-free.",
    checks: ["Weekly cleaning and skimming", "Water testing and balancing", "Seasonal opening and closing"],
    meta: ["Home care", "Plans built for your pool"],
  },
  {
    img: IMG("zRExrcAEcgKTR50TlMNoHCvHQI"), title: "Residential Pool Repairs",
    text: "Clear answers and expert fixes for leaks, noisy pumps, weak circulation, and aging equipment.",
    checks: ["Pump, filter, and heater repair", "Leak detection and plumbing", "Equipment upgrades and replacement"],
    meta: ["Repair process", "Diagnosis before work begins"],
  },
];

const reviews = [
  ["Their weekly service turned our pool from cloudy to crystal clear. They show up on time, leave notes after every visit, and keep everything balanced in the Arizona heat.", "Maya Collins", "Homeowner"],
  ["We needed a reliable pool team for guests checking in every weekend. Pool Care Arizona keeps the water spotless and handles small issues before they become reviews.", "Luis Ramirez", "Vacation Rental Host"],
  ["They diagnosed our pump problem quickly, explained the repair clearly, and had the pool running again the same day. Honest service and no surprise add-ons.", "Priya Shah", "Homeowner"],
  ["Our community pool gets heavy use, and their maintenance schedule has made a visible difference. The deck, filters, and water quality are consistently handled.", "Brandon Miller", "Commercial Property Manager"],
  ["I’m away for months at a time, so the photo updates and clear service summaries give me peace of mind. The pool is always ready when we arrive.", "Elaine Torres", "Seasonal Resident"],
  ["After one green-pool recovery and a few weeks of maintenance, the water has stayed perfect. Friendly team, fast response, and very easy to schedule.", "Kevin Brooks", "Family Pool Owner"],
];
const reviewPhoto = IMG("AVzGNaxQbtEM4mHD7fcxNmZ7lDM", "webp", 1203, 802);

const faqs = [
  ["How often should my pool be professionally serviced?", "Most pools benefit from weekly service, especially during warmer months. We tailor the schedule to your pool’s size, usage, equipment, and local conditions."],
  ["Can you restore cloudy or green pool water?", "Yes. We test the water, treat algae, shock and balance the chemistry, and clean the filter and surfaces until the water is clear again—usually within a few visits."],
  ["What’s included in routine pool maintenance?", "Skimming, brushing, vacuuming, emptying baskets, water testing and chemical balancing, plus a quick check of the pump, filter, and equipment on every visit."],
  ["Do you service residential and commercial pools?", "Yes. We care for backyard pools as well as hotels, apartments, HOAs, fitness clubs, and community pools, with plans built for each type of use."],
  ["How do I know when my pool equipment needs repair?", "Watch for unusual noises, weak circulation, leaks, rising filter pressure, or water that won’t stay clear. We’ll diagnose the issue before any work begins."],
];

const checksHTML = (arr) => `<ul class="checks">${arr.map((c) => `<li>${c}</li>`).join("")}</ul>`;
const estimateBtn = `<a href="#estimate" class="btn btn-accent">Get Free Estimate <span class="arr">&#8599;</span></a>`;

document.querySelector(".work-list").innerHTML = work.map((w, i) => `
  <article class="work-item reveal">
    <div class="ba">
      <img src="${w.after}" alt="${w.cat} after" loading="lazy" />
      <img class="ba-before" src="${w.before}" alt="${w.cat} before" loading="lazy" />
      <span class="ba-tag l">BEFORE</span><span class="ba-tag r">AFTER</span>
      <div class="ba-handle"></div>
      <input type="range" min="0" max="100" value="50" aria-label="Before and after image comparison slider" />
    </div>
    <div class="work-body">
      <span class="work-num">0${i + 1}</span>
      <span class="work-cat">${w.cat}</span>
      <h3 class="work-title">${w.title}</h3>
      <p class="work-text">${w.text}</p>
      <div class="result-label">THE RESULT</div>
      <p class="result-sum">${w.result}</p>
      ${checksHTML(w.checks)}
      ${estimateBtn}
    </div>
  </article>`).join("");

document.querySelector(".services-grid").innerHTML = services.map((s, i) => `
  <article class="svc reveal">
    <div class="svc-media"><img src="${s.img}" alt="${s.title}" loading="lazy" /></div>
    <div class="svc-body">
      <span class="svc-num">[0${i + 1}]</span>
      <h3 class="svc-title">${s.title}</h3>
      <p class="svc-text">${s.text}</p>
      ${checksHTML(s.checks)}
      <div class="svc-meta"><span>${s.meta[0]}</span><span>${s.meta[1]}</span></div>
      ${estimateBtn}
    </div>
  </article>`).join("");

document.querySelector(".reviews").innerHTML = reviews.map(([q, n, r]) => `
  <figure class="review reveal">
    <div class="stars">★★★★★</div>
    <blockquote>“${q}”</blockquote>
    <figcaption class="review-who"><img src="${reviewPhoto}" alt="Review Photo" loading="lazy" /><div><b>${n}</b><span>${r}</span></div></figcaption>
  </figure>`).join("");

document.querySelector(".faq-list").innerHTML = faqs.map(([q, a], i) => `
  <div class="faq-item${i === 0 ? " open" : ""}">
    <button class="faq-q">${q}<span class="faq-ic">+</span></button>
    <div class="faq-a"><p>${a}</p></div>
  </div>`).join("");

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const a = item.querySelector(".faq-a");
  if (item.classList.contains("open")) a.style.maxHeight = a.scrollHeight + "px";
  item.querySelector(".faq-q").addEventListener("click", () => {
    const open = item.classList.toggle("open");
    a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
  });
});

// Before / after sliders
document.querySelectorAll(".ba").forEach((ba) => {
  const range = ba.querySelector("input");
  const before = ba.querySelector(".ba-before");
  const handle = ba.querySelector(".ba-handle");
  const set = (v) => { before.style.clipPath = `inset(0 ${100 - v}% 0 0)`; handle.style.left = v + "%"; };
  range.addEventListener("input", () => set(range.value));
  set(50);
});

// Mobile menu
const burger = document.querySelector(".nav-burger");
const links = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  const open = links.style.display === "flex";
  Object.assign(links.style, open ? { display: "" } : {
    display: "flex", position: "absolute", top: "100%", left: 0, right: 0, flexDirection: "column",
    padding: "20px 24px", background: "#011f2c", gap: "18px", borderBottom: "1px solid rgba(255,255,255,.1)",
  });
});
links.addEventListener("click", (e) => { if (e.target.tagName === "A" && innerWidth <= 1024) links.style.display = ""; });

// Scroll reveal
document.querySelectorAll(".sec-head, .stat, .mv, .about-media, .area, .faq-item, .contact-form").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
