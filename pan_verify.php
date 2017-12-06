<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Verify Pan detail</title>
</head>
<body>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">PAN Number Verification</a>
    </div>
</div>
</nav>

        <section>
            <div class="container">
                <div class="row margin">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 panel panel-default">
                            <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" class="form-control" id="name" >
                            </div>
                            <div class="form-group">
                                    <label for="pan">Pan:</label>
                                    <input type="text" class="form-control" id="pan_no">
                            </div>
                        <div class="form-group text-center">
                            <input type="button" value="Verify" id="verify_btn" class="btn btn-primary btn-lg">
                            
                        </div>
                        <div id="result" class="alert">
                                
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>    
        </section>
    
        <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
</body>
</html>