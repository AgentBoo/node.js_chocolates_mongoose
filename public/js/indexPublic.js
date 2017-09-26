// let aroma = document.querySelector(".aromaDOM");
let characteristics = document.getElementById("characteristicsDOM")
let aromaBtn = document.getElementById("aromaBtn")

aromaBtn.addEventListener('click', function(){
  let aroma_tr = document.createElement('tr');
      aroma_tr.innerHTML =
      `
      <td></td>
      <td><input type="text" name="aroma" class="aromaDOM"></td>
      `
  characteristics.appendChild(aroma_tr);

})
