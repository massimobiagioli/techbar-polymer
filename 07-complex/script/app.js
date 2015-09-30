var dataProvider = (function() {
	
	var sampledata = [
		{'nome':'Mario', 'cognome':'Rossi', 'cti':true},
		{'nome':'Anna', 'cognome':'Verdi', 'cti':false},
		{'nome':'Giulio', 'cognome':'Bianchi', 'cti':true},
		{'nome':'Franco', 'cognome':'Marroni', 'cti':false}
	];  
	
	return {
		getSampleData: function() {
			return sampledata;
		}
	}

})();