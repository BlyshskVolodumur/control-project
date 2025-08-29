export function findTheResearchers() {
  const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
  ];
  const listElement = document.querySelector(
    ".main_tenth--section--bottom--left--list"
  );

  const filters = {
    born19: () => scientists.filter((s) => s.born >= 1800 && s.born <= 1900),
    sortName: () =>
      [...scientists].sort((a, b) => a.name.localeCompare(b.name)),
    sortYears: () =>
      [...scientists].sort((a, b) => b.dead - b.born - (a.dead - a.born)),
    latestBorn: () => [scientists.reduce((a, b) => (a.born > b.born ? a : b))],
    einsteinYear: () => {
      const find = scientists.find((s) => s.surname === "Einstein");
      return find ? [{...find, customText: `Рік народження ${find.born}`}] : []
    },
    lastnameC:()=>scientists.filter(s=>s.surname.startsWith("C")),
    removeNameA:()=>scientists.filter(s=>!s.name.startsWith("A")),
    
    sameLetters:()=>scientists.filter(s=>{
      const name = s.name.toLowerCase()
      const surname = s.surname.toLowerCase()
      return [...name].some(ch=>surname.includes(ch))
    })
  };

  function render(data) {
    listElement.innerHTML = data
      .map((s) => {
        if (s.customText) {
          return `<li class="main_tenth--section--bottom--left--list--el">${s.name} ${s.surname} — ${s.customText}</li>`;
        }
        return `<li class="main_tenth--section--bottom--left--list--el">${s.name} ${s.surname} (${s.born}–${s.dead})</li>`;
      })
      .join("");
  }

  document
    .querySelector(".main_tenth--section--bottom--right")
    .addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const action = filters[event.target.dataset.action];
        if (action) render(action());
      }
    });
  render(scientists);
}
