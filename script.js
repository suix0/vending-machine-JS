const snackImage = document.createElement('img');
snackImage.style.width = '30%';
snackImage.style.height = '50%';
snackImage.className = 'snackImage';

function displaySnacks(snack, parent) {
  parent.appendChild(snackImage);
  if (snack === 'A1') {
    snackImage.src = "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw4984aa7e/products/L6251102/large/L6251102.JPG";
  } else if (snack === 'A2') {
    snackImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XOo2z-WV43dpzOec0JF14wHaHN%26pid%3DApi&f=1&ipt=2fd3415451de592eb49181bddfd075a1d8c48a2137bbeb3affde77087a7caac8&ipo=images";
  } else if (snack === 'A3') {
    snackImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F7332ac98-21a9-4ecc-92ed-95fdb4522620.1cdcee0cd557a7f56116379a11de0b1e.jpeg&f=1&nofb=1&ipt=6a186dc7464662bd6b0b5b05b40ff8450d778dd9a12d79daca646988ad8ad1b2&ipo=images";
  } else if (snack === 'B1') {
    snackImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LhK0Oi5BcOWvWBad8do09QHaHa%26pid%3DApi&f=1&ipt=3b5a98a96db3bb589238485109b5316c6cf0c6fa0b6a1be17d1af5ec7eeb0674&ipo=images";
  } else if (snack === 'B2') {
    snackImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-4ySD5f3e2rIs2DNJ1vUaQHaHa%26pid%3DApi&f=1&ipt=c3956294864e328d3fdc3db2e187129907c570a5fc5ee20dff9fb6836cf17477&ipo=images';
  } else if (snack === 'B3') {
    snackImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kot6H1s-3DTmtE1TomnQswHaHa%26pid%3DApi&f=1&ipt=572942d2966e2f402309099f8770aaa2716b790692c0ace878cc354d69d0e446&ipo=images';
  } else if (snack === 'C1') {
    snackImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FDOBrj-EqHvMwk8clQY1VgHaHa%26pid%3DApi&f=1&ipt=9e2270456e82c3c0cc3c7e9e47d46d018a127a646a36726d0607bb7633fb2f38&ipo=images";
  } else if (snack === 'C2') {
    snackImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sx2QFwE4v0hZAyr6n5bNkwHaHa%26pid%3DApi&f=1&ipt=39655dcedf944c1111842cfba07173ee20fd4eed33bf946908c544d495b7b301&ipo=images';
  } else if (snack === 'C3') {
    snackImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7mkIAB8HGA2M-OVSC-fLbAHaHa%26pid%3DApi&f=1&ipt=ca42c3190ddd7e5cb2fe1f0885c5ba6373840d71cb8610f394f38c06cb905602&ipo=images';
  }
}

const buttons = document.getElementsByTagName('button');
const output = document.querySelector('.output');

[...buttons].forEach(button => {
  button.addEventListener('click', () => {
    displaySnacks(button.textContent, output);
  })
})
