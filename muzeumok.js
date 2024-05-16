console.log(muzeumok)
var sz="<table>"
for (const elem of muzeumok) {
    sz+=`
    <tr>
    <td>
    ${elem.nev}
    </td>
    <td>
    ${elem.tipus}
    </td>
    <td>
    ${elem.leiras}
    </td>
    <td>
    <img src="${elem.kep}" alt="${elem.nev}" title="${elem.nev}" class="img-fluid img-thumbnail">
    </td>
    <td>
    ${elem.mutargyakSzama}
    </td>
    </tr>
    `
}
document.getElementById("doboz").innerHTML=sz