
$(document).ready(function () {
  $(".newyork").click(function () {
      $("#large").toggle();
      $(".larges").toggle();

  });
  $(".neapolitan").click(function () {
      $(".mediums").toggle();
      $("#medium").toggle();

  });
  $(".stloise").click(function () {
      $("#small").toggle();
      $(".smalls").toggle();

  });
  $(".silican").click(function () {
      $("#extralarge").toggle();
      $(".extralarges").toggle();

  });
  $(".chicago").click(function () {
      $("#extramedium").toggle();
      $(".extramediums").toggle();

  });
  $(".detroit").click(function () {
      $("#extrasmall").toggle();
      $(".extrasmalls").toggle();

  });
  $(".california").click(function () {
      $("#largesmall").toggle();
      $(".largesmalls").toggle();


  });
  $(".greek").click(function () {
      $("#largemedium").toggle();
      $(".largemediums").toggle();
  });

});

var cost , crust_cost, topping_cost ;
let total = 0;
function Buypizza( names,sizes,crusts,toppings, total ){
  this.names = names;
  this.crusts = crusts;
  this.sizes = sizes;
  
  this.toppings = toppings;
  this.total = total;
}



$(document).ready(function(){
  
  $("button.proceed").click(function(event){
   let pessname = $(".name option:selected").val();
   let pessize = $("#size option:selected").val();
   let pesscrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(pessize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1000;
       console.log(price);
     break;
     case "medium":
       price = 800;
       console.log("The cost is "+price);
     break;
     case "small":
       price = 500;
       console.log(price);
     default:
       console.log("incurred an error"); 
   }
   switch(pesscrust){
      case "0":
        crust_price = 0;
      break;
      case "thin-crust":
        crust_price = 700;
      break;
      case "thick-crust":
        crust_price = 600;
      break;
      case "deep-crust":
        crust_price = 500;
      break;
      case "stuffed-crust":
        crust_price = 400;
        break;
        case "cheese-filled-crust":
        crust_price = 300;
        break;
      default:
        console.log("No cost indicated"); 
    }
    let topping_digit = ptopping.length*50;
    console.log("toppins value" + topping_digit);

    if((pessize == "0") && (pesscrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please choose pizza size and corresponding crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_digit;
    console.log(total);
    let totalCheckout =0;
    totalCheckout = totalCheckout + total;

    $("#pizza-names").html($(".name option:selected").val());
    $("#pizza-sizes").html( $("#size option:selected").val());
    $("#pizza-crusts").html($("#crust option:selected").val());
    $("#pizza-toppings").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      let pessname = $(".name option:selected").val();
      let pessize = $("#size option:selected").val();
      let pesscrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(pessize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1000;
           console.log(price);
         break;
         case "medium":
           price = 800;
           console.log("The price is "+price);
         break;
         case "small":
           price = 500;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pesscrust){
          case "0":
            crust_price = 0;
          break;
          case "thin-crust":
            crust_price = 700;
          break;
          case "thick-crust":
            crust_price = 600;
          break;
          case "deep-crust":
            crust_price = 500;
          break;
          case "stuffed-crust":
            crust_price = 400;
            break;
            case "cheese-filled-crust":
            crust_price = 300;
            break;
          default:
            console.log("No price"); 
        }
        let topping_digit = ptopping.length*50;
        console.log("toppins value" + topping_digit);
        total = price + crust_price + topping_digit;
        console.log(total);

        totalCheckout = totalCheckout + total;
        console.log(totalCheckout);
      // constractor function
      var anotherOrder = new Buypizza(pessname, pessize, pesscrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+anotherOrder.names +'</td><td id="pizzasize">' + anotherOrder.sizes + '</td><td id="pizzacrust">'+anotherOrder.crusts + '</td><td id="pizzatopping">'+anotherOrder.topping+'</td><td id="totals">'+anotherOrder.total+'</td></tr>');
      console.log(anotherOrder);
      
      

    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.supply").slideDown(1000);
      $("#priceaddition").slideDown(1000);
      console.log("Your total bills is sh. "+totalCheckout);
      $("#pizzadition").append("Your bill is sh. "+totalCheckout);
    });

    // home delivery button
    $("button.supply").click(function(){
      $(".eatable").hide();
      $(".select h2").hide();
      $(".take").slideDown(1000);
      $("#priceaddition").hide();
      $("button.supply").hide();
      $("#pizzadition").hide();
      let deliceryamount= totalCheckout+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#spendingtotal").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    // when one clicks place order button
    $("button#lastdelivery").click(function(event){
      event.preventDefault();

      $("#pizzadition").hide();
      $(".take").hide();
      $("button#lastdelivery").hide();
      let deliceryamount= totalCheckout+200;
      console.log("Final amount is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#lasttext").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#spendingtotal").hide();
        $("#lasttext").slideDown(1200);
      }
      else {
        alert("make sure you fill in your information for delivery!");
        $(".take").show();
        $("button#lastdelivery").show();
      }
    });
   event.preventDefault();
  });
});