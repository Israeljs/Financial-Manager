const AWESOMEAPI_BASE = 'https://economia.awesomeapi.com.br';

const getCurrency = async () => {
  const response = await fetch(`${AWESOMEAPI_BASE}/json/all`);
  const json = await response.json();
  delete json.USDT;

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrency;
