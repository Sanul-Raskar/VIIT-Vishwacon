<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vishwacon1";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our Team</title>

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>

    <link rel="stylesheet" type="text/css" href="./assets/css/home.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/sal.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="opacity: 1;background: linear-gradient(to right,
    #231a60 0%,
    #3c338d 51%,
    #231a60 100%
  ) !important;">
      <a class="navbar-brand" href="index.html" style="color:#fff">
        <img
          src="./assets/img/cropped-vishwacon19-1.jpg"
          width="50"
          height="40"
          class="d-inline-block align-top"
          style="margin-right:10px"
        />
        Vishwacon
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i class="fas fa-bars" style="color:#fff;font-size: 28px"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Previous Years
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">2019</a>
              <a class="dropdown-item" href="#">2018</a>
              <a class="dropdown-item" href="#">2017</a>
              <a class="dropdown-item" href="#">2016</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Registration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contactUs.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    <div style="height:100px"></div>
    <div class="container">
      <h1 class="text-center">Chief Patron</h1>
      <br />
      <div class="row">
      <?php
		$sql="SELECT * FROM chief_patron";
		$result_set=mysqli_query($conn,$sql);
		while ($row=mysqli_fetch_array($result_set)) {
        ?>
        <div class="col-6 col-sm-4 mx-auto text-center my-3">
          <img
            src="https://miro.medium.com/max/478/1*KK8Sz-PVylkQKBaIXhjYWA.jpeg"
            alt=""
            class="teamImg"
          />
          <br /><br />
          <h4><?php echo $row['name'] ?></h4>
            <h5><?php echo $row['position'] ?></h5>
             <h6><?php echo $row['organisation'] ?></h6>
        </div>
         <?php 
        }
        ?>
        </div>
      </div>
<br> <br>
      <div class="container">
      <h1 class="text-center">Patron</h1>
      <br />
      <div class="row">
      <?php
		$sql="SELECT * FROM patron";
		$result_set=mysqli_query($conn,$sql);
		while ($row=mysqli_fetch_array($result_set)) {
        ?>
        <div class="col-6 col-sm-4 mx-auto text-center my-3">
          <img
            src="https://miro.medium.com/max/478/1*KK8Sz-PVylkQKBaIXhjYWA.jpeg"
            alt=""
            class="teamImg"
          />
          <br /><br />
          <h4><?php echo $row['name'] ?></h4>
            <h5><?php echo $row['position'] ?></h5>
             <h6><?php echo $row['organisation'] ?></h6>
        </div>
         <?php 
        }
        ?>
        </div>
      </div>
<br><br>
      <div class="container">
        <h1 class="text-center">Advisory Committee</h1>
        <div class="row">
        <?php
		$sql="SELECT * FROM advisory_committee";
		$result_set=mysqli_query($conn,$sql);
		while ($row=mysqli_fetch_array($result_set)) {
        ?>
        
        <div class="col-6 col-sm-3 mx-auto text-center my-3">
            <img
              src="https://miro.medium.com/max/478/1*KK8Sz-PVylkQKBaIXhjYWA.jpeg"
              alt=""
              class="teamImg"
            />
            <br /><br />
            <h4><?php echo $row['name'] ?></h4>
            <h5><?php echo $row['position'] ?></h5>
             <h6><?php echo $row['organisation'] ?></h6>
          </div>
        <?php 
        }
        ?>
         </div> 
      </div>
      <!--container-->
    </div>

<br><br>
<div class="container">
        <h1 class="text-center"> Organizers</h1>
        <div class="row">
        <?php
		$sql="SELECT * FROM organiser";
		$result_set=mysqli_query($conn,$sql);
		while ($row=mysqli_fetch_array($result_set)) {
        ?>
        
        <div class="col-6 col-sm-3 mx-auto text-center my-3">
            <img
              src="https://miro.medium.com/max/478/1*KK8Sz-PVylkQKBaIXhjYWA.jpeg"
              alt=""
              class="teamImg"
            />
            <br /><br />
            <h4><?php echo $row['name'] ?></h4>
            <h5><?php echo $row['position'] ?></h5>
             <h6><?php echo $row['organisation'] ?></h6>
          </div>
        <?php 
        }
        ?>
         </div> 
      </div>
    </div>


    <div style="height: 50px"></div>
    <button class="btn topButton" onclick="goToTop()">
      <i class="fas fa-arrow-up"></i>
    </button>
    <footer class="page-footer font-small"
      style="background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);">
      <div class="container">
        <div class="row">
          <div class="col-md-12 py-4 text-white text-center">
            <div class="mb-1 flex-center">
              <a class="fb-ic">
                <i
                  class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a class="gplus-ic">
                <i
                  class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <a class="li-ic">
                <i
                  class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"
                >
                </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer-copyright text-center text-white py-1"
        style="  background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);
        "
      >
        © 2019 Copyright:
        <a href="#" style="color:white"> vishwacon.com</a>
      </div>
    </footer>

    <script type="text/javascript" src="./assets/js/sal.js"></script>
    <script type="text/javascript" src="./assets/js/home.js"></script>
  </body>
</html>
