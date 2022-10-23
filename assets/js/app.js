//*************************************
//Check Off Specific Todos By Clicking
//*************************************
//jQueryWebApiMethod("css style element selector") -> jQueryListObject with all matching elementObjects
//jQueryListObject.asyncMethod(callback) - setter - addClickEventListener on all elementObjects in jQueryListObject
$("li").click(function (e) {
  //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
  //jQueryListObject.syncMethod("cssPropertyStringObject") - getter - get style css properties on 1 specific elementObject
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
    //jQueryListObject.syncMethod(styleObject-css properties in camelCase) - setter - set inline style css properties on 1 specific elementObject
    $(this).css({ color: "black", textDecoration: "none" });
  } else {
    //jQueryWebApiMethod(this keyword - specific left of dot elementObject) -> jQueryListObject with 1 specific elementObject
    //jQueryListObject.syncMethod(styleObject-css properties in camelCase) - setter - set inline style css properties on 1 specific elementObject
    $(this).css({ color: "gray", textDecoration: "line-through" });
    //$(this).css("text-decoration", "line-through"); // - alternative setter - (cssPropertyStringObject,cssPropertyValueStringObject)
  }
});
