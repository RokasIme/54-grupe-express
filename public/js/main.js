console.log("Client JS logic....");

// const formDOM = document.querySelector("form");
const formDOM = document.forms[0];

if (formDOM) {
  const textareaDOM = formDOM.querySelector("textarea");
  const btnDOM = formDOM.querySelector("button");

  formDOM.addEventListener("submit", async (event) => {
    event.preventDefault(); //neleidžia naršyklei nueiti į /text. palieka kaip yra

    const data = {
      text: textareaDOM.value,
    };
    // const jsonData = JSON.stringify(data); //paverčia į stringą

    const result = await fetch("/api/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //''Content-Type" reikia būtinai rašyti su kabutėmis nes du žodžiai ir minusas - būtų kaip matematinis operatorius
      },
      body: JSON.stringify(data),
    }); //fetch siunčia užklausą, kreipiasi į adresą kaip GET, POST
    const resultData = await result.json();

    // .then((data) => data.json()) //duomenis pavečiame į JSON
    //   .then((data) => console.log(data));

    console.log(resultData);
  });
}
