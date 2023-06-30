@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
}

.circle {
    width: 200px;
    height: 200px;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items:center;
    padding-top:100px;

}

.photo {
    width: 220px;
    height: 220px;
    border-radius: 70%;
    background-size: cover;
    background-color: #e9e9e9;
    background-position: center;
    border: 2px solid #2fa2bf;
    background-image: url("images/my_phots.png");
    
}

.formobject {
    padding-top: 200px;
}


.logo {
    position: relative;
    width: 300px;
    height: 300px;
  }
  
  .logo::before,
  .logo::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    background-color: #eaeaea;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .logo::before {
    right: 0;
  }
  
  .logo::after {
    left: 0;
  }
  
  .letter-g {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 100px;
    font-weight: bold;
    color: #333;
    padding-right: 200px;
    z-index: 1;
  }
  
.letter-s {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 100px;
    font-weight: bold;
    color: #333;
    padding-left: 200px;
    z-index: 1;
}

body{
	/* background-image: url("https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:100vh;
	font-family: 'Noto Sans', sans-serif;
}
.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
}
.box{
	position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
}
.input-container{
	position:relative;
	margin-bottom:25px;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
	transition: all 0.5s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#fff;
}
.input-container input:focus{ 
 border:none;	
 outline:none;
 border-bottom:1px solid #e74c3c;	
}
.btn{
	color:#fff;
	background-color:#e74c3c;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	/* margin-top:50px; */
	border-radius:2px;
	cursor:pointer;
	position:relative;
}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/
.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-12px;
	font-size:12px;
	
}

.bottom-row {
    display: flex;
    justify-content: center; /* Align items horizontally in the center */
    flex-grow: 1;
    padding-top: 2px;
}
_________________________________________________________________________
<!DOCTYPE html>
<html>
  <head>
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link rel="stylesheet" type="text/css" href="style.css"> 
    </head>
  <body>
    <!-- <div class="logo">
      <div class="letter-g">G</div>
      <div class="letter-s">S</div>
    </div> -->
    <div class="container-fluid mt-3 w3-container d-flex justify-content-center align-items-center box">
      <div class="row">
        <div class="col-sm-4 p-3 text-center">
          <div class="circle">
            <div class="photo">
              <img src="/Users/dammaladinesh/practice_file/javascript/images/my_phots.png">
            </div>
          </div>
        </div>
        <div class="col-sm-8 p-3 text-center">
          <h1 style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Welcome to the DINSAIStore's</h1><br>
          <form id="myform">
            <div class="input-container">
              <input type="text" id="fname">
              <label>First Name</label>
            </div>
            <div class="input-container">
              <input type="text" id="lname">
              <label>Last Name</label>
            </div>
            <div class="bottom-row">
                <input type="submit" value="Submit" class="btn">
              </div>
            </div>
          </form>
          <p id="demo"></p>
        </div>
      </div>
    </div>  
  </body>
  <script src="pagejs.js"></script>
</html>
