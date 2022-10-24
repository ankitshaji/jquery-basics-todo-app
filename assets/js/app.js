//*************************************
//Check Off Specific Todos By Clicking
//*************************************
//jQueryWebApiMethod("css element selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod("eventStringObject","childElementStringObject",callback) - setter - execute addEventListener with clickEventStringObject on all elementObjects in jQueryListObject
//NOTE - since we can only call addEventListener on already existing elements we call addEventListener on parent element and specify the present/future child elements that need to be clicked on to exectue the callback
$("ul").on("click", "li", function (e) {
  //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
  //jQueryListObject.syncMethod("css class") - setter - set/remove class attribute on 1 specific elementObject
  $(this).toggleClass("completed");
});

//**************************
//Click on X to delete Todo
//**************************
//jQueryWebApiMethod("css element selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod("eventStringObject","childElementStringObject",callback) - setter - execute addEventListener with clickEventStringObject on all elementObjects in jQueryListObject
//NOTE - since we can only call addEventListener on already existing elements we call addEventListener on parent element and specify the present/future child elements that need to be clicked on to exectue the callback
$("ul").on("click", "span", function (e) {
  //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
  //jQueryListObject.syncMethod() -> jQueryListObject with 1 specific parentElementObject
  //parentjQueryListObject.asyncMethod(milliseconds,callback) - setter - set inline style property on specific elementObject in jQueryListObject
  //first reduce opacity then set display property to none - within set milliseconds timeframe - then execute callback
  $(this)
    .parent()
    .fadeOut(500, function () {
      //jQueryListObject.syncMethod() - removes the 1 specific parentElementObject
      $(this).remove();
    });
  //clickEventObject.syncMethod()
  e.stopPropagation(); //prevent the parent elements that executed addEventListner with clickEventStringObject from running its callback - ie prevent event bubbling up
});

//**************************
//Press enter to add Todo
//**************************
//jQueryWebApiMethod("css element selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod(callback) - setter - execute addEventListener with keypressEventStringObject on all elementObjects in jQueryListObject
$("input[type='text']").keypress(function (e) {
  //check if keypressed is enter (ie if charecter keycode is 13) - jQuery normalise .which property in all browsers
  if (e.which === 13) {
    //grabbing the toDoText(value) from input
    //jQueryListObject.method - getter - return value of first matching elementObject in jQueryListObject
    const toDoText = $(this).val();
    //jQueryListObject.syncMethod(stringObject) - setter - sets the  value for all elementObjects in jQueryListObject
    $(this).val(""); //clear input
    //create a new li element and add it as a child to the parent ul element
    //jQueryListObject.syncMethod("htmlMarkupStringObject") - setter - creates and sets child element in all elementObjects(parent elements) in jQueryListObject
    $("ul").append(
      `<li><span><i class="fa fa-trash"></i></span> ${toDoText}</li>`
    );
  }
});

//*********************************
//Click on Plus to hide/show input
//*********************************
//jQueryWebApiMethod("css class selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod(callback) - setter - execute addEventListener with clickEventStringObject on all elementObjects in jQueryListObject
$(".fa-plus").click(function () {
  //jQueryWebApiMethod("css element selector") -> jQueryListObject with all matching elementObjects
  //jQueryListObject.syncMethod() - setter - check what the inline style property display's value is and sets it to the the opposit on all elemntObjects in jQueryListObject //Note - changes opacity before setting display value
  $("input[type='text']").fadeToggle();
});
