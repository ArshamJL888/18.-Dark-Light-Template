// let darkThemeFlag = true;
// window.addEventListener('load', themeHandler)
// function themeHandler() {
//     let theme = localStorage.getItem('theme');
//     if(theme === 'dark') {
//         document.body.classList.add('dark');
//     }
//     else if (theme === 'light') {
//         document.body.classList.remove('dark');
//     }
// };
// let switchElem = document.querySelector('.switch');
// // .addEventListener('click', function() {
// //     alert('click')
// // })
// switchElem.addEventListener('click', themeClickHandler);
// function themeClickHandler() {
//     darkThemeFlag = !darkThemeFlag;
//     if(document.body.className.includes('dark')){
//         localStorage.setItem('theme', 'light');
//     }
//     else {
//         localStorage.setItem('theme', 'dark');
//     }
//     // if (darkThemeFlag) {
//     //     localStorage.setItem('theme', 'light');
//     // }
//     // else if (!darkThemeFlag) {
//     //     localStorage.setItem('theme', 'dark');
//     // }
//     themeHandler();
// }
//  WAY 2
let switchElement = document.querySelector('.switch');
switchElement.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if(document.body.className.includes('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light')
    }
})
window.onload = function() {
    let theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
}