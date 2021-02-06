// DOM elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const loginMessage=document.querySelector('.login-header p');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const postModalX = document.querySelector('.post-modal-header i')
const postModal = document.querySelector('.post-modal');
const postModalBox = document.querySelector('.modal');
const postModalPostBtn = document.querySelector('.post-modal-header button');
const postModalPlus = document.querySelector('.post-modal-icons span');
const postModalInput = document.querySelector('.post-modal-input');
const user = document.querySelector('.user');
const sidebar=document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarXBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

/******************************** */
/******************************** */

//Main page

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    };
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !== '' && inputPassword.value !== '') {
        mainPage.style.display = 'none';
        newsFeedPage.style.display='block';
    } else {
        goToLoginPage();
        loginModal.style.display='block';
    }
})

//login page

loginFormBtn.addEventListener('click',()=>{
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== '' && loginPassword.value !== '') {
        loginPage.style.display = 'none';
        newsFeedPage.style.display='block';
    } else {
        loginModal.style.display='block';
        loginMessage.style.display='block';
        setTimeout(()=>{loginModal.style.display='none'},3000)
    }
})

//feeds page

postBtn.addEventListener('click', () => {
    postModalBox.style.display = 'block';
    postModal.classList.add('post-modal-display');
})

postModalX.addEventListener('click', () => {
    postModal.classList.remove('post-modal-display');
    postModalBox.style.display = 'none';
    if (postModalInput.value !== '') {
        postModalInput.value = '';
        changeOpacity(0.5);
    }
})


const changeOpacity = (x) => {
    postModalPostBtn.style.opacity = x;
    postModalPlus.style.opacity = x;
}

postModalInput.addEventListener('keypress', (e)=>{
    if (e.target.value !== '') {
        changeOpacity(1);
    } 
});

postModalInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changeOpacity(0.5);
    } 
})

// sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
})
sidebarXBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})
//dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map(darkEl1=> darkEl1.classList.toggle('dark1'));
    Array.from(darkElements2).map(darkEl2=> darkEl2.classList.toggle('dark2'));
    Array.from(lightTexts).map(lightText=>lightText.classList.toggle('light'));
    Array.from(borders).map(border=>border.classList.toggle('border-color'));
})