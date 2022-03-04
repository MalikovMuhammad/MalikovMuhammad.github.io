           function valyuta(pair) {
                if (document.getElementById(pair).style.display == "none") {
                    document.getElementById(pair).style.display = "block";
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container">  <div id="tradingview_'+pair+'"></div>  <div class="tradingview-widget-copyright">	<b style="color:black;">График '+pair+' </b>  </div>';                
                    new TradingView.widget({
                        "width": 450,
                        "height": 280,
                        "symbol": "FOREXCOM:"+pair,
                        "interval": timeframe,
                        "timezone": "Asia/Bahrain",
                        "theme": "light",
                        "style": "1",
                        "locale": "ru",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "hide_legend": true,
                        "hide_top_toolbar": true,
                        "hide_side_toolbar": false,
                        "allow_symbol_change": true,
                        "save_image": false,
                        "container_id": "tradingview_"+pair
                    });    
                }            
                else {
                    document.getElementById(pair).innerHTML = '';
                    document.getElementById(pair).style.display = "none";                    
                }                
	       }
      
           function kripto(pair) {
                if (document.getElementById(pair).style.display == "none") {
                    document.getElementById(pair).style.display = "block";
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container">  <div id="tradingview_'+pair+'"></div>  <div class="tradingview-widget-copyright">	<b style="color:black;">График '+pair+' </b>  </div>';                
                    new TradingView.widget({
                        "width": 450,
                        "height": 280,
                        "symbol": "BINANCE:"+pair,
                        "interval": timeframe,
                        "timezone": "Asia/Bahrain",
                        "theme": "light",
                        "style": "1",
                        "locale": "ru",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "hide_legend": true,
                        "hide_top_toolbar": true,
                        "hide_side_toolbar": false,
                        "allow_symbol_change": true,
                        "save_image": false,
                        "container_id": "tradingview_"+pair
                    });    
                }            
                else {
                    document.getElementById(pair).innerHTML = '';
                    document.getElementById(pair).style.display = "none";                    
                }                
	       }       