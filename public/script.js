const steps = [
    "Connecting to Instagram...",
    "Scanning profile...",
    "Analyzing relationship data...",
    "Almost done..."
];

function startPrank() {
    const crush = document.getElementById('crushName').value;
    const user = document.getElementById('userName').value;

    if (!crush || !user) {
        alert("Please fill both fields! 💕");
        return;
    }

    // Save Data
    const entry = {
        crush: crush,
        user: user,
        time: new Date().toLocaleString()
    };
    let entries = JSON.parse(localStorage.getItem('prankData') || "[]");
    entries.push(entry);
    localStorage.setItem('prankData', JSON.stringify(entries));

    // UI Transition
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('loading-section').classList.remove('hidden');

    let progress = 0;
    let stepIdx = 0;
    const bar = document.getElementById('bar');
    const statusText = document.getElementById('status-text');

    const interval = setInterval(() => {
        progress += 2;
        bar.style.width = progress + "%";

        if (progress % 25 === 0 && stepIdx < steps.length) {
            statusText.innerText = steps[stepIdx];
            stepIdx++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            showResult(user, crush);
        }
    }, 100); // ~5 seconds total
}

function showResult(user, crush) {
    document.getElementById('loading-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    document.getElementById('resUser').innerText = user;
    document.getElementById('resCrush').innerText = crush;
}

function checkAdmin() {
    const pass = prompt("Enter Admin Password:");
    if (pass === "1193605895") {
        window.location.href = "admin.html";
    } else {
        alert("Access Denied.");
    }
}
