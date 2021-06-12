import getCars from "./get-cars";
const deleteCar = () => {
    const removeBtn: Array<HTMLElement> = Array.from(document.querySelectorAll('.remove_btn'));
    const removeBtnHandler = async () => {
        const element = event.target as HTMLElement
        const response = await fetch(`http://127.0.0.1:3000/garage/${element.id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        getCars() 
        return data
    }
    removeBtn.forEach(element => {
        element.addEventListener('click', removeBtnHandler)
    });      
}
export default deleteCar