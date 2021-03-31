<?php
    require_once("../admin/lib/dbconfig.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Damiaen Toussaint | Projects</title>
    <!-- Meta -->
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../assets/favicon.png">
    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css" type='text/css'>
    <link rel="stylesheet" href="../assets/plugins/font-awesome/css/font-awesome.min.css"  type='text/css'>
    <link rel='stylesheet' href="../assets/css/style.css"  type='text/css' />  
</head>
<body id="page-top" class="index">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top navbar-shrink">
        <div class="container">
            <!-- Mobile display -->
            <div class="navbar-header page-scroll">
                <a class="navbar-brand page-scroll" href="#page-top">Damiaen Toussaint | Projects Page</a>
            </div>
        </div>
    </nav>
    <!-- End navigation -->

     <!-- Projects -->
    <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Projects</h2>
                    <h3 class="section-subheading text-muted">
                    Current or completed projects can be found here (Clicking on them opens a new tab)</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="../assets/img/portfolio/fillerimage.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Project 1</h4>
                        <p class="text-muted">Web Design</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <span class="copyright">Copyright <span>&copy; <?php echo date('Y'); ?> Damiaen Toussaint</span>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <li><a target="_blank" href="https://github.com/"><i class="fa fa-github"></i></a>
                        </li>
                        <li><a target="_blank" href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li><a target="_blank" href="https://facebook.com/"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/damiaen-toussaint-abaaa0107"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="../assets/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../assets/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../assets/js/agency.js"></script>

</body>
</html>