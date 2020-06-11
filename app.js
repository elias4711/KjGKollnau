const leiterData = [
        {
            name: "Elias Englen",
            position: "Webseite",
            geburtstag: "17.03.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Harry Potter",
            spitzname: "Eli",
            beitritt: "2015",
            foto: "https://www.google.com/search?q=Elias+Englen&rlz=1C5CHFA_enDE893DE893&sxsrf=ALeKk00KVerduqtd4wu1Dhkd9_g610Xkvw:1591869524806&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiY0reMwPnpAhVuQxUIHVM6CtgQ_AUoAnoECAsQBA&biw=1920&bih=946#imgrc=0yEuVRhs1BEwCM"
        },
        {
            name: "Lea Gmirek",
            position: "Pfarrjugendleitung",
            geburtstag: "26.06.2001",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Love Rosie",
            spitzname: "Le",
            beitritt: "2017",
            foto: "https://www.google.com/search?q=Elias+Englen&rlz=1C5CHFA_enDE893DE893&sxsrf=ALeKk00KVerduqtd4wu1Dhkd9_g610Xkvw:1591869524806&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiY0reMwPnpAhVuQxUIHVM6CtgQ_AUoAnoECAsQBA&biw=1920&bih=946#imgrc=0yEuVRhs1BEwCM"
        },
        {
            name: "Neomi Rottberger",
            position: "Pfarrjugendleitung",
            geburtstag: "05.06.2002",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Neomi",
            beitritt: "2018",
            foto: "src/static/img/mordekaiser-new-splash-art-lol-4K-96.jpg"
        },
        {
            name: "Neomi Rottberger",
            position: "Pfarrjugendleitung",
            geburtstag: "05.06.2002",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Neomi",
            beitritt: "2018",
            foto: "src/static/img/mordekaiser-new-splash-art-lol-4K-96.jpg"
        },
        {
            name: "Neomi Rottberger",
            position: "Pfarrjugendleitung",
            geburtstag: "05.06.2002",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Neomi",
            beitritt: "2018",
            foto: "src/static/img/mordekaiser-new-splash-art-lol-4K-96.jpg"
        }
        ]

function leiterTemplate(leiter) {
    return `
        <div class="leiter">
            <div class="imgdiv">
                <img class="leiter-img" src="${leiter.foto}">
            </div>
            <h1 class="leiter-name">${leiter.name}</h1>
            <span>${leiter.position}</span>
        </div>
    `
}

document.getElementById("leiterlist").innerHTML = `
    ${leiterData.map(leiterTemplate).join('')}
`