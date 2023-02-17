/////////////////////////////////////////////////////
// @name: Assigmnet 1 //////////////////////////////
// @course Code: SODV1201 - 23JANMNTR1 ////////////
// @class: Software Development Diploma Program //
// @author: Samuel Borrego Vargas /////////////// 
////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// 1.	In your profile page, display current date on footer // 
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// 2.	In your profile page, the name of the picture should appear after 10 second // 
///////////////////////////////////////////////////////////////////////////////////

window.onload = function showDateTitle() {

  // Display current date on footer inmediately of page load
  var today = new Date();
  document.getElementById('date').innerHTML = today.toDateString();

  // Show title after 10 seconds of page load
  setTimeout(function () {
    document.getElementById('meh').hidden = false;
  }, 10000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 3.	Build a web application that take numerical mark and convert corresponding letter grade.// 
///////////////////////////////////////////////////////////////////////////////////////////////

function markToGrade() {
  let markval = document.getElementById("markinput").value;

  // Validate mark is not null
  if (!markval) {
    document.getElementById("markinput").placeholder = ".  ------ Enter a Mark ------   ."; // Display placeholder asking for a mark
    document.getElementById("resGrade").innerHTML = "";
    return;
  }

  // Validate mark is not a number
  if (isNaN(markval)) {
    document.getElementById("resGrade").innerHTML = "<span style='color:red;'>Invalid input - The Mark is not a number</span>";// Display error message
    return;
  }

  let mark = parseInt(document.getElementById("markinput").value);

  // Validate mark is negative
  if (mark < 0) {
    document.getElementById("resGrade").innerHTML = "<span style='color:red;'>Invalid input - The Mark is a negative value</span>";// Display error message
    return;
  }

  // Validate mark is more than 100
  if (mark > 100) {
    document.getElementById("resGrade").innerHTML = "<span style='color:red;'>Invalid input - The Mark value is above 100</span>";// Display error message
    return;
  }

  // Give mark grade
  let grade;
  if (mark >= 90 && mark <= 100) {
    grade = "A";
  }
  else if (mark >= 80) {
    grade = "B";
  }
  else if (mark >= 70) {
    grade = "C";
  }
  else if (mark >= 50) {
    grade = "D";
  }
  else if (mark >= 0 && mark < 50) {
    grade = "F";
  }
  else {
    grade = "";
  }
  // Display grade on HTML page
  document.getElementById("resGrade").innerHTML = grade;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4.	Create a new staff page and write a program which display list of staff information with sorting capability by name and salary.//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array of staff information provided for the assignment
var dataSet = [
  ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
  ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
  ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
  ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
  ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];

// Sort data by name
$(document).ready(function staff() {
  var $staffList = $("#staff-list");// Display data in the Table

  // Display data in the Table
  function displayData() {
    $staffList.empty(); // Clear the tables

    // Loop through the dataSet and create a new row for each staff member
    for (var i = 0; i < dataSet.length; i++) {
      var staff = dataSet[i];
      var $row = $("<tr>");

      // Loop through each staff member and create a new cell for each
      for (var j = 0; j < staff.length; j++) {
        $row.append($("<td>").text(staff[j]));
      }

      // Add the row to the table
      $staffList.append($row);
    }
  }

  // Sort data by name  (ascending)
  function sortDataAlpha(column, ascending) {
    dataSet.sort(function (a, b) {     
        return a[column].localeCompare(b[column]);     
    });
    displayData();
  }

  // Sort data by salary (ascending)
  function sortDataNum(column, ascending) {
    dataSet.sort(function (a, b) {
      // Extract the numeric values from the column strings
      const numA = parseFloat(a[column].replace(/[$,]/g, ''));
      const numB = parseFloat(b[column].replace(/[$,]/g, ''));
  
      if (numA < numB) {
        return ascending ? -1 : 1;
      } else if (numA > numB) {
        return ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
    displayData();
  }
  
  // Sort data by name on click with function sortDataAlpha
  $("#sort-name").click(function sortname() {
    sortDataAlpha(0, true); // Sort data by name (0 is the column number, true is ascending)
  });

  // Sort data by salary on click with function sortDataNum
  $("#sort-salary").click(function sortsalary() { 
    sortDataNum(5, true);// Sort data by salary (5 is the column number, true is ascending)
  });

  displayData();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5.	Create a new page called Weather/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Named function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Anonymous function to convert Celsius to Kelvin
const celsiusToKelvin = function (celsius) {
  return celsius + 273.15;
}

// jQuery code to handle button click event
$(document).ready(function () {
  $('#convert-btn').click(function () {
    const fahrenheit = $('#fahrenheit-input').val();
    const celsius = fahrenheitToCelsius(fahrenheit);
    const kelvin = celsiusToKelvin(celsius);
    // validate input User must enter a number (empty string is not a number)
    if (fahrenheit == "") {
      document.getElementById("fahrenheit-input").style.borderColor = "red";
      $('#temp-input').text('Enter a Number');
      $('#celsius-output').text('');
      $('#kelvin-output').text('');
    }
    // validate input User must enter a number (  not a number)
    else if (isNaN(fahrenheit)) {
      document.getElementById("fahrenheit-input").style.borderColor = "red";
      $('#temp-input').text('Must be Number');
      $('#celsius-output').text('');
      $('#kelvin-output').text('');
    }
    // return results
    else {
      document.getElementById("fahrenheit-input").style.borderColor = "black";
      document.getElementById("temp-input").innerHTML = "";
      $('#celsius-output').text(celsius.toFixed(2) + ' °C');
      $('#kelvin-output').text(kelvin.toFixed(2) + ' K');
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

