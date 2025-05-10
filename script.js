 function cal_cube(){
    var Area_cube = document.getElementById("Area_cube").value;
    console.log(Area_cube)
    var csa = 4 * Area_cube**2;
    var tsa = 6 * Area_cube**2;
    var vol = Area_cube**3;
    var resultText = 
        "<p style='font-family: Courier New; font-size: 18px; color: #ffeb3b;'>Curved Surface Area: " + csa + "</p>" +
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676;'>Total Surface Area: " + tsa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: ;'>Volume: " + vol + "</p>";
    document.getElementById("result_cube").innerHTML = resultText;
    }

    function cal_cuboid(){
    var length = document.getElementById("length_cuboid").value;
    var bredth = document.getElementById("bredth_cuboid").value;
    var height = document.getElementById("Height_cuboid").value;
    console.log(length,bredth,height)
    var csa = 2 * height * (length + bredth);
    var tsa = 2 * (length * height + bredth * height);
    var vol = length * bredth * height;
    var resultText = 
         "<p style='font-family: Courier New; font-size: 18px; color: #ffeb3b;'>Curved Surface Area: " + csa + "</p>" +
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676;'>Total Surface Area: " + tsa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: ;'>Volume: " + vol + "</p>";
    document.getElementById("result_cuboid").innerHTML = resultText;
    }
    
    function cal_cylinder(){
    var radius = document.getElementById("Rad_cyn").value;
    var height = document.getElementById("Height_cyn").value;
    console.log(radius,height)
    var csa = 2 * 3.14 * radius * height;
    var tsa = 2 * 3.14 * radius * (radius + height);
    var vol = 3.14 * radius**2 * height;
    var resultText = 
         "<p style='font-family: Courier New; font-size: 18px; color: #ffeb3b;'>Curved Surface Area: " + csa + "</p>" +
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676;'>Total Surface Area: " + tsa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: ;'>Volume: " + vol + "</p>";
    document.getElementById("result_cylinder").innerHTML = resultText;
    }

    function cal_cone(){
    var radius = document.getElementById("radius_cone").value;
    var height = document.getElementById("Height_cone").value;
    var side = document.getElementById("side_cone").value;
    console.log(radius,height,side)
    var sa = (3.14 * radius * side) + (3.14 * radius**2)
    var vol = (1/3) * 3.14 * radius**2 * height;
    var resultText = 
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676 ;'>Surface Area: " + sa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: snow ;'>Volume: " + vol + "</p>";
    document.getElementById("result_cone").innerHTML = resultText;
    }

    function cal_rectangle(){
    var length = document.getElementById("length_rec").value;
    var width = document.getElementById("width_rec").value;
    var height = document.getElementById("Height_rec").value;
    console.log(length,width,height)
    var sa = 2 * (length * height + width * height);
    var vol = length * width * height;
    var resultText = 
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676;'>Surface Area: " + sa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: snow;'>Volume: " + vol + "</p>";
    document.getElementById("result_rec").innerHTML = resultText;
    }

    function cal_triangle(){
    var length = document.getElementById("length_tri").value;
    var bredth = document.getElementById("bredth_tri").value;
    var height = document.getElementById("Height_tri").value;
    var side = document.getElementById("side_tri").value;
    console.log(length,bredth,height,side)
    var sa = (bredth * height) + (2 * length * side) + (length * bredth)
    var vol = (1/2) * length * bredth * height;
    var resultText = 
        "<p style='font-family: Verdana; font-size: 18px; color: #00e676;'>Surface Area: " + sa + "</p>" +
        "<p style='font-family: Georgia; font-size: 18px; color: snow;'>Volume: " + vol + "</p>";
    document.getElementById("result_tri").innerHTML = resultText;
    }