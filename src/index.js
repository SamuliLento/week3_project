if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const dataTable = document.getElementById("data");

  async function getData() {
    const url =
      "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

    const dataPromise = await fetch(url);
    const dataJSON = await dataPromise.json();
    const municipalityArray = Object.values(
      dataJSON.dataset.dimension.Alue.category.label
    );
    const populationArray = Object.values(dataJSON.dataset.value);

    for (var i = 0; i < 310; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td1.innerText = municipalityArray[i];
      td2.innerText = populationArray[i];

      tr.appendChild(td1);
      tr.appendChild(td2);

      dataTable.appendChild(tr);
    }
  }

  getData();
}
