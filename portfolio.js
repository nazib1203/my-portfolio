document.getElementById('year').textContent = new Date().getFullYear();
function scrollToProjects(){
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}