window.addEventListener('keydown', (e)=>{
    let Keyname = e.key
    let Code = e.code
    let keyCode=e.keyCode

    document.querySelector('#insertData').innerHTML= `

      <table>
        <tr>
            <th>Key Name </th>
            <th>Code  </th>
            <th>Key Code </th>
        </tr>
        <tr>
            <td>${Keyname===" "?"Space":Keyname}</td>
            <td>${Code}</td>
            <td>${keyCode}</td>
        </tr>
        
    </table>
    
    `

})