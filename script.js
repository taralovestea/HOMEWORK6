var $containerChildren = $(".container")

var $thisContainer= $containerChildren[0] 
for (var i=0; i <= 8; i++){
    
    // console.log($($thisContainer).children()[i])
    var $thisInputDiv= $($($($thisContainer).children()[i]).children()[1]);
    var $thisInputField= $($($($thisInputDiv).children()[0]).children()[0]);
    if (localStorage.getItem($($containerChildren.children()[i]).attr("value"))){
        $($thisInputField).val(localStorage.getItem($($containerChildren.children()[i]).attr("value")))
    }
    // $($($thisContainer).children()[i]).children()[1].addClass("past")
    if (moment().hour() > $($containerChildren.children()[i]).attr("value") ){
        $thisInputField.addClass("past")
    }
    else if (moment().hour() == $($containerChildren.children()[i]).attr("value")) {
        $thisInputField.addClass("present")
    }
    else {
        $thisInputField.addClass("future")
    }
        
}

// save user input to local storage when they click the submit button 




$(".saveBtn").on("click", function(event) {
    
    event.preventDefault();
    var $thisInput = $($($($(this).parent()[0]).siblings()[1]).children()[0]).children()[0];
    var $thisTimeVal = $($($(this).parent()[0]).parents()[0]).attr("value")
    // console.log($($thisInput).val(), $thisTimeVal)
    localStorage.setItem($thisTimeVal, $($thisInput).val())
}); 
