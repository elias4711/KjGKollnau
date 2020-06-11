const leiterData = [
        {   
            id: "01",
            name: "Elias Englen",
            position: "Webseite",
            geburtstag: "17.03.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Harry Potter",
            spitzname: "Eli",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {   
            id: "02",
            name: "Lea Gmirek",
            position: "Pfarrjugendleitung",
            geburtstag: "26.06.2001",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Love Rosie",
            spitzname: "Le",
            beitritt: "2017",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "03",
            name: "Neomi Rottberger",
            position: "Pfarrjugendleitung",
            geburtstag: "05.06.2002",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Neomi",
            beitritt: "2018",
            foto: "src/static/img/leiterfill.svg"
        },
        {   
            id: "04",
            name: "Helena Reich",
            position: "Leiter",
            geburtstag: "08.04.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Helli",
            beitritt: "2016",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "05",
            name: "Theresa Krause",
            position: "Kassenwart",
            geburtstag: "21.02.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Krause",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "06",
            name: "Marc Zielke",
            position: "Leiter",
            geburtstag: "21.02.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Marc",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "07",
            name: "Rebekka Herr",
            position: "Leiter",
            geburtstag: "03.12.1999",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Bekki",
            beitritt: "2016",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "08",
            name: "Magdalena Herr",
            position: "Leiter",
            geburtstag: "28.08.2001",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Magdi",
            beitritt: "2017",
            foto: "src/static/img/leiterfill.svg"
        },
        {   
            id: "09",
            name: "Sophia Großmann",
            position: "Leiter",
            geburtstag: "27.07.2001",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Zophia",
            beitritt: "2016",
            foto: "src/static/img/leiterfill.svg"
        },
        {   
            id: "10",
            name: "Torben Stein",
            position: "Leiter",
            geburtstag: "23.06.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Torbi",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "11",
            name: "Janis Fix",
            position: "Leiter",
            geburtstag: "26.05.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Fixi",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "12",
            name: "David Schätzle",
            position: "Leiter",
            geburtstag: "26.05.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "David",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "13",
            name: "Daniel Maier",
            position: "Leiter",
            geburtstag: "26.05.2000",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Dani",
            beitritt: "2015",
            foto: "src/static/img/leiterfill.svg"
        },
        {
            id: "14",
            name: "Jule Lehmann",
            position: "Leiter",
            geburtstag: "17.04.2001",
            lieblingsessen: "Pizza",
            lieblingsfilm: "Halloween",
            spitzname: "Jule",
            beitritt: "2017",
            foto: "src/static/img/leiterfill.svg"
        }
        ]

function leiterTemplate(leiter) {
    return `
        <div onClick="popupHandler(this.id)" id="${leiter.id}" class="leiter">
            <div class="imgdiv">
                <img class="leiter-img" src="${leiter.foto}">
            </div>
            <h1 class="leiter-name">${leiter.name}</h1>
            <span>${leiter.position}</span>
        </div>
    `
}

function onclickTemplate(leiter) {
    return `
        <div style="display:flex;" class="LeiterPopup">
            <div class="Pupupimg">
                <img src="${leiter.foto}">
            </div>
            <h1 class="Popupheading">${leiter.name}</h1>
            <span>${leiter.position}</span>
            <div class="PopInfo">
            <p><strong>Geburtstag: </strong>${leiter.geburtstag}</p>
            <p><strong>Lieblingsessen: </strong>${leiter.lieblingsessen}</p>
            <p><strong>Lieblingsfilm: </strong>${leiter.lieblingsfilm}</p>
            <p><strong>Spitzname: </strong>${leiter.spitzname}</p>
            <p><strong>Beitritt in der KJG: </strong>${leiter.beitritt}</p>
            </div>
        </div>
    `
}

document.getElementById("leiterlist").innerHTML = `
    ${leiterData.map(leiterTemplate).join('')}
`

function popupHandler(leiter, id) {
    if (leiter.id === id) {
        document.getElementById("leiterPopup").innerHTML = `
        ${leiterData.leiter.id.map(onclickTemplate).join('')}
`
    } else {
        window.alert('Kein Steckbrief vorhanden')
    }
}