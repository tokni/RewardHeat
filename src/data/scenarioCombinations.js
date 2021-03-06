export default { 
	scenarioCombinations : 
		{ 
			scenarioOptions : [ 
				{ 
					"id": 0, 
					"name": "ConventionalDH_Ambitious", 
					"nameNoOptions": "ConventionalDH", 
					"short_description": "ConventionalDH", 
					"ultra_short_description": "DH+A", 
					"desc": "Conventional District Heating without Low Temperature Heat Sources Ambitious Scenario Net Zero Emission by 2030 compared to 2015", 
					"opt0": true, 
					"opt1": false, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 1, 
					"name": "ConventionalDH_WEO-SD", 
					"nameNoOptions": "ConventionalDH", 
					"short_description": "ConventionalDH", 
					"ultra_short_description": "DH+SD", 
					"desc": "Conventional District Heating without Low Temperature Heat Sources World Energy Outlook Sustainable Development Scenario 95%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": true, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 2, 
					"name": "ConventionalDH_WEO-NP", 
					"nameNoOptions": "ConventionalDH", 
					"short_description": "ConventionalDH", 
					"ultra_short_description": "DH+NP", 
					"desc": "Conventional District Heating without Low Temperature Heat Sources World Energy Outlook New Policies Scenario 60%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": false, 
					"opt2": true, 
					"opt3": false, 
				}, 
				{ 
					"id": 3, 
					"name": "TransitionDH_Ambitious", 
					"nameNoOptions": "TransitionDH", 
					"short_description": "TransitionDH", 
					"ultra_short_description": "TraDH+A", 
					"desc": "Conventional District Heating with Low-Temperature Heat Sources Ambitious Scenario Net Zero Emission by 2030 compared to 2015", 
					"opt0": true, 
					"opt1": false, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 4, 
					"name": "TransitionDH_WEO-SD", 
					"nameNoOptions": "TransitionDH", 
					"short_description": "TransitionDH", 
					"ultra_short_description": "TraDH+SD", 
					"desc": "Conventional District Heating with Low-Temperature Heat Sources  World Energy Outlook Sustainable Development Scenario 95%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": true, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 5, 
					"name": "TransitionDH_WEO-NP", 
					"nameNoOptions": "TransitionDH", 
					"short_description": "TransitionDH", 
					"ultra_short_description": "TraDH+NP", 
					"desc": "Conventional District Heating with Low-Temperature Heat Sources World Energy Outlook New Policies Scenario 60%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": false, 
					"opt2": true, 
					"opt3": false, 
				}, 
				{ 
					"id": 6, 
					"name": "FutureDH_Ambitious", 
					"nameNoOptions": "FutureDH", 
					"short_description": "FutureDH", 
					"ultra_short_description": "FDH+A", 
					"desc": "Low-Temperature District Heating with Low-Temperature Heat Sources Ambitious Scenario Net Zero Emission by 2030 compared to 2015", 
					"opt0": true, 
					"opt1": false, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 7, 
					"name": "FutureDH_WEO-SD", 
					"nameNoOptions": "FutureDH", 
					"short_description": "FutureDH", 
					"ultra_short_description": "FDH+SD", 
					"desc": "Low-Temperature District Heating with Low-Temperature Heat Sources World Energy Outlook Sustainable Development Scenario 95%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": true, 
					"opt2": false, 
					"opt3": false, 
				}, 
				{ 
					"id": 8, 
					"name": "FutureDH_WEO-NP", 
					"nameNoOptions": "FutureDH", 
					"short_description": "FutureDH", 
					"ultra_short_description": "FDH+NP", 
					"desc": "Low-Temperature District Heating with Low-Temperature Heat Sources World Energy Outlook New Policies Scenario 60%  Total CO2 Reduction by 2050 compared to 2015", 
					"opt0": false, 
					"opt1": false, 
					"opt2": true, 
					"opt3": false, 
				}, 
			], 
			optionsAvailable: { 
				"ConventionalDH": { 
					"opt0": true,
					"opt1": true,
					"opt2": true,
					"opt3": false,
					}, 
				"TransitionDH": { 
					"opt0": true,
					"opt1": true,
					"opt2": true,
					"opt3": false,
					},  
				"FutureDH": { 
					"opt0": true,
					"opt1": true,
					"opt2": true,
					"opt3": false,
					},
			} 
		} 
	};