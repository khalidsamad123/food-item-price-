let name =prompt("enter name");
let item =prompt("enter item");


if (item == "sopper","peanut","rio","click","lemon") {
    let rate =prompt("enter item price",["40","30","20","10"]);
    if (rate == 40) {
        swal("300");
        document.write(name," you order has been succesfull")
        
    }
    if (rate == 30) {
        swal("340");
        document.write(name," you order has been succesfull")
        
    }
    if (rate == 20) {
        swal("300");
        document.write(name," you order has been succesfull")
        
    }
    if (rate == 10){
        swal("225");
        document.write(name," you order has been succesfull")   
        
    }
}