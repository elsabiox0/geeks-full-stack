const API_KEY = "305b89aca8ef00c1b7c5e253";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

async function loadCurrencies() {
  const res = await fetch(`${BASE_URL}/codes`);
  const data = await res.json();
  const codes = data.supported_codes;

  codes.forEach(([code, name]) => {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = `${code} - ${name}`;
    fromSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = `${code} - ${name}`;
    toSelect.appendChild(option2);
  });

  fromSelect.value = "USD";
  toSelect.value = "MAD";
}

async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = parseFloat(amountInput.value);

  if (!amount || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
  const data = await res.json();

  if (data.result === "success") {
    const converted = data.conversion_result;
    resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  } else {
    resultDiv.textContent = "Failed to fetch conversion.";
  }
}

document.getElementById("convert-btn").addEventListener("click", convertCurrency);

document.getElementById("switch-btn").addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
});

loadCurrencies();

