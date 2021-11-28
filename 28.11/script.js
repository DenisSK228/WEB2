$('input:radio').on("click", function () {
    let class1 = $(this).val();
    $.ajax({
        "url": "/",
        "data": {},
        "method": "GET",
        "dataType": "text",
        "success": function (data) {
            let a = a;
            console.log(a);
            for (let i = 0; i < document.querySelectorAll("li").length; i++) {
                document.querySelectorAll("li")[i].innerHTML = a[i];
            }
        }
    });
});