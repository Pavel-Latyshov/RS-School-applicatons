export const router = () => {
    const aboutLink: HTMLElement = document.querySelector('.about');
    const aboutPage: HTMLElement = document.querySelector('.about_wrapper');
    const registerForm: HTMLElement = document.querySelector('.register_wrapper');
    const scoreLink: HTMLElement = document.querySelector('.score');
    const scorePage: HTMLElement = document.querySelector('.score_wrapper');
    const settingsLink: HTMLElement = document.querySelector('.settings');
    const settingsPage: HTMLElement = document.querySelector('.settings_wrapper');
    const scoreLinkHandler = () => {
        aboutPage.classList.add('hidden');
        registerForm.classList.add('hidden');
        scorePage.classList.remove('hidden');
        settingsPage.classList.add('hidden');
        scoreLink.classList.add('active_link');
        aboutLink.classList.remove('active_link');
        settingsLink.classList.remove('active_link');
    }
    const aboutLinkHandler = () => {
        aboutPage.classList.remove('hidden');
        registerForm.classList.add('hidden');
        scorePage.classList.add('hidden');
        scoreLink.classList.remove('active_link');
        aboutLink.classList.add('active_link');
        settingsLink.classList.remove('active_link');
        settingsPage.classList.add('hidden');
    }
    const settingsLinkHandler = () => {
        aboutPage.classList.add('hidden');
        registerForm.classList.add('hidden');
        scorePage.classList.add('hidden');
        scoreLink.classList.remove('active_link');
        aboutLink.classList.remove('active_link');
        settingsLink.classList.add('active_link');
        settingsPage.classList.remove('hidden');
    }
    aboutLink.addEventListener('click', aboutLinkHandler);
    scoreLink.addEventListener('click', scoreLinkHandler);
    settingsLink.addEventListener('click', settingsLinkHandler);
}

