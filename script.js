
function toggleDarkMode() {
    if(localStorage.getItem('theme')== 'dark')
        localStorage.removeItem('theme');
    else
        localStorage.setItem('theme', 'dark');
    setRootTheme();
}

function setRootTheme() {
    const root = document.documentElement;
    if(localStorage.getItem('theme')=='dark')
        root.setAttribute('theme','dark');
    else
        root.removeAttribute('theme');
}

window.addEventListener('load', setRootTheme);

const darkMode = document.getElementById('darkMode_Btn');
if (darkMode) {
    darkMode.addEventListener('click', toggleDarkMode);
}


const params = new URLSearchParams(location.search);
const formAnswers = document.getElementById("form_submitted");

let html = "";

for (const [k,val] of params.entries()) {
    html +=    `
    <div class=results>
        <div class="questions">${k}</div>
        <div class="answers">${val}</div>
    </div>
    `;
    
}

    formAnswers.innerHTML = html;
