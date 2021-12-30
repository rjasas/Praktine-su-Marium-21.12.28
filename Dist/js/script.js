console.log("test")

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    $(".b1").click(function(){
        $(".box").toggleClass("boxSize");    
    });
    $(".b2").click(function(){
        $(".box").toggleClass("boxHeight")
    });
    $(".b3").click(function(){
        $(".box").toggleClass("boxWidth")
    });
    $(".b4").click(function(){
        $(".box").toggleClass("boxCenter")
    })
});

// $(document).ready(function pallet(){
//     return "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")"
// });
//     $(".p1").click(function(){
//         $(".p1").css("pallet")
//     })




$(document).ready(function(){
    const names = [
        "Petras",
        "Jonas",
        "Antanas"
    ];

    const lastNames = [
        "Petrauskas",
        "Jonaitis",
        "Antanauskas"
    ];

    const metai = [
        21,
        32,
        56
    ];


    // lentelė name | last name | age
    // ......|duomenys|..............

    let tableStart = "<table";
    let tableEnd = "</table>";
    let rowStart = "<tr>";
    let rowEnd = "</tr>";
    let dataStart = "<td>";
    let dataEnd = "</td>";
    let header = rowStart + "<th>Name</th><th>Last Name</th><th>Age</th>"+rowEnd;

    $("showTable").click(function(){
        let table = $("#table");
        if(table.is(":empty")){
            table.append(tableStart, header);
            for (let i = 0; i<names.lenght; i++){
                table.append(rowStart+dataStart+names[i]+dataEnd+dataStart+lastNames[i]+dataEnd+dataStart+metai[i]+dataEnd+rowEnd);
            }
            table.append(tableEnd)
        }
    });
});
