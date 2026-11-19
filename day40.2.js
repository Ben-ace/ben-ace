// week 8 assignments
// JavaScript and the web
// Exercise 1
//  This week focuses on JavaScript.
// Use this terminal to practise Python logic
// that mirrors what you are doing in the browser.

// Replicate JS array methods in Python
fruits = ['mango', 'banana', 'apple']
console.log(fruits)
fruits.push('grape')    // push
console.log(fruits.pop()) ;     // pop
console.log(fruits.length) ;      // length

// Exercise 2; Fetch Logic
async function getOriginIP() {
   const url = 'https://httpbin.org/get';
    const response = await fetch(url);
    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Origin IP:', data.origin || 'unknown');
}

getOriginIP();

// Exercise 3: Json Serialisation
// Practise converting between JavaScript objects and JSON strings
const obj = { tool: "AI Summariser", version: 1, active: true };
const js_string = JSON.stringify(obj);
console.log("Serialised:", js_string);
const parsed = JSON.parse(js_string);
console.log("Tool name:", parsed.tool);

// Exercise 4: Challenge
// Build a simple data fetcher that returns formatted output
// Like a mini backend endpoint would
async function fetch_data(url) {
    try {
        const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        return { error: String(e) };
    }
}

async function runChallenge() {
    const result = await fetch_data('https://httpbin.org');
    console.log(JSON.stringify(result, null, 2));
}

runChallenge();

// Exercise 5: Trade Application - Jua Kali Job Quotation Tool
// Jua Kali job quotation calculator
function buildQuote(jobType, materialCost, labourDays, dailyRate) {
  const labourCost = labourDays * dailyRate;
  const subtotal = materialCost + labourCost;
  const vat = subtotal * 0.16;
  const total = subtotal + vat;
  return {
    job: jobType,
    materials: materialCost,
    labour: labourCost,
    vat: Math.round(vat),
    total: Math.round(total)
  };
}

const jobs = [
  buildQuote("Steel door installation", 12000, 2, 2500),
  buildQuote("Floor tiling (45 sqm)", 8100, 3, 2000),
  buildQuote("Carpentry: 6 chairs", 4800, 4, 1800),
];

jobs.forEach(q => {
  console.log(`Job: ${q.job}`);
  console.log(`  Materials: KES ${q.materials.toLocaleString()}`);
  console.log(`  Labour: KES ${q.labour.toLocaleString()}`);
  console.log(`  VAT (16%): KES ${q.vat.toLocaleString()}`);
  console.log(`  TOTAL: KES ${q.total.toLocaleString()}`);
  console.log("");
});




