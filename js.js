const title = "FREELANCER FORUM";
const heading = "Available Freelancers";

//initial page info
const main = () => {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
  h1.innerHTML = title;
  const p = document.createElement("p");
  p.id = "averagePrice";
  const h2 = document.createElement("h2");
  h2.innerHTML = heading;

  root.appendChild(h1);
  root.appendChild(p);
  root.appendChild(h2);
};

main();

//the arrays of jobs, starting with alice as the initial occupation
//additional arrays will be added after 2 seconds
const initialFreelancer = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const additionalFreelancer = [
  { name: "Carol", occupation: "Programmer", price: 70 },
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
];

//sets interval of jobs appearing at 2 seconds
let newFreelancerIndex = 0;
const addJobInterval = setInterval(addFreelancer, 2000);

//called function to render the inital state of the page (without the jobs)
render();

function render() {
  const freelanceList = document.querySelector("#jobListNames");
  const freelanceElements = initialFreelancer.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    return element;
  });
  freelanceList.replaceChildren(...freelanceElements);

  //updates the average price with each additional job
  const averagePrice = calculateAveragePrice();
  const averagePriceElement = document.querySelector("#averagePrice");
  averagePriceElement.textContent = `The average starting price is $${averagePrice}.`;
}

function addFreelancer() {
  if (newFreelancerIndex < additionalFreelancer.length) {
    initialFreelancer.push(additionalFreelancer[newFreelancerIndex]);
    newFreelancerIndex++;
    render();
  } else {
    clearInterval(addJobInterval);
  }
}

//calculates the average price
function calculateAveragePrice() {
  const total = initialFreelancer.reduce(
    (sum, initialFreelancer) => sum + initialFreelancer.price,
    0
  );
  return (total / initialFreelancer.length).toFixed(2);
}
