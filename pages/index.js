import { Api } from "../scripts/components/Api.js";
import { category, categoryName, categoryStatus, num, profileImg, submitBtn } from "../scripts/utils/constants.js";



const api = new Api({
    baseUrl: 'https://rickandmortyapi.com/api/'
})
const refreshData = (item) => {
    categoryName.textContent = item.name;
    console.log(item.status)
    categoryStatus.textContent = item.status;
    profileImg.src = item.image
}

submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    api.loadingData(category.value, num.value)
        .then(res => refreshData(res))
})