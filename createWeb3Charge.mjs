const url = process.env.COMMERCE_API_URL;

const requestBody = {
  local_price: {
    amount: '1.00',
    currency: 'USD',
  },
  metadata: {
    name: 'Bobby Axlerod',
    email: 'bobby@axecapital.com',
  },
  pricing_type: 'fixed_price',
};
const payload = {
  method: 'POST',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CC-Api-Key': process.env.COMMERCE_API_KEY,
  },
  body: JSON.stringify(requestBody),
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
