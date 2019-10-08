// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5p6B-2uwGkoCmFtEB2v3JbXfcASyCRaU",
    authDomain: "ivape-3fb50.firebaseapp.com",
    databaseURL: "https://ivape-3fb50.firebaseio.com",
    projectId: "ivape-3fb50",
    storageBucket: "ivape-3fb50.appspot.com",
    messagingSenderId: "125361520833",
    appId: "1:125361520833:web:7b0e2b3c594627faf85440",
    measurementId: "G-91EWJ1ME4H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();

$(document).on('click', 'button', function(event) {
    event.preventDefault();

    var date = $('#date').val().trim();
    var vendor = $('#vendor').val().trim();
    var pages = $('#pageCount').val().trim();
    var employee = $('#employee').val().trim();

    var newBatch = {
        date,
        vendor,
        pages,
        employee
    }
    database.ref().push(newBatch);
    console.log(newBatch);
    console.log('button has been pressed')
    $('#date').val('');
    $('#vendor').val('');
    $('#pageCount').val('');
    $('#employee').val('');
});
database.ref().on('child_added', function(childeSnapshot) {

    var date = childeSnapshot.val().date;
    var vendor = childeSnapshot.val().vendor;
    var pages = childeSnapshot.val().pages;
    var employee = childeSnapshot.val().employee;

    var newRow = $("<tr>").append(
        $("<td>").text(date),
        $("<td>").text(vendor),
        $("<td>").text(pages),
        $("<td>").text(employee),
    )
    $("#infoTable > tbody").append(newRow);

});