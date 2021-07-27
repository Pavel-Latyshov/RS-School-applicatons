import counter from "./counter";
import getCars from "./get-cars";

const prevPage = () => {
    const prevPageBtn: HTMLElement = document.querySelector('.prev_btn')
    const prevPageHandler = () => {
        if (counter.count > 1) {
            counter.count -=1
            console.log(counter.count);
            getCars()             
        }
    }
    prevPageBtn.addEventListener('click', prevPageHandler)
}
export default prevPage