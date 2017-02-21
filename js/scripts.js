
var groceryItems = [];

$(document).ready(function () {
  $("#done").click(function(){
    $(".col-md-8").toggle();
  })

  $("#groceries").submit(function(event) {
    var groceryItem = $("#groceryItem").val();

    // now print out sorted array in list
    if (groceryItem === "") {
      alert("You forgot your groceries!")
    }
    else {
        groceryItems.push(groceryItem);
        groceryItems.sort();
        console.log(groceryItems);
        $("#favoriteList").empty();
        groceryItems.forEach( function (item) {
          $("#favoriteList").append("<li>"+item+"</li>");
        });
        $("#groceries").trigger("reset");
    }


    // $("#groceries").trigger("reset");

    event.preventDefault();

  });
});





// $(document).ready(function () {
//   $("#favorites").submit(function(event) {
//     var favorite1 = $("#favorite1").val();
//     var favorite2 = $("#favorite2").val();
//     var favorite3 = $("#favorite3").val();
//
//     var favoriteThingsList = [];
//       favoriteThingsList.push (favorite1);
//       favoriteThingsList.push (favorite2);
//       favoriteThingsList.push (favorite3);
//       console.log(favoriteThingsList);
//
//     var newOrderList = [];
//     newOrderList.push(favoriteThingsList[1]);
//     newOrderList.push(favoriteThingsList[0]);
//     newOrderList.push(favoriteThingsList[2]);
//     console.log(newOrderList);
//
//     $("#favoriteList").append("<li>"+favorite1+"</li>");
//       $("#favoriteList").append("<li>"+favorite2+"</li>");
//         $("#favoriteList").append("<li>"+favorite3+"</li>");
//     event.preventDefault();
//   });
// });
