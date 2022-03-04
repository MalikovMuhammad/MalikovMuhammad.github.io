﻿           function valyuta(pair) {
                if (document.getElementById(pair).style.display == "none") {
                    document.getElementById(pair).style.display = "block";
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container">  <div id="tradingview_'+pair+'"></div>  <div class="tradingview-widget-copyright">	<b style="color:black;">График '+pair+' '+ timeframe +' </b>  </div></div>';                
                    new TradingView.widget({
                        "autosize": true,
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
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container">  <div id="tradingview_'+pair+'"></div>  <div class="tradingview-widget-copyright">	<b style="color:black;">График '+pair+' '+ timeframe +'  </b>  </div></div>';                
                    new TradingView.widget({
                        "autosize": true,
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
           
    //Изменение ширины графиков
    function setChartWidth(){
        var width = document.getElementById('chartWidth').value;
        
        document.getElementById('EURUSD').style.width = width;
        document.getElementById('GBPUSD').style.width = width;
        document.getElementById('AUDUSD').style.width = width;
        document.getElementById('NZDUSD').style.width = width;
        document.getElementById('USDCAD').style.width = width;
        document.getElementById('USDCHF').style.width = width;
        document.getElementById('USDJPY').style.width = width;
        
        document.getElementById('EURGBP').style.width = width;
        document.getElementById('EURAUD').style.width = width;
        document.getElementById('EURNZD').style.width = width;
        document.getElementById('EURCAD').style.width = width;
        document.getElementById('EURCHF').style.width = width;
        document.getElementById('EURJPY').style.width = width;
        
        document.getElementById('GBPAUD').style.width = width;
        document.getElementById('GBPNZD').style.width = width;
        document.getElementById('GBPCAD').style.width = width;
        document.getElementById('GBPCHF').style.width = width;
        document.getElementById('GBPJPY').style.width = width;
        
        document.getElementById('AUDNZD').style.width = width;
        document.getElementById('AUDCAD').style.width = width;
        document.getElementById('AUDCHF').style.width = width;
        document.getElementById('AUDJPY').style.width = width;
        
        document.getElementById('NZDCAD').style.width = width;
        document.getElementById('NZDCHF').style.width = width;
        document.getElementById('NZDJPY').style.width = width;
        
        document.getElementById('CADCHF').style.width = width;
        document.getElementById('CADJPY').style.width = width;
        
        document.getElementById('CHFJPY').style.width = width;
        
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        document.getElementById('USDT').style.width = width;
        
    }
    
    //Изменение высоты графиков
    function setChartHeight(){
        var height = document.getElementById('chartHeight').value;
        
        document.getElementById('EURUSD').style.height = height;
    }
           
           
           
           
           
           
           
           