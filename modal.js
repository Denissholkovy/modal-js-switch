let c = console.log;

function modal(param) {
  switch (param) {
    //open modal//

    case "x25":
      document.querySelector(".one").classList.add("appeared");
    break;

    case "x100":
      document.querySelector(".two").classList.add("appeared");
    break;

    case "x250":
      document.querySelector(".three").classList.add("appeared");
    break;
    //close modal//

    case 'close': 
      document.querySelectorAll('.modal-blur').forEach((el) => {
        el.classList.remove('appeared');
      })
    break;
  }
}
