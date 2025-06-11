import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li data-celeb="${celebrity.name}"
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click",
    (event) =>{
        if(event.target.dataset.type === "celebrity"){
            window.alert(`${event.target.dataset.celeb} sport is ${event.target.dataset.sport} `)
        }
    }
)