import { Api } from "../scripts/components/Api.js";
import { FormValidation } from "../scripts/components/FormValidation.js";
import { category, categoryName, categoryStatus, form, num, profileImg, submitBtn } from "../scripts/utils/constants.js";

const validation = new FormValidation(form)

validation.enableValidation()
const api = new Api({
    baseUrl: 'https://rickandmortyapi.com/api/'
});
const refreshData = (item) => {
    categoryName.textContent = item.name;
    console.log(item.status)
    categoryStatus.textContent = item.status;
    profileImg.src = item.image
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    api.loadingData(category.value, num.value)
        .then(res => refreshData(res))
    form.reset()
    validation.disablingButtonOn()
})