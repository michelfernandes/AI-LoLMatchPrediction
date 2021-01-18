var scrap = function(){
    var rows = $('table.wikitable tbody >tr');
    var columns;
    for (var i = 0; i < rows.length; i++) {
        if(rows[i].hasAttribute('data-highlight-row')){
            columns = $(rows[i]).find('td');

            split = $(columns[1]).find('a')[0].text;
            if(split == 'CBLOL 2020 Split 2'){

                let line = '';
                let team = 1;
                let result;
                
                switch($($(columns[5]).find('a')[0]).attr('href')){

                    case '/PaiN_Gaming':
                        team = 1;
                        break;
                    case '/Flamengo_Esports':
                        team = 2;
                        break;
                    case '/INTZ':
                        team = 3;
                        break;
                    case '/KaBuM!_e-Sports':
                        team = 4;
                        break;
                    case '/Prodigy_Esports':
                        team = 5;
                        break;
                    case '/Vivo_Keyd':
                        team = 6;
                        break;
                    case '/Santos_e-Sports':
                        team = 7;
                        break;
                    case '/FURIA_Esports':
                        team = 8;
                        break;

                }
                
                result = $(columns[3]).html() === 'Win' ? 0 : 1;

                line = '{ input: [8, ' + team + '], output: [' + result + '] },';

                console.log(line);
                //console.log('Pain vs ' + $($(columns[5]).find('a')[0]).attr('href') + ': ' + );
            }
        }
    }
}