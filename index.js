function renderList(data, count, type) {
  let txt = `
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="${type}${count}">
  <label class="form-check-label" for="${type}${count}">
    <code>${data}</code>
  </label>
</div>
  `;
  document.getElementById(type).innerHTML += (txt);
}

inputTypes.sort().forEach((data, count)=>renderList(data, count, "input"));
commonHTMLAttributes.sort().forEach((data, count)=>renderList(data, count, "attr"));
