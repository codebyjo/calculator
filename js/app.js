$(document).ready(function () {

  var display = "";
  var valueHolder = "";

/* failed event handler loop, 9 is always added to display for all buttons, i would be 9 on the last loop.

  for (i = 0; i < 10; i++) {

    $(document).on("click", ".keys span:contains(" + i + ")", function () {
      display += i;
      $(".screen").html(display);
    });

  }
*/

/* FUNCTION BUTTONS */
$(document).on("click", ".top span:contains(C)", function () {
  display = "";
  valueHolder = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});
$(document).on("click", ".keys span:contains(+)", function () {
  valueHolder = valueHolder + display + "+";
  display = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});
$(document).on("click", ".keys span:contains(-)", function () {
  valueHolder = valueHolder + display + "-";
  display = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});
$(document).on("click", ".keys span:contains(÷)", function () {
  valueHolder = valueHolder + display + "/";
  display = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});
$(document).on("click", ".keys span:contains(x)", function () {
  valueHolder = valueHolder + display + "*";
  display = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});
$(document).on("click", ".keys span:contains(=)", function () {

  if (display != "") {
    valueHolder += display;
  }

  display = eval(valueHolder).toString();
  valueHolder = "";
  $(".screen").html(display);
  console.log(display, valueHolder);
});

/* NUMBER BUTTONS */
$(document).on("click", ".keys span:contains(0)", function () {
  display += 0;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(1)", function () {
  display += 1;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(2)", function () {
  display += 2;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(3)", function () {
  display += 3;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(4)", function () {
  display += 4;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(5)", function () {
  display += 5;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(6)", function () {
  display += 6;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(7)", function () {
  display += 7;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(8)", function () {
  display += 8;
  $(".screen").html(display);
});
$(document).on("click", ".keys span:contains(9)", function () {
  display += 9;
  $(".screen").html(display);
});


});
