const chargeCode = process.env.CHARGE_CODE;
const url = `${process.env.COMMERCE_API_URL}}${chargeCode}/add_email`;
const requestBody = {
  email: 'newEmail@axecapital.com',
};
const payload = {
  method: 'PUT',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CC-Api-Key': process.env.COMMERCE_API_KEY,
    'X-CC-Version': '2018-03-22',
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
