console.log(varosok)
var sz="<table>"
for (const elem of varosok) {
    sz+=`
    <tr>
    <td>
    ${elem.nev}
    </td>
    <td>
    ${elem.leiras}
    </td>
    <td>
    <img src="${elem.kep}" alt="${elem.nev}" title="${elem.nev}" class="img-fluid img-thumbnail">
    </td>
    </tr>
    `
}
document.getElementById("doboz").innerHTML=sz