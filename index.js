// copy btn

const h1 = document.getElementById('count');
const btnIds = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9'];
const pIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'];

btnIds.forEach((btnId, index) => {
  const btn = document.getElementById(btnId);
  const p = document.getElementById(pIds[index]);
  if (!btn || !p) return;

  btn.addEventListener('click', () => {
    const current = parseInt(h1.textContent, 10) || 0;
    h1.textContent = current + 1;
    const textToCopy = p.textContent || '';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Copied:', textToCopy);
      })
      .catch(err => {
        console.error('Copy failed:', err);
      });
  });
});

  // call btn 

const heading = document.getElementById("myHeading");
const buttons = document.querySelectorAll(".decrement-btn");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let current = parseInt(heading.textContent, 10);
    current -= 20;
    heading.textContent = current;
    alert("Calling National Emergency Service");
    
  });
});



// history

const callHistoryContainer = document.getElementById("call-history");

// Format time like: 11:36:58 AM
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-bd');
}

function addCallHistory(title, number) {
  const time = getCurrentTime();

  const historyItem = document.createElement("div");
  historyItem.className = "mb-2 p-2 bg-white rounded shadow";

  historyItem.innerHTML = `
    <div class="flex justify-between items-center">
      <div>
        <p class="font-semibold">${title}</p>
        <p class="text-sm text-gray-600">${number}</p>
      </div>
      <div class="text-sm text-gray-500">${time}</div>
    </div>
  `;

  callHistoryContainer.prepend(historyItem);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white"); // Finds the parent card
    const title = card.querySelector("h2").textContent;
    const number = card.querySelector("p.text-3xl").textContent;

    addCallHistory(title, number);
    alert(`Calling ${title}`);
  });
});

const clearButton = document.getElementById("clear-history");
if (clearButton) {
  clearButton.addEventListener("click", () => {
    callHistoryContainer.innerHTML = "";
  });
}


 const loveH1 = document.getElementById('love');
  let count = parseInt(loveH1.textContent, 10);
  document.querySelectorAll('.incrementBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      loveH1.textContent = count;
    });
  });
