// ד
const secret = Math.floor(Math.random() * 20) + 1;
let html = "";
for (let i = 1; i <= 20; i++) {
    if (i < secret) {
        html += `<button onclick="alert('${i} קטן מהמספר הסודי. נסי מספר גדול יותר')">${i}</button>`;
    }
    else
        if (i > secret) {
            html += `<button onclick="alert('${i} גדול  מהמספר הסודי. נסי מספר קטן יותר')">${i}</button>`;
        }
    else
    {
        html += `<button onclick="document.body.innerHTML='<h1>כל הכבוד! נחשת נכון, המספר הסודי הוא ${i}</h1>'; document.body.style.color = 'pink'">${i}</button>`;
    }
}
document.body.innerHTML = "<h1>נחשי מספר בין 1 ל-20</h1>" + html;
