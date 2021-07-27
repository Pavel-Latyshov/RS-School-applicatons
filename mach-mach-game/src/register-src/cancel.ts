export const cancelFunc = () => {
  const cancel: HTMLElement = document.querySelector('.cancel');

  const inputs: Array<HTMLInputElement> = Array.from(document.querySelectorAll('input'));
  cancel.addEventListener('click', () => {
    inputs.forEach((element) => {
      if (element.value !== 'register') {
        element.value = '';
      }
    });
  });
};
