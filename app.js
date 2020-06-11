const leiterData = [
        {   
            id: "0",
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
            id: "1",
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
            id: "2",
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
            id: "3",
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
            id: "4",
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
            id: "5",
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
            id: "6",
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
            id: "7",
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
            id: "8",
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
            id: "9",
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
            id: "10",
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
            id: "11",
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
            id: "12",
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
            id: "13",
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

document.getElementById("leiterlist").innerHTML = `
    ${leiterData.map(leiterTemplate).join('')}
`

function popupHandler(key) {({
            key: this.id,
        });
        const filteredData = leiterData[key];
        console.log(filteredData)   
        
        return document.getElementById("leiterPopup").innerHTML = `
        <div class="popupBG" style="display:flex;">
        <div class="LeiterPopup">
            <div class="Pupupimg">
                <img src="${filteredData.foto}">
            </div>
            <h1 class="Popupheading">${filteredData.name}</h1>
            <span class="position">${filteredData.position}</span>
            <div class="PopInfo">
            <p><strong>Geburtstag: </strong>${filteredData.geburtstag}</p>
            <p><strong>Lieblingsessen: </strong>${filteredData.lieblingsessen}</p>
            <p><strong>Lieblingsfilm: </strong>${filteredData.lieblingsfilm}</p>
            <p><strong>Spitzname: </strong>${filteredData.spitzname}</p>
            <p><strong>Beitritt in der KJG: </strong>${filteredData.beitritt}</p>
            <br>
            <div class="close" onClick="close()" >
                <img src="src/static/img/close.svg">
            </div>
            </div>
        </div>
        </div>`
};

