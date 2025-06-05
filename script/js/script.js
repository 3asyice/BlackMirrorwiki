const links = [
{ url: "https://www.big-loser.site", text: "Big Loser Site" },
{ url: "https://www.big-loser.site/Caso/004", text: "Archived Media" },
{ url: "https://www.big-loser.site/Caso/001", text: "Início de Tudo" },
{ url: "https://www.big-loser.site/Caso/005", text: "Camila Dalcol" }
    ];
function showSuggestions(value) {
const suggestions = document.getElementById('suggestions');
suggestions.innerHTML = '';
if (!value) {
suggestions.style.display = 'none';
return;
}
const lowerCaseValue = value.toLowerCase();
const filteredLinks = links.filter(link => link.text.toLowerCase().includes(lowerCaseValue));
if (filteredLinks.length > 0) {
suggestions.style.display = 'block';
filteredLinks.forEach(link => {
const item = document.createElement('div');
item.className = 'suggestion-item'; 
item.innerText = link.text;
item.onclick = () => redirectToLink(link.url);
suggestions.appendChild(item);
});
} 
else {
suggestions.style.display = 'none';
}
}
function redirectToLink(link) {
window.location.href = link;
}
document.addEventListener('click', function(event) {
const suggestions = document.getElementById('suggestions');
if (!document.getElementById('linkInput').contains(event.target)) {
suggestions.style.display = 'none';
}
});