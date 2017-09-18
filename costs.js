function calculateCosts() {

  var sellingPrice = $('#sellingPrice').val();
  var salesTax = $('#salesTax').val();
  var productCost = $('#productCost').val();
  var transactionFee = $('#transactionFee').val();
  var currencyChangingFee = $('#currencyChangingFee').val();
  var affiliateCommission = $('#affiliateCommission').val();
  var discountRate = $('#discountRate').val();
  var otherCosts = $('#otherCosts').val();

  if (sellingPrice.length == '') {
    sellingPrice = 0;
  } else {
    sellingPrice = parseFloat(sellingPrice);
  }
  if (salesTax.length == '') {
    salesTax = 0;
  } else {
    salesTax = parseFloat(salesTax);
  }
  if (productCost.length == '') {
    productCost = 0;
  } else {
    productCost = parseFloat(productCost);
  }
  if (transactionFee.length == '') {
    transactionFee = 0;
  } else {
    transactionFee = parseFloat(transactionFee);
  }
  if (currencyChangingFee.length == '') {
    currencyChangingFee = 0;
  } else {
    currencyChangingFee = parseFloat(currencyChangingFee);
  }
  if (affiliateCommission.length == '') {
    affiliateCommission = 0;
  } else {
    affiliateCommission = parseFloat(affiliateCommission);
  }
  if (discountRate.length == '') {
    discountRate = 0;
  } else {
    discountRate = parseFloat(discountRate);
  }
  if (otherCosts.length == '') {
    otherCosts = 0;
  } else {
    otherCosts = parseFloat(otherCosts);
  }
  salesTaxPlusOne = 1 + (salesTax / 100);
  var discountCost = sellingPrice* (discountRate / 100);
  var productPrice = sellingPrice - discountCost;
  var priceAfterTax = productPrice / salesTaxPlusOne;
  salesTax = priceAfterTax * (salesTax / 100);
  var transactionFeeCost = productPrice * (transactionFee / 100);
  var currencyChangingFeeCost = productPrice * (currencyChangingFee / 100);
  var affiliateCost = sellingPrice * (affiliateCommission / 100);
  var totalCost = transactionFeeCost + currencyChangingFeeCost + affiliateCost + productCost + otherCosts;
  var profit = priceAfterTax - totalCost;

  $('#productCostValue').text(productCost.toFixed(2));
  $('#salesTaxValue').text(salesTax.toFixed(2));
  $('#transactionFeeCost').text(transactionFeeCost.toFixed(2));
  $('#currencyChangingFeeCost').text(currencyChangingFeeCost.toFixed(2));
  $('#affiliateCommissionCost').text(affiliateCost.toFixed(2));
  $('#discountCost').text(discountCost.toFixed(2));
  $('#otherCostsValue').text(otherCosts.toFixed(2));
  $('#totalCost').text(totalCost.toFixed(2));
  $('#profit').text(profit.toFixed(2));
  //$('#productPriceAfterTax').text(priceAfterTax.toFixed(2));
  $('#productPrice').text(productPrice.toFixed(2));

}

$(document).ready(function () {
  $("#sellingPrice").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#productCost").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#currencyChangingFee").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#transactionFee").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#affiliateCommission").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#discountRate").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

    $("#otherCosts").keyup(function() {
    var $this = $(this);
    $this.val($this.val().replace(/[^\d.]/g, ''));
    });

});
