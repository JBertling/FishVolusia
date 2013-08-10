$(document).ready(function() {
	getResultCount();
	sortResults();

	function getResultCount() {
		var countResults = 0;
		$(".searchResults article").not(":hidden").each(function() {
			countResults++;
		});
		if (countResults > 0) {
			$(".searchResults .noResultsFound").hide();
			$(".resultsCount span").html(countResults);
		}
		else {
			$(".searchResults .noResultsFound").show();
			$(".searchResults article").slideDown();
			$(".resultsCount span").html(countResults);
		}
		
	}
	
	function sortResults() {
		$(".refineSearch .refinement").click(function() {
			$(".refinement").removeClass("active").children(".close").remove();
			$(this).addClass("active").prepend("<span class='close'>&times;</span>");
			var dataSet = $(this).parent().attr("data-set");
			var getDataSet = "data-" + dataSet;
			if (dataSet == "city") {
				var sortTerm = $(this).attr(getDataSet);
				$(".searchResults article").each(function() {
					var sortOfData = $(this).attr(getDataSet);
					if (sortOfData != sortTerm) {
						$(this).slideUp("fast", function() {
							getResultCount();
						});
					}
					else {
						$(this).slideDown("fast", function() {
							getResultCount();
						});
					}
				})
			}
			else if (dataSet == "amenities") {
				alert('amenities');
			}
		});
	}
});

// PLUGINS
// Maps
