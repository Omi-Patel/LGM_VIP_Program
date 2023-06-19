var rowno = 1;


function getInputValue() {
  var gender = "";
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;


  if (name == "" || email == "" || phone == "") {
    alert("Please Fill The Essential Details!!!");
  }
  else {

    let m = document.getElementById('g1');
    let f = document.getElementById('g2');

    if ((m.checked) == true) {
      gender = m.value;
    }

    else if ((f.checked) == true) {
      gender = f.value;
    }
    else {
      alert("Please select a gender");
    }

    // Skill
    var checkboxes =
      document.getElementsByName('skills');
    var result = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result += checkboxes[i].value
          + ", ";
      }
    }

    
    // console.log(selected);

    let table = document.getElementById('infotable');
    var row = table.insertRow(rowno);
    var col1 = row.insertCell(0);

    col1.innerHTML = "<br>" + "<b> Name : </b>" + name + "<br> <b> Email : </b>" + email + "<br> <b> Phone no : </b> " + phone + "<br> <b> Gender : </b>" + gender + "<br>" + "<b> Skills : </b>" + result + "<hr>";

    rowno = rowno + 1;

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    // document.getElementById('gender').value = "";
    // document.getElementById('address').value = "";
    m.checked = false;
    f.checked = false;
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
}