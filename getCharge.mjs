const chargeId = '2XEBX66F';
const url = `https://api.commerce.coinbase.com/charges/${chargeId}`;

const payload = {
  method: 'GET',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CC-Api-Key': process.env.COMMERCE_API_KEY,
  },
};

async function createCharge() {
  try {
    fetch(url, payload)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}

createCharge();
