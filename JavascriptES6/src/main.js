const minhaPromise = (dados) => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK ' + dados) }, 1);
});

// Sempre que uma função vira uma async function ela se tornar uma promise
async function executaPromise() {
    const response = await minhaPromise(1);
    const response2 = await minhaPromise(2);
    const response3 = await minhaPromise(3);
    const response4 = await minhaPromise(4);
    // A segunda linha que contém o await só será executada após a primeira linha que possuir o await for executada
    // e assim sucessivamente
    console.log(response);
    console.log(response2);
    console.log(response3);
    console.log(response4);

}

executaPromise();