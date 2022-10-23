//*************************************
//Check Off Specific Todos By Clicking
//*************************************
//jQueryWebApiMethod("css element selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod(callback) - setter - addClickEventListener on all elementObjects in jQueryListObject
$("li").click(function (e) {
  //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
  //jQueryListObject.syncMethod("css class") - setter - set/remove class attribute on 1 specific elementObject
  $(this).toggleClass("completed");
});
