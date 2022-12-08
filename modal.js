function modal(tes) {
  switch (tes) {
    //open modal//
    case 1:
      document.querySelector(".one").classList.add("appeared");
      break;

    case 2:
      document.querySelector(".two").classList.add("appeared");
      break;

    case 3:
      document.querySelector(".three").classList.add("appeared");
      break;
      
    //close modal//

    case 4:
      document.querySelector(".one").classList.remove("appeared");
      break;

    case 5:
      document.querySelector(".two").classList.remove("appeared");
      break;

    case 6:
      document.querySelector(".three").classList.remove("appeared");
      break;
  }
}
