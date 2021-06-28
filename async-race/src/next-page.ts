import counter from "./counter";
import getCars from "./get-cars";

const nextPage = () => {
    const nextPageBtn: HTMLElement = document.querySelector('.next_btn')

    const nextPageHandler = async () => {
        const pages = await fetch(`http://127.0.0.1:3000/garage`);
        const pageData = await pages.json();
        const limit = pageData.length / 7
        if (counter.count < Math.floor(limit) + 1) {
            counter.count +=1
            getCars()             
        }
    }
    nextPageBtn.addEventListener('click', nextPageHandler)
}

export default nextPage